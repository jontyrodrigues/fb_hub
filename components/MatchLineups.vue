<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Home Team -->
    <div>
      <h4 class="text-lg font-bold mb-4">{{ team1 }}</h4>
      <div class="space-y-2">
        <!-- Starting XI -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="text-sm font-semibold text-gray-600 mb-3">Starting XI</h5>
          <div class="space-y-2">
            <div v-for="player in lineup1" :key="player.number" 
                 class="flex items-center space-x-3 p-2 bg-white rounded">
              <span class="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-semibold">
                {{ player.number }}
              </span>
              <span class="font-medium">{{ player.name }}</span>
              <div class="ml-auto flex items-center space-x-2">
                <span v-if="player.captain" 
                      class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  (C)
                </span>
                <span v-if="player.goals" 
                      class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  {{ player.goals }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Substitutes -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="text-sm font-semibold text-gray-600 mb-3">Substitutes</h5>
          <div class="space-y-2">
            <div v-for="player in subs1" :key="player.number"
                 class="flex items-center space-x-3 p-2 bg-white rounded">
              <span class="w-8 h-8 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center font-semibold">
                {{ player.number }}
              </span>
              <span class="font-medium">{{ player.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Away Team -->
    <div>
      <h4 class="text-lg font-bold mb-4">{{ team2 }}</h4>
      <div class="space-y-2">
        <!-- Starting XI -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="text-sm font-semibold text-gray-600 mb-3">Starting XI</h5>
          <div class="space-y-2">
            <div v-for="player in lineup2" :key="player.number"
                 class="flex items-center space-x-3 p-2 bg-white rounded">
              <span class="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-semibold">
                {{ player.number }}
              </span>
              <span class="font-medium">{{ player.name }}</span>
              <div class="ml-auto flex items-center space-x-2">
                <span v-if="player.captain" 
                      class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  (C)
                </span>
                <span v-if="player.goals" 
                      class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  {{ player.goals }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Substitutes -->
        <div class="bg-gray-50 rounded-lg p-4">
          <h5 class="text-sm font-semibold text-gray-600 mb-3">Substitutes</h5>
          <div class="space-y-2">
            <div v-for="player in subs2" :key="player.number"
                 class="flex items-center space-x-3 p-2 bg-white rounded">
              <span class="w-8 h-8 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center font-semibold">
                {{ player.number }}
              </span>
              <span class="font-medium">{{ player.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  team1: String,
  team2: String,
  lineup1: Array,
  lineup2: Array,
  subs1: Array,
  subs2: Array
})
</script>