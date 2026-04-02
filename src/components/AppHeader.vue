<script setup>
import { ref } from 'vue'

const mobileNavOpen = ref(false)

const navItems = [
  { name: 'Warum Recall-Koordinator', href: '#problem' },
  { name: "So funktioniert's", href: '#ablauf' },
  { name: "Ihre Vorteile", href: '#vorteile' },
  { name: "FAQ", href: "#objections"},
  { name: 'Kontakt', href: '#booking' }
]

const activeSection = ref('')
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="flex items-center">
          <svg class="h-10 w-10 text-brand-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <h1 class="text-2xl">
            <span class="text-gray-600 font-bold">Recall</span><span class="text-brand-primary font-light">Koordinator</span>
          </h1>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="text-gray-700 hover:text-brand-primary transition-colors"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- CTA Button -->
      <a href="#booking" class="btn hidden md:inline-flex">Jetzt als Pilotpraxis starten</a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="mobileNavOpen = !mobileNavOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileNavOpen" class="md:hidden bg-white border-t">
      <nav class="px-4 py-4 space-y-2">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="block text-gray-700 hover:text-brand-primary"
          @click="mobileNavOpen = false"
        >
          {{ item.name }}
        </a>
        <a
          href="#booking"
          class="block btn w-full text-center justify-center"
          @click="mobileNavOpen = false"
        >
          Jetzt starten
        </a>
      </nav>
    </div>
  </header>
</template>