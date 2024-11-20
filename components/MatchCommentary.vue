<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200"></div>

    <!-- Commentary Items -->
    <div class="space-y-6">
      <div v-for="comment in sortedCommentary" :key="comment.id"
           class="relative flex items-start group">
        <!-- Time Marker -->
        <div class="flex-none w-16 text-right pr-4">
          <span class="text-sm font-semibold text-gray-600">
            {{ comment.minute }}'
            <span v-if="comment.extra_minute" class="text-gray-400">
              +{{ comment.extra_minute }}
            </span>
          </span>
        </div>

        <!-- Timeline Dot -->
        <div class="absolute left-16 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:border-blue-700 group-hover:scale-110 transition-all">
          <div v-if="comment.is_important" 
               class="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75">
          </div>
        </div>

        <!-- Commentary Content -->
        <div class="ml-8 flex-grow">
          <div class="bg-white rounded-lg shadow-sm p-4 group-hover:shadow-md transition-shadow">
            <!-- Important Event Badge -->
            <div v-if="comment.is_important" 
                 class="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
              Important Event
            </div>

            <!-- Goal Badge -->
            <div v-if="comment.is_goal" 
                 class="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2 ml-2">
              ⚽ Goal
            </div>

            <!-- Comment Text -->
            <p class="text-gray-800" :class="{ 'font-medium': comment.is_important || comment.is_goal }">
              {{ comment.comment }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!commentary.length" class="text-center py-12 text-gray-500">
      No commentary available for this match.
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  commentary: {
    type: Array,
    required: true,
    default: () => []
  }
})

// Sort commentary by minute and order
const sortedCommentary = computed(() => {
  return [...props.commentary].sort((a, b) => {
    if (a.minute === b.minute) {
      return b.order - a.order
    }
    return b.minute - a.minute
  })
})
</script>

<style scoped>
/* Hover effect for timeline items */
.group:hover .rounded-full {
  @apply ring-2 ring-blue-200 ring-opacity-50;
}

/* Animation for important events */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>