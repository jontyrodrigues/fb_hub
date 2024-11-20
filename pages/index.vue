<template>
  <div class="min-h-screen bg-gray-100">
    <TheNavbar />

    <main class="container mx-auto px-4 py-8">
      <!-- Current Matches -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Current Matches</h2>
        </div>
        <MatchCarousel />
      </section>

      <!-- Upcoming Matches -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Upcoming Matches</h2>
          <NuxtLink to="/schedule" class="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
            <span>View Full Schedule</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <ScheduleSection />
      </section>

      <!-- Latest News -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Latest News</h2>
        </div>
        <NewsSection />
      </section>
    </main>

    <TheFooter />
  </div>
</template>