<script setup>
import { ref } from 'vue'

const openItems = ref([])

const toggleItem = (index) => {
  if (openItems.value.includes(index)) {
    openItems.value = openItems.value.filter(i => i !== index)
  } else {
    openItems.value.push(index)
  }
}

const faqs = [
  {
    question: 'Wie schnell kann ich den Recall-Koordinator einsetzen?',
    answer: 'Die Einrichtung dauert nur wenige Minuten. Nach der Registrierung verbinden Sie Ihr Praxisverwaltungssystem und die KI beginnt automatisch mit der Konfiguration Ihrer Recall-Regeln.'
  },
  {
    question: 'Welche Erinnerungs-Kanäle werden unterstützt?',
    answer: 'Wir unterstützen SMS, E-Mail, Push-Benachrichtigungen und WhatsApp. Die Kanäle können pro Patient individuell konfiguriert werden.'
  },
  {
    question: 'Ist die Lösung DSGVO-konform?',
    answer: 'Ja, unsere Lösung ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.'
  },
  {
    question: 'Kann ich das System individuell konfigurieren?',
    answer: 'Ja, Sie können Erinnerungs-Intervalle, Texte und Kanäle für jede Behandlungsart individuell anpassen. Die KI lernt dabei aus Ihren bisherigen Recall-Erfolgen.'
  },
  {
    question: 'Wie funktioniert die PVS-Integration?',
    answer: 'Wir bieten Integrationen für alle gängigen Praxisverwaltungssysteme. Die Anbindung erfolgt über sichere Schnittstellen und ist in der Regel innerhalb eines Tages eingerichtet.'
  },
  {
    question: 'Was passiert bei Abwesenheit oder Urlaub?',
    answer: 'Sie können den Service jederzeit pausieren oder die Erinnerungs-Intervalle anpassen. Das System учитet automatische Anpassungen basierend auf Ihrem Praxis-Kalender.'
  }
]
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="section-title">Häufige Fragen</h2>
        <p class="section-subtitle">Alles, was Sie über den Recall-Koordinator wissen möchten.</p>
      </div>
      <div class="max-w-2xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="card"
        >
          <button
            @click="toggleItem(index)"
            class="w-full text-left flex justify-between items-center p-6 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            :aria-expanded="openItems.includes(index)"
          >
            <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
            <svg
              class="w-5 h-5 text-gray-500 transform transition-transform"
              :class="{ 'rotate-180': openItems.includes(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openItems.includes(index)" class="px-6 pb-6">
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>