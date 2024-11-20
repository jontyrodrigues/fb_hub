<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200"></div>

    <!-- Timeline Events -->
    <div class="space-y-6">
      <div v-for="event in filteredEvents" :key="event.id"
           class="relative flex items-start group">
        <!-- Time Marker -->
        <div class="flex-none w-16 text-right pr-4">
          <span class="text-sm font-semibold text-gray-600">
            {{ event.minute }}'
          </span>
        </div>

        <!-- Event Icon -->
        <div class="absolute left-16 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all"
             :class="getEventClasses(event.type)">
          <component :is="getEventIcon(event.type)" 
                    class="w-4 h-4"
                    :class="getEventIconColor(event.type)" />
        </div>

        <!-- Event Content -->
        <div class="ml-12 flex-grow">
          <div class="bg-white rounded-lg shadow-sm p-4 group-hover:shadow-md transition-shadow">
            <div class="flex items-center gap-2 mb-1">
              <!-- Event Type Badge -->
              <span class="px-2 py-0.5 rounded-full text-xs font-medium"
                    :class="getEventBadgeClasses(event.type)">
                {{ getEventLabel(event.type) }}
              </span>
              
              <!-- Team Badge -->
              <span class="text-sm text-gray-600">
                {{ event.team }}
              </span>
            </div>

            <!-- Player Name -->
            <p class="font-medium text-gray-800">
              {{ event.player }}
            </p>

            <!-- Event Description -->
            <p class="text-sm text-gray-600 mt-1">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!filteredEvents.length" class="text-center py-12 text-gray-500">
      No major events in this match yet.
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => []
  }
})

// Filter events to only show goals and cards
const filteredEvents = computed(() => {
  return [...props.events]
    .filter(event => ['goal', 'yellow_card', 'red_card'].includes(event.type))
    .sort((a, b) => b.minute - a.minute)
})

// Event type helpers
const eventTypes = {
  goal: {
    label: 'Goal',
    icon: 'i-heroicons-ball-solid',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    badgeClass: 'bg-green-100 text-green-800'
  },
  yellow_card: {
    label: 'Yellow Card',
    icon: 'i-heroicons-rectangle-stack-solid',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50 border-yellow-200',
    badgeClass: 'bg-yellow-100 text-yellow-800'
  },
  red_card: {
    label: 'Red Card',
    icon: 'i-heroicons-rectangle-stack-solid',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    badgeClass: 'bg-red-100 text-red-800'
  }
}

// Custom icon component renderer
const Icon = (props) => {
  return h('div', { class: props.name })
}

// Event helper functions
const getEventType = (type) => {
  return eventTypes[type] || eventTypes.goal
}

const getEventClasses = (type) => {
  const eventType = getEventType(type)
  return `${eventType.bgColor} border`
}

const getEventIcon = (type) => {
  return getEventType(type).icon
}

const getEventIconColor = (type) => {
  return getEventType(type).iconColor
}

const getEventLabel = (type) => {
  return getEventType(type).label
}

const getEventBadgeClasses = (type) => {
  return getEventType(type).badgeClass
}
</script>

<style scoped>
/* Hover effect for timeline items */
.group:hover .rounded-full {
  @apply ring-2 ring-opacity-50;
}

/* Event type specific hover rings */
.group:hover .bg-green-50 { @apply ring-green-200; }
.group:hover .bg-yellow-50 { @apply ring-yellow-200; }
.group:hover .bg-red-50 { @apply ring-red-200; }
</style>