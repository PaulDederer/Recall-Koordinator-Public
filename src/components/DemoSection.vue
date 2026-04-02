<template>
  <section id="demo" class="section bg-white">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <div class="badge mb-6">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          2-Minuten Demo
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          So sieht RecallKoordinator <span class="text-brand-primary">in Aktion</span> aus
        </h2>
        <p class="text-xl text-gray-600 mb-10">
          Erleben Sie in wenigen Schritten, wie das System Ihre Praxis entlasten kann.
        </p>

        <!-- Demo Video Placeholder -->
        <div class="relative max-w-3xl mx-auto">
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <div class="text-center text-white">
              <svg class="w-20 h-20 mx-auto mb-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-xl font-semibold mb-2">Demo-Video wird geladen...</p>
              <p class="text-gray-400 text-sm">Demo-Video kommt in Kürze</p>
            </div>
          </div>
        </div>

        <!-- Demo Steps -->
        <div class="grid md:grid-cols-3 gap-8 mt-12 text-left">
          <div class="bg-purple-50 rounded-2xl p-6">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">1</span>
              </div>
              <h4 class="font-semibold text-gray-900">Dashboard</h4>
            </div>
            <p class="text-gray-600 text-sm">Übersicht aller anstehenden Erinnerungen und Bestätigungen auf einen Blick.</p>
          </div>

          <div class="bg-blue-50 rounded-2xl p-6">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">2</span>
              </div>
              <h4 class="font-semibold text-gray-900">Automatisierung</h4>
            </div>
            <p class="text-gray-600 text-sm">Erinnerungen werden automatisch erstellt und versendet – ohne Ihr Zutun.</p>
          </div>

          <div class="bg-green-50 rounded-2xl p-6">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">3</span>
              </div>
              <h4 class="font-semibold text-gray-900">Ergebnisse</h4>
            </div>
            <p class="text-gray-600 text-sm">Sehen Sie wie viele Patienten erinnert wurden und wie viele bestätigt haben.</p>
          </div>
        </div>

        <div class="mt-10">
          <a href="#booking" class="btn inline-flex">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Kostenlos als Pilotpraxis starten
          </a>
        </div>
      </div>
    </div>
  </section>
</template>