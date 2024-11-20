<template>
  <div class="space-y-4">
    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">Unable to load upcoming matches. Please try again later.</p>
      <button @click="refresh" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Try Again
      </button>
    </div>

    <!-- Matches -->
    <div v-else-if="upcomingMatches.length" class="grid grid-cols-1 gap-4">
      <div v-for="match in upcomingMatches" :key="match.id" 
           class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <div class="p-6">
          <!-- Competition Badge -->
          <div class="flex justify-between items-center mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {{ match.competition }}
            </span>
            <span class="text-sm text-gray-500 font-medium">
              {{ formatDateTime(match.startdate, match.starttime) }}
            </span>
          </div>

          <!-- Teams -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 flex-1">
              <img :src="match.team1Logo" :alt="match.team1" 
                   class="w-12 h-12 bg-gray-50 rounded-full p-1">
              <span class="font-semibold">{{ match.team1 }}</span>
            </div>
            <div class="px-4 py-2 bg-gray-50 rounded-lg">
              <span class="text-sm font-bold text-gray-600">VS</span>
            </div>
            <div class="flex items-center space-x-4 flex-1 justify-end">
              <span class="font-semibold">{{ match.team2 }}</span>
              <img :src="match.team2Logo" :alt="match.team2" 
                   class="w-12 h-12 bg-gray-50 rounded-full p-1">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 bg-white rounded-lg shadow-md">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <h3 class="text-lg font-semibold text-gray-900 mb-2">No Upcoming Matches</h3>
      <p class="text-gray-500">Check back later for new matches.</p>
    </div>
  </div>
</template>

<script setup>
const { data: matches, pending, error, refresh } = await useFetch('https://alinetech.net/api/sportmonk/fb/schedule', {
  lazy: true
})

const upcomingMatches = computed(() => {
  if (!matches.value) return []
  return matches.value.slice(0, 5)
})

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