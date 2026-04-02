<template>
  <section id="ablauf" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="section-title">So einfach funktioniert es</h2>
        <p class="section-subtitle">
          Drei Schritte zu einer besser organisierten Praxis – ohne komplizierte Einrichtung.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        <!-- Connection Line (desktop only) -->
        <div class="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>

        <!-- Step 1 -->
        <div class="text-center relative">
          <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
            <span class="text-2xl font-bold text-white">1</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">Praxis anbinden</h3>
          <p class="text-gray-600">
            Verbinden Sie RecallKoordinator mit Ihrem bestehenden Praxis-System – in wenigen Minuten eingerichtet, ohne IT-Kenntnisse.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="text-center relative">
          <div class="w-20 h-20 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
            <span class="text-2xl font-bold text-white">2</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">System erkennt automatisch</h3>
          <p class="text-gray-600">
            Das System erkennt automatisch, wann Patienten wieder einbestellt werden sollten – basierend auf Diagnose und Verlauf.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="text-center relative">
          <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
            <span class="text-2xl font-bold text-white">3</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">Patienten werden erinnert</h3>
          <p class="text-gray-600">
            Ihre Patienten erhalten persönliche Erinnerungen – automatisch, zum richtigen Zeitpunkt und über den bevorzugten Kanal.
          </p>
        </div>
      </div>

      <!-- Trust note -->
      <div class="text-center mt-12">
        <p class="text-gray-500 text-sm">
          <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Keine Einrichtungskosten. Keine Bindung. Jederzeit kündbar.
        </p>
      </div>
    </div>
  </section>
</template>