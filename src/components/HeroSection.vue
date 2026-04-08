<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const animatedCount = ref(18)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    animatedCount.value = Math.floor(Math.random() * 15) + 18
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section id="hero" class="section bg-gradient-to-br from-purple-50 via-white to-blue-50">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="badge mb-6">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Limitierte Plätze – Aktuell im Pilotprogramm
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Reduzieren Sie Terminausfälle um bis zu <span class="text-brand-primary">80%</span> – ohne Ihr Team zusätzlich zu belasten
          </h1>
          <p class="text-xl text-gray-600 mb-4 leading-relaxed">
            RecallKoordinator erinnert Ihre Patienten automatisch an Vorsorge- und Kontrolltermine – diagnosebasiert und vollständig DSGVO-konform.
          </p>
          
          <!-- Pattern Interrupt -->
          <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-8 rounded">
            <p class="text-red-800 font-medium">
              <span class="font-bold">Wichtig:</span> Die meisten Praxen verlieren jeden Monat 15–20% Umsatz durch No-Shows. Die wenigsten merken es.
            </p>
          </div>

          <!-- Trust Badge -->
          <div class="flex items-center mb-8">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              <div class="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
              <div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span class="ml-3 text-sm text-gray-600">Aktuell im Pilotprogramm mit ausgewählten Praxen</span>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:contact.me@jpcodelabs.de?subject=Pilotpraxis%20Bewerbung%20–%20RecallKoordinator" class="btn text-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Kostenlos als Pilotpraxis starten
            </a>
            <!-- <a href="#demo" class="btn btn-variant-secondary text-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2-Minuten Demo ansehen
            </a> -->
          </div>
        </div>
        <div class="text-center">
          <div class="relative">
            <!-- Dashboard Mockup -->
            <div class="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <!-- Header -->
              <div class="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                <div class="flex items-center justify-between text-white">
                  <div class="flex items-center">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="font-semibold">Recall Koordinator</span>
                  </div>
                  <span class="text-sm bg-white/20 px-2 py-1 rounded">Diese Woche</span>
                </div>
              </div>
              <!-- Stats -->
              <div class="p-4 grid grid-cols-3 gap-3">
                <div class="bg-green-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-green-600">23</div>
                  <div class="text-xs text-green-700">Patienten erinnert</div>
                </div>
                <div class="bg-purple-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-purple-600">+{{ animatedCount.value }}</div>
                  <div class="text-xs text-purple-700">Bestätigt</div>
                </div>
                <div class="bg-blue-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-blue-600">87%</div>
                  <div class="text-xs text-blue-700">Quote</div>
                </div>
              </div>
              <!-- Reminder List -->
              <div class="p-4 space-y-2">
                <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div class="flex-1 text-left">
                    <div class="text-sm font-medium">M. Schmidt</div>
                    <div class="text-xs text-gray-500">Vorsorge – Morgen 10:30</div>
                  </div>
                  <span class="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Erinnert</span>
                </div>
                <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <div class="flex-1 text-left">
                    <div class="text-sm font-medium">K. Weber</div>
                    <div class="text-xs text-gray-500">Kontrolle – 15. April</div>
                  </div>
                  <span class="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Bestätigt</span>
                </div>
                <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <div class="flex-1 text-left">
                    <div class="text-sm font-medium">T. Müller</div>
                    <div class="text-xs text-gray-500">Nachsorge – 18. April</div>
                  </div>
                  <span class="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Geplant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>