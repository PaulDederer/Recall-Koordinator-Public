<template>
  <section id="problem" class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="section-title">
          Was Praxen täglich <span class="text-brand-primary">Zeit und Umsatz</span> kostet
        </h2>
        <p class="section-subtitle">
          Kennen Sie diese Situation in Ihrer Praxis?
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Pain Point 1 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Der Termin ist eingeplant. Das Team ist bereit.</h3>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Der Patient kommt nicht.</h3>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Der Patient kommt nicht.</h3>
              <p class="text-gray-600">Bis zu 20% der Termine werden ohne Absage versäumt. Leere Stühle kosten Sie bares Geld – jeden Tag.</p>
            </div>
          </div>
        </div>

        <!-- Pain Point 2 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Manuelles Nachtelefonieren</h3>
              <p class="text-gray-600">Ihr Team verbringt Stunden damit, Patienten zu erinnern – Zeit, die bei der Behandlung fehlt.</p>
            </div>
          </div>
        </div>

        <!-- Pain Point 3 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Unregelmäßige Vorsorge</h3>
              <p class="text-gray-600">Patienten vergessen wichtige Kontrolltermine. Das gefährdet die Behandlungsergebnisse und Ihre Planung.</p>
            </div>
          </div>
        </div>

        <!-- Pain Point 4 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Umsatzverluste</h3>
              <p class="text-gray-600">Durchschnittlich 15-20% des potenziellen Umsatzes gehen durch ausgefallene Termine verloren.</p>
            </div>
          </div>
        </div>

        <!-- Pain Point 5 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Überlastetes Team</h3>
              <p class="text-gray-600">Stress durch Termindruck und manuelle Organisation führt zu Frust und Mitarbeiterfluktuation.</p>
            </div>
          </div>
        </div>

        <!-- Pain Point 6 -->
        <div class="card border-l-4 border-l-red-500">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Schlechte Dokumentation</h3>
              <p class="text-gray-600">Wer wurde wann erinnert? Ohne System gehen wichtige Informationen verloren.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>