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
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Unable to load article</h2>
        <p class="text-gray-600 mb-8">{{ error.message || 'Please try again later.' }}</p>
        <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </NuxtLink>
      </div>

      <!-- Article Content -->
      <div v-else-if="article" class="max-w-4xl mx-auto">
        <!-- Article Header -->
        <div class="mb-8">
          <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span>{{ formatDate(article.date) }}</span>
            <span>•</span>
            <span class="text-blue-600">{{ article.category }}</span>
          </div>
          <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
        </div>

        <!-- Featured Image -->
        <div class="mb-8">
          <img :src="article.image" :alt="article.title" class="w-full h-[400px] object-cover rounded-lg">
        </div>

        <!-- Article Content -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="prose max-w-none">
            <p class="text-xl text-gray-600 mb-8">{{ article.excerpt }}</p>
            <div v-html="article.content"></div>
          </div>
        </div>
      </div>

      <!-- Not Found Message -->
      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
        <p class="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </NuxtLink>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute()

// Fetch article data
const { data: article, pending, error } = await useFetch(`/api/news/${route.params.id}`, {
  lazy: true
})

// Format date helper
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>