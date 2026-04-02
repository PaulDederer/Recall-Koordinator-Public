<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <svg class="h-8 w-8 text-brand-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h3 class="text-xl">
              <span class="text-gray-300 font-bold">Recall</span><span class="text-brand-primary font-light">Koordinator</span>
            </h3>
          </div>
          <p class="text-gray-400 mb-4">Wir kümmern uns um Ihre Patienten-Erinnerungen – zuverlässig und stressfrei.</p>
          <div class="text-gray-400">
            <p class="font-semibold">Kontakt</p>
            <p>contact.me@jpcodelabs.de</p>
            <p>+49 1575 5678283</p>
          </div>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Service</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#vorteile" class="hover:text-white">Warum Recall-Koordinator</a></li>
            <li><a href="#ablauf" class="hover:text-white">So funktioniert's</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Rechtliches</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <RouterLink to="/impressum" class="hover:text-white">Impressum</RouterLink>
            </li>
            <li>
              <RouterLink to="/datenschutz" class="hover:text-white">Datenschutz</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p> 2026 Recall-Koordinator. Powered by JP Codelabs GmbH.</p>
      </div>
    </div>
  </footer>
</template>