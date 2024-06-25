<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 p-4">
      <div class="container mx-auto">
        <h1 class="text-white text-3xl font-bold">Travels and Bookings Management System</h1>
        <nav class="mt-4 flex space-x-4">
          <nuxt-link to="/travels" class="text-blue-300 hover:text-blue-500">Manage Travels</nuxt-link>
          <nuxt-link to="/bookings" class="text-blue-300 hover:text-blue-500">Manage Bookings</nuxt-link>
        </nav>
      </div>
    </header>
    <main class="container mx-auto my-8 flex-grow">
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 p-4 text-center text-white">
      © 2024 Travels and Bookings Management System
    </footer>
  </div>
</template>