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
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Unable to load schedule</h2>
        <p class="text-gray-600 mb-8">{{ error.message || 'Please try again later.' }}</p>
        <button @click="refresh" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Try Again
        </button>
      </div>

      <!-- Schedule Content -->
      <div v-else>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
          <h1 class="text-4xl font-bold">Upcoming Matches</h1>
          <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <select v-model="selectedCompetition" 
                    class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">All Competitions</option>
              <option v-for="comp in competitions" :key="comp" :value="comp">
                {{ comp }}
              </option>
            </select>
          </div>
        </div>

        <!-- Schedule Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="match in filteredSchedule" :key="match.id" 
               class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <!-- Competition Banner -->
            <div class="bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-2 text-white">
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ match.competition }}</span>
                <span class="text-sm">{{ formatDateTime(match.startdate, match.starttime) }}</span>
              </div>
            </div>
            
            <!-- Match Content -->
            <div class="p-6">
              <!-- Teams -->
              <div class="flex items-center justify-between">
                <div class="text-center flex-1">
                  <img :src="match.team1Logo" :alt="match.team1" 
                       class="w-16 h-16 mx-auto mb-2 bg-gray-50 rounded-full p-1">
                  <div class="font-semibold">{{ match.team1 }}</div>
                </div>
                <div class="px-4">
                  <span class="text-lg font-bold text-gray-400">VS</span>
                </div>
                <div class="text-center flex-1">
                  <img :src="match.team2Logo" :alt="match.team2" 
                       class="w-16 h-16 mx-auto mb-2 bg-gray-50 rounded-full p-1">
                  <div class="font-semibold">{{ match.team2 }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No matches message -->
        <div v-if="filteredSchedule.length === 0" 
             class="text-center py-12 bg-white rounded-lg shadow-md mt-6">
          <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">No Matches Found</h3>
          <p class="text-gray-500">Try adjusting your filters to see more matches.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const selectedCompetition = ref('')

// Fetch schedule data
const { data: schedule, pending, error, refresh } = await useFetch('https://alinetech.net/api/sportmonk/fb/schedule', {
  lazy: true
})

// Extract unique competitions
const competitions = computed(() => {
  if (!schedule.value) return []
  return [...new Set(schedule.value.map(match => match.competition))].sort()
})

// Filter schedule based on selected filters
const filteredSchedule = computed(() => {
  if (!schedule.value) return []
  
  return schedule.value.filter(match => {
    const competitionMatch = !selectedCompetition.value || 
      match.competition === selectedCompetition.value
    return competitionMatch
  })
})

// Format date and time
const formatDateTime = (date, time) => {
  if (!date || !time) return ''
  
  const [day, month, year] = date.split('-')
  const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  
  return `${formattedDate}, ${time}`
}
</script>