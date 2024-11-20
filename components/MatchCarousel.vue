<template>
  <div class="relative w-full">
    <div v-if="pending" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">Unable to load matches. Please try again later.</p>
      <button @click="refresh" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Try Again
      </button>
    </div>

    <div v-else-if="!matches?.length" class="text-center py-12">
      <p class="text-gray-600">No matches currently available.</p>
      <button @click="refresh" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Check Again
      </button>
    </div>

    <ClientOnly v-else>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="slidesPerView"
        :space-between="30"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="w-full match-carousel"
      >
        <SwiperSlide v-for="match in matches" :key="match.id">
          <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-lg text-white h-full hover:from-blue-800 hover:to-blue-600 transition-colors">
            <!-- Competition Banner -->
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-medium px-3 py-1 bg-white/10 rounded-full">
                {{ match.competition }}
              </span>
              <span v-if="match.startdate && match.starttime" class="text-sm font-medium">
                {{ formatMatchTime(match.startdate, match.starttime) }}
              </span>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="text-center flex-1">
                <img :src="match.team1Logo || '/placeholder-team.png'" :alt="match.team1" 
                     class="w-16 h-16 mx-auto mb-2 bg-white rounded-full p-1">
                <h3 class="font-bold">{{ match.team1 }}</h3>
              </div>
              <div class="text-center px-4">
                <div class="text-3xl font-bold mb-2">{{ match.score }}</div>
                <div class="text-sm opacity-75">
                  {{ getMatchStatus(match.statusId) }}
                </div>
              </div>
              <div class="text-center flex-1">
                <img :src="match.team2Logo || '/placeholder-team.png'" :alt="match.team2" 
                     class="w-16 h-16 mx-auto mb-2 bg-white rounded-full p-1">
                <h3 class="font-bold">{{ match.team2 }}</h3>
              </div>
            </div>
            
            <!-- Match Details Button -->
            <div class="mt-6 text-center">
              <button @click="navigateTo(`/match/${match.id}`)"
                      class="px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Match Details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation

const slidesPerView = ref(1)

const matchStatusMap = {
  1: 'Not Started',
  2: '1st Half',
  3: 'Half Time',
  4: 'Break',
  5: 'Full Time',
  6: 'Extra Time',
  7: 'After Extra Time',
  8: 'After Penalties',
  9: 'Penalties',
  10: 'Postponed',
  11: 'Suspended',
  12: 'Cancelled',
  13: 'TBA',
  14: 'Walk Over',
  15: 'Abandoned',
  16: 'Delayed',
  17: 'Awarded',
  18: 'Interrupted',
  19: 'Awaiting Updates',
  20: 'Deleted',
  21: 'Extra Time Break',
  22: '2nd Half',
  23: 'ET - 2nd Half',
  25: 'Penalties Break',
  26: 'Pending'
}

const getMatchStatus = (statusId) => {
  return matchStatusMap[statusId] || 'Unknown'
}

const formatMatchTime = (date, time) => {
  if (!date || !time) return ''
  const [day, month, year] = date.split('-')
  const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
  return `${formattedDate}, ${time}`
}

// Fetch matches with auto-refresh every 60 seconds
const { data: matches, pending, error, refresh } = await useFetch('https://alinetech.net/api/sportmonk/football', {
  lazy: true,
  watch: false,
  onResponseError(error) {
    console.error('Failed to fetch matches:', error)
  }
})

// Function to update slides per view based on window width
const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth >= 1024 ? 2 : 1
}

// Auto-refresh matches every 60 seconds and handle window resize
let refreshInterval
onMounted(() => {
  refreshInterval = setInterval(refresh, 60000)
  
  window.addEventListener('resize', updateSlidesPerView)
  updateSlidesPerView() // Initial call
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>

<style>
.match-carousel .swiper-button-next,
.match-carousel .swiper-button-prev {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
}

.match-carousel .swiper-button-next:after,
.match-carousel .swiper-button-prev:after {
  font-size: 20px;
}

.match-carousel .swiper-pagination-bullet {
  background: white;
  opacity: 0.5;
}

.match-carousel .swiper-pagination-bullet-active {
  background: white;
  opacity: 1;
}
</style>