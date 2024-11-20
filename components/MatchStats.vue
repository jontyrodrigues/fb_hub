<template>
  <div class="space-y-8">
    <!-- Possession -->
    <div class="stat-row">
      <div class="stat-label">Possession</div>
      <div class="stat-bar">
        <div class="text-right w-12">{{ stats.possession.team1 }}%</div>
        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-4">
          <div class="h-full bg-blue-600" :style="{ width: `${stats.possession.team1}%` }"></div>
        </div>
        <div class="w-12">{{ stats.possession.team2 }}%</div>
      </div>
    </div>

    <!-- Shots, Shots on Target, Corners Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Shots -->
      <div class="stat-circle">
        <div class="stat-label text-center mb-4">Shots</div>
        <div class="flex justify-center items-center space-x-8">
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.shots.team1 / (stats.shots.team1 + stats.shots.team2) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.shots.team1 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Home</div>
          </div>
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.shots.team2 / (stats.shots.team1 + stats.shots.team2) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.shots.team2 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Away</div>
          </div>
        </div>
      </div>

      <!-- Shots on Target -->
      <div class="stat-circle">
        <div class="stat-label text-center mb-4">Shots on Target</div>
        <div class="flex justify-center items-center space-x-8">
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.shotsOnTarget.team1 / (stats.shotsOnTarget.team1 + stats.shotsOnTarget.team2) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.shotsOnTarget.team1 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Home</div>
          </div>
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.shotsOnTarget.team2 / (stats.shotsOnTarget.team1 + stats.shotsOnTarget.team2) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.shotsOnTarget.team2 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Away</div>
          </div>
        </div>
      </div>

      <!-- Corners -->
      <div class="stat-circle">
        <div class="stat-label text-center mb-4">Corners</div>
        <div class="flex justify-center items-center space-x-8">
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.corners.team1 / (stats.corners.team1 + stats.corners.team2 || 1) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.corners.team1 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Home</div>
          </div>
          <div class="text-center">
            <div class="relative w-20 h-20">
              <svg class="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#E5E7EB" stroke-width="8" fill="none" />
                <circle cx="40" cy="40" r="36" 
                        :stroke-dasharray="`${(stats.corners.team2 / (stats.corners.team1 + stats.corners.team2 || 1) * 226)} 226`"
                        stroke-width="8" stroke="#2563EB" fill="none" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-bold text-xl">
                {{ stats.corners.team2 }}
              </div>
            </div>
            <div class="mt-2 text-sm font-medium">Away</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-2 gap-6">
      <!-- Yellow Cards -->
      <div class="stat-row">
        <div class="stat-label">Yellow Cards</div>
        <div class="flex justify-between items-center">
          <div class="w-8 h-12 bg-yellow-400 rounded flex items-center justify-center text-white font-bold">
            {{ stats.yellowCards.team1 }}
          </div>
          <div class="w-8 h-12 bg-yellow-400 rounded flex items-center justify-center text-white font-bold">
            {{ stats.yellowCards.team2 }}
          </div>
        </div>
      </div>

      <!-- Red Cards -->
      <div class="stat-row">
        <div class="stat-label">Red Cards</div>
        <div class="flex justify-between items-center">
          <div class="w-8 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold">
            {{ stats.redCards.team1 }}
          </div>
          <div class="w-8 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold">
            {{ stats.redCards.team2 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.stat-row {
  @apply space-y-2;
}
.stat-label {
  @apply text-sm font-medium text-gray-600;
}
.stat-bar {
  @apply flex items-center;
}
.stat-circle {
  @apply bg-white p-6 rounded-lg shadow-sm;
}
circle {
  transition: stroke-dasharray 0.5s ease;
}
</style>