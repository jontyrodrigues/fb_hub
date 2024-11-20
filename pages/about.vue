<template>
  <div class="min-h-screen bg-gray-100">
    <TheNavbar />
    
    <main class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <div class="bg-blue-900 text-white rounded-lg p-12 mb-12">
        <h1 class="text-4xl font-bold mb-4">About FootballHub</h1>
        <p class="text-xl text-blue-100">
          Your trusted source for comprehensive football coverage and analysis
        </p>
      </div>

      <!-- Who We Are -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 class="text-3xl font-bold mb-6">Who We Are</h2>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-700 mb-4">
            FootballHub is a dedicated platform bringing you the most comprehensive football coverage. 
            Our team consists of passionate football journalists, analysts, and former professionals 
            who live and breathe the beautiful game.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Founded in 2024, we've made it our mission to provide football fans with accurate, 
            timely, and insightful coverage of matches, transfers, and everything in between.
          </p>
        </div>
      </div>

      <!-- Our Mission -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-700 mb-4">
            We strive to be the most reliable source of football news and analysis, 
            offering unbiased coverage and in-depth insights that help our readers 
            understand and appreciate the game better.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Deliver accurate and timely match coverage</li>
            <li>Provide expert analysis and tactical breakdowns</li>
            <li>Share exclusive interviews and behind-the-scenes content</li>
            <li>Foster a community of passionate football fans</li>
          </ul>
        </div>
      </div>

      <!-- Our Coverage -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 class="text-3xl font-bold mb-6">Our Coverage</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 border rounded-lg">
            <h3 class="text-xl font-bold mb-3">Live Matches</h3>
            <p class="text-gray-700">Real-time updates, commentary, and statistics for all major matches</p>
          </div>
          <div class="p-6 border rounded-lg">
            <h3 class="text-xl font-bold mb-3">Transfer News</h3>
            <p class="text-gray-700">Latest transfer rumors, confirmed deals, and market analysis</p>
          </div>
          <div class="p-6 border rounded-lg">
            <h3 class="text-xl font-bold mb-3">Expert Analysis</h3>
            <p class="text-gray-700">Tactical breakdowns, player performance analysis, and match previews</p>
          </div>
        </div>
      </div>

      <!-- Our Team -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-3xl font-bold mb-6">Our Team</h2>
        <div class="prose max-w-none">
          <p class="text-lg text-gray-700 mb-4">
            Our team consists of experienced sports journalists, former players, 
            and tactical analysts who bring their unique perspectives and expertise 
            to provide you with the highest quality football coverage.
          </p>
          <p class="text-lg text-gray-700">
            We're constantly expanding our network of contributors to ensure we 
            provide diverse viewpoints and comprehensive coverage of the beautiful game.
          </p>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>