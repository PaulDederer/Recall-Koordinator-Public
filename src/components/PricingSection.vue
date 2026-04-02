<script setup>
import { ref } from 'vue'

const billingCycle = ref('quarterly')
const selectedPlan = ref(null)

const plans = [
  {
    id: 'basis',
    name: 'Basis',
    monthly: 49.9,
    services: 'Bis 100 Patienten',
    features: [
      'Automatische Erinnerungen per SMS/E-Mail',
      'Standard Recall-Intervalle',
      'Monatlich kündbar',
      'Basis-Dashboard',
      'E-Mail Support'
    ],
    popular: false
  },
  {
    id: 'praxis',
    name: 'Praxis',
    monthly: 99.9,
    services: 'Bis 500 Patienten',
    features: [
      'Alle Erinnerungs-Kanäle',
      'KI-gesteuerte Intervalle',
      'Praxis-Dashboard & Analytics',
      '24h Support',
      'PVS-Integration',
      'Custom Erinnerungs-Texte'
    ],
    popular: true
  },
  {
    id: 'zentrum',
    name: 'Zentrum',
    monthly: 199.9,
    services: 'Unbegrenzte Patienten',
    features: [
      'Alle Features aus Praxis',
      'Multi-Standort Support',
      'Dedizierter Ansprechpartner',
      'API Zugang',
      'White-Label Option',
      'SLA Vereinbarung'
    ],
    popular: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: 0,
    services: 'Individuelles Angebot',
    features: [
      'Für Klinikverbünde',
      'Custom Integration',
      'On-Premise möglich',
      'Individuelle KI-Modelle',
      'Compliance & Zertifizierung',
      'Dediziertes Success Team'
    ],
    popular: false
  }
]

const discount = 0.1

const getMonthlyPrice = (plan) => plan.monthly
const getDiscountedPrice = (plan) => Math.round(plan.monthly * (1 - discount) * 100) / 100
const getQuarterlyPrice = (plan) => Math.round(getDiscountedPrice(plan) * 3 * 100) / 100
const getDisplayPrice = (plan) => billingCycle.value === 'monthly' ? getMonthlyPrice(plan) : getDiscountedPrice(plan)
const getBillingText = (plan) => billingCycle.value === 'monthly' ? 'Abrechnung monatlich' : `Quartal gesamt: ${getQuarterlyPrice(plan)} € (-10%)`

const selectPlan = (plan) => {
  selectedPlan.value = plan.id
  const bookingSection = document.getElementById('booking')
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="preise" class="py-20 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="badge mb-6">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        14 Tage kostenlos testen
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Faire Preise, <span class="text-brand-primary">volle Transparenz</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Alle Preise verstehen sich pro Monat. Die ersten 14 Tage sind für alle neuen Kunden kostenlos. Keine versteckten Kosten, keine Überraschungen.
      </p>
    </div>

    <!-- Billing Toggle -->
    <div class="flex justify-center mb-12">
      <div class="inline-flex rounded-full bg-slate-100 p-1 shadow-sm">
        <button
          @click="billingCycle = 'quarterly'"
          :aria-pressed="billingCycle === 'quarterly'"
          :class="[
            'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:outline-none',
            billingCycle === 'quarterly'
              ? 'bg-purple-50 text-slate-900 shadow-md transform scale-105 ring-2 ring-purple-500'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          ]"
        >
          Quartal <span class="text-green-600 font-bold">(-10%)</span>
        </button>
        <button
          @click="billingCycle = 'monthly'"
          :aria-pressed="billingCycle === 'monthly'"
          :class="[
            'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:outline-none',
            billingCycle === 'monthly'
              ? 'bg-purple-50 text-slate-900 shadow-md transform scale-105 ring-2 ring-purple-500'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          ]"
        >
          Monatlich
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="plan in plans"
        :key="plan.id"
        :class="[
          'flex flex-col rounded-2xl border p-6 transition-all duration-300 relative',
          selectedPlan === plan.id
            ? 'bg-purple-50 border-purple-300 shadow-xl'
            : 'bg-white border-slate-200 shadow-lg hover:shadow-xl',
          plan.popular && selectedPlan !== plan.id ? 'border-purple-500' : ''
        ]"
      >
        <div v-if="plan.popular" class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div class="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full px-4 py-2 shadow-xl border-4 border-white whitespace-nowrap">
            <span class="font-bold text-xs"> BELIEBTESTER TARIF </span>
          </div>
        </div>

        <div class="text-center mb-6">
          <h3 class="text-xl font-bold text-slate-900 text-center mb-2">{{ plan.name }}</h3>
          <p class="text-slate-600 text-center text-sm mb-6">{{ plan.services }}</p>
          <div class="text-center mb-6">
            <span class="text-4xl font-bold tracking-tight text-slate-900">
              <template v-if="plan.id === 'enterprise'">individuell</template>
              <template v-else>{{ getDisplayPrice(plan).toFixed(2).replace('.', ',') }}</template> €
            </span>
            <div class="text-sm text-slate-500">
              <template v-if="plan.id === 'enterprise'">Kontaktieren Sie uns</template>
              <template v-else>{{ getBillingText(plan) }}</template>
            </div>
          </div>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center text-slate-700 text-sm">
            <svg class="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ feature }}
          </li>
        </ul>

        <button
          @click="selectPlan(plan)"
          :class="[
            'w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 focus:ring-2 focus:ring-purple-500',
            plan.popular
              ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
          ]"
        >
          Jetzt starten
        </button>
      </div>
    </div>
  </section>
</template>