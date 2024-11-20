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
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Unable to load news</h2>
        <p class="text-gray-600 mb-8">{{ error.message || 'Please try again later.' }}</p>
        <button @click="refresh" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Try Again
        </button>
      </div>

      <!-- News Content -->
      <div v-else>
        <!-- Featured Article -->
        <div v-if="featuredArticle" class="mb-12">
          <NuxtLink :to="`/news/${featuredArticle.id}`" class="block">
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div class="md:flex">
                <div class="md:flex-1">
                  <img :src="featuredArticle.image" :alt="featuredArticle.title" class="w-full h-[400px] object-cover">
                </div>
                <div class="md:flex-1 p-8">
                  <div class="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">Featured Story</div>
                  <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <span>{{ formatDate(featuredArticle.date) }}</span>
                    <span>•</span>
                    <span>{{ featuredArticle.category }}</span>
                  </div>
                  <h2 class="text-3xl font-bold mb-4">{{ featuredArticle.title }}</h2>
                  <p class="text-gray-600 mb-6">{{ featuredArticle.excerpt }}</p>
                  <span class="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="article in regularArticles" :key="article.id" 
                   class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <NuxtLink :to="`/news/${article.id}`">
              <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 text-sm mb-2">
                  <span class="text-blue-600">{{ article.category }}</span>
                  <span class="text-gray-300">•</span>
                  <span class="text-gray-500">{{ formatDate(article.date) }}</span>
                </div>
                <h3 class="text-xl font-bold mb-2">{{ article.title }}</h3>
                <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
                <span class="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const { data: articles, pending, error, refresh } = await useFetch('/api/news', {
  lazy: true
})

// Split articles into featured and regular
const featuredArticle = computed(() => articles.value?.find(article => article.featured))
const regularArticles = computed(() => articles.value?.filter(article => !article.featured) || [])

// Format date helper
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>