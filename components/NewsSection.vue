<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="story in stories" :key="story.id" class="bg-white rounded-lg shadow-md overflow-hidden">
      <img :src="story.image" :alt="story.title" class="w-full h-48 object-cover">
      <div class="p-4">
        <div class="flex items-center mb-2">
          <span class="text-sm text-blue-600">{{ story.category }}</span>
          <span class="mx-2 text-gray-300">•</span>
          <span class="text-sm text-gray-500">{{ formatDate(story.date) }}</span>
        </div>
        <h3 class="font-bold text-xl mb-2">{{ story.title }}</h3>
        <p class="text-gray-600">{{ story.excerpt }}</p>
        <div class="mt-4">
          <NuxtLink :to="`/news/${story.id}`" class="text-blue-600 hover:text-blue-800 inline-flex items-center">
            Read more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: stories } = await useFetch('/api/news', {
  lazy: true,
  transform: (data) => {
    // Ensure each story has an id and required fields
    return data?.map(story => ({
      id: story.id,
      title: story.title,
      excerpt: story.excerpt,
      image: story.image,
      category: story.category,
      date: story.date
    })) || []
  }
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>