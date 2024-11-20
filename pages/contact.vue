<template>
  <div class="min-h-screen bg-gray-100">
    <TheNavbar />
    
    <main class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <div class="bg-blue-900 text-white rounded-lg p-12 mb-12">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-blue-100">
          Get in touch with our team for any inquiries or feedback
        </p>
      </div>

      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <form class="max-w-2xl mx-auto">
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="6"
              placeholder="Your message"
            ></textarea>
          </div>
          <div class="flex items-center justify-end">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Phone</h3>
          <p class="text-gray-600">+1 (555) 123-4567</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Email</h3>
          <p class="text-gray-600">info@footballhub.com</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-blue-600 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Address</h3>
          <p class="text-gray-600">123 Football Street<br>Sports City, SP 12345</p>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>