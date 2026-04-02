<script setup>
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
            Bald verfübar – Jetzt Kostenlos als Pilotpraxis starten
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nie wieder verpasste Termine.
            <br />
            <span class="text-brand-primary">Automatisch erinnert.</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            RecallKoordinator ist die KI-gestützte Lösung, die Ihre Patienten automatisch an Vorsorge, Kontrolltermine und Langzeittherapie erinnert – diagnosebasiert und ohne manuellen Aufwand.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#booking" class="btn text-center justify-center">Kostenlos als Pilotpraxis starten</a>
            <a href="#vision" class="btn btn-variant-secondary text-center justify-center">Mehr erfahren</a>
          </div>
        </div>
        <div class="text-center">
          <div class="relative">
            <!-- Dashboard Mockup -->
            <div class="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <!-- Header -->
              <div class="bg-gradient-to-r from-brand-primary to-blue-600 p-4">
                <div class="flex items-center justify-between text-white">
                  <div class="flex items-center">
                    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="font-semibold">Recall Koordinator</span>
                  </div>
                  <span class="text-sm bg-white/20 px-2 py-1 rounded">Heute</span>
                </div>
              </div>
              <!-- Stats -->
              <div class="p-4 grid grid-cols-3 gap-3">
                <div class="bg-green-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-green-600">23</div>
                  <div class="text-xs text-green-700">Patienten diese Woche automatisch erinnert</div>
                </div>
                <div class="bg-purple-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-purple-600">8</div>
                  <div class="text-xs text-purple-700">Bestätigt</div>
                </div>
                <div class="bg-blue-50 rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold text-blue-600">95%</div>
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
                  <span class="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Plant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>