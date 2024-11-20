<template>
  <div class="min-h-screen bg-gray-100">
    <TheNavbar />
    <main class="container mx-auto px-4 py-8">
      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Unable to load match details</h2>
        <p class="text-gray-600 mb-8">{{ error.message || 'Please try again later.' }}</p>
        <button @click="refresh" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Try Again
        </button>
      </div>

      <!-- Match Content -->
      <div v-else-if="matchData" class="space-y-8">
        <!-- Match Header -->
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-white">
          <div class="flex justify-between items-center">
            <div class="text-center flex-1">
              <img :src="matchData.team1Logo" :alt="matchData.team1" 
                   class="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2">
              <h2 class="text-2xl font-bold">{{ matchData.team1 }}</h2>
            </div>
            <div class="text-center flex-1">
              <div class="text-5xl font-bold mb-2">{{ matchData.score }}</div>
              <div class="text-xl">{{ matchData.time }}</div>
              <div class="mt-2 text-sm" :class="matchData.statusClass">
                <span v-if="matchData.isLive" class="inline-block w-2 h-2 bg-current rounded-full animate-pulse mr-2"></span>
                {{ matchData.status }}
              </div>
            </div>
            <div class="text-center flex-1">
              <img :src="matchData.team2Logo" :alt="matchData.team2" 
                   class="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2">
              <h2 class="text-2xl font-bold">{{ matchData.team2 }}</h2>
            </div>
          </div>
        </div>

        <!-- Match Content Tabs -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="border-b">
            <nav class="flex">
              <button v-for="tab in tabs" :key="tab.id"
                      @click="activeTab = tab.id"
                      class="px-6 py-4 text-sm font-medium"
                      :class="activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'">
                {{ tab.name }}
              </button>
            </nav>
          </div>

          <div class="p-6">
            <!-- Stats Tab -->
            <div v-if="activeTab === 'stats' && matchData.stats">
              <MatchStats :stats="matchData.stats" />
            </div>

            <!-- Lineups Tab -->
            <div v-if="activeTab === 'lineups' && matchData.lineups">
              <MatchLineups 
                :team1="matchData.team1"
                :team2="matchData.team2"
                :lineup1="matchData.lineups.team1.starting"
                :lineup2="matchData.lineups.team2.starting"
                :subs1="matchData.lineups.team1.substitutes"
                :subs2="matchData.lineups.team2.substitutes"
              />
            </div>

            <!-- Timeline Tab -->
            <div v-if="activeTab === 'timeline'">
              <MatchTimeline :events="matchData.timeline" />
            </div>

            <!-- Commentary Tab -->
            <div v-if="activeTab === 'commentary'">
              <MatchCommentary :commentary="matchData.commentary" />
            </div>

            <!-- No Data Message -->
            <div v-if="!hasDataForCurrentTab" class="text-center py-12">
              <p class="text-gray-600">No {{ activeTab }} data available for this match.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Not Found Message -->
      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Match Not Found</h2>
        <p class="text-gray-600 mb-8">The match you're looking for doesn't exist or has been removed.</p>
        <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const activeTab = ref('stats')

const tabs = [
  { id: 'stats', name: 'Statistics' },
  { id: 'lineups', name: 'Lineups' },
  { id: 'timeline', name: 'Timeline' },
  { id: 'commentary', name: 'Commentary' }
]

// Transform commentary into timeline events
const transformCommentaryToEvents = (commentary) => {
  if (!commentary || !Array.isArray(commentary)) return []

  return commentary.map(comment => {
    // Determine event type based on comment content
    let type = 'default'
    let player = ''
    let team = ''
    
    const lowerComment = comment.comment.toLowerCase()
    
    // Extract event type
    if (comment.is_goal) {
      type = 'goal'
    } else if (lowerComment.includes('yellow card')) {
      type = 'yellow_card'
    } else if (lowerComment.includes('red card')) {
      type = 'red_card'
    } else if (lowerComment.includes('var')) {
      type = 'var'
    } else if (lowerComment.includes('substitution') || lowerComment.includes('is coming on')) {
      type = 'substitution'
    }

    // Extract player name and team
    const playerMatch = comment.comment.match(/^([^-]+)(?:\s*-\s*([^-]+))?/)
    if (playerMatch) {
      player = playerMatch[1].trim()
      team = playerMatch[2]?.trim() || ''
    }

    return {
      id: comment.id,
      minute: comment.minute,
      extra_minute: comment.extra_minute,
      type,
      player,
      team,
      description: comment.comment,
      is_important: comment.is_important
    }
  })
}

const { data: matchData, pending, error, refresh } = await useFetch(
  `https://alinetech.net/api/sportmonk/football/${route.params.id}`,
  {
    lazy: true,
    transform: (data) => {
      if (!data) return null

      return {
        ...data,
        timeline: transformCommentaryToEvents(data.commentary),
        commentary: data.commentary?.map(comment => ({
          ...comment,
          is_goal: comment.comment.toLowerCase().includes('goal') || 
                   comment.comment.toLowerCase().includes('scores')
        }))
      }
    }
  }
)

// Computed property to check if current tab has data
const hasDataForCurrentTab = computed(() => {
  if (!matchData.value) return false

  switch (activeTab.value) {
    case 'stats':
      return !!matchData.value.stats
    case 'lineups':
      return !!matchData.value.lineups
    case 'timeline':
      return Array.isArray(matchData.value.timeline) && matchData.value.timeline.length > 0
    case 'commentary':
      return Array.isArray(matchData.value.commentary) && matchData.value.commentary.length > 0
    default:
      return false
  }
})
</script>