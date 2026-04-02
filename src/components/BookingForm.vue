<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  praxisGroesse: '',
  agb: false
})

const isSubmitting = ref(false)
const success = ref(false)
const error = ref(null)
const showPrivacyModal = ref(false)

const validationErrors = ref({
  name: '',
  email: '',
  phone: '',
  agb: ''
})

const validate = (field, value) => {
  switch (field) {
    case 'name':
      validationErrors.value.name = value.trim() ? '' : 'Name ist erforderlich'
      break
    case 'email':
      if (value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        validationErrors.value.email = emailRegex.test(value) ? '' : 'Bitte gültige E-Mail eingeben'
      } else {
        validationErrors.value.email = ''
      }
      break
    case 'phone':
      validationErrors.value.phone = value.trim() ? /^[\d\s\-\(\)\+\.]+$/.test(value) ? '' : 'Bitte gültige Telefonnummer eingeben' : ''
      break
  }
}

const isFormValid = computed(() => {
  return form.value.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim()) &&
    form.value.agb
})

const submitForm = async () => {
  validationErrors.value = { name: '', email: '', phone: '', agb: '' }
  validate('name', form.value.name)
  validate('email', form.value.email)
  validate('phone', form.value.phone)
  validationErrors.value.agb = form.value.agb ? '' : 'Bitte zustimmen'

  const hasErrors = Object.values(validationErrors.value).some(e => e !== '')
  if (hasErrors) return

  isSubmitting.value = true
  error.value = null

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  success.value = true
}
</script>

<template>
  <section id="kontakt" class="section bg-gradient-to-br from-purple-50 via-white to-blue-50">
    <div class="container">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Kostenlos als Pilotpraxis bewerben
          </h2>
          <p class="text-xl text-gray-600">
            Nur 3 Felder – den Rest klären wir im Gespräch.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-purple-100">
          <!-- Trust Badge -->
          <div class="flex items-center justify-center mb-6">
            <div class="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-green-700 text-sm font-medium">Kostenlos für Pilotpraxen</span>
            </div>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                v-model="form.name"
                @blur="validate('name', form.name)"
                type="text"
                placeholder="Dr. Max Mustermann"
                class="block w-full rounded-xl shadow-sm text-lg p-4 transition-colors border-2"
                :class="validationErrors.name ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 bg-gray-50 focus:border-brand-primary focus:ring-brand-primary focus:bg-white'"
              />
              <p v-if="validationErrors.name" class="mt-1 text-sm text-red-600">{{ validationErrors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
              <input
                v-model="form.email"
                @blur="validate('email', form.email)"
                type="email"
                placeholder="praxis@beispiel.de"
                class="block w-full rounded-xl shadow-sm text-lg p-4 transition-colors border-2"
                :class="validationErrors.email ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 bg-gray-50 focus:border-brand-primary focus:ring-brand-primary focus:bg-white'"
              />
              <p v-if="validationErrors.email" class="mt-1 text-sm text-red-600">{{ validationErrors.email }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Telefon <span class="text-gray-400">(optional)</span></label>
              <input
                v-model="form.phone"
                @blur="validate('phone', form.phone)"
                type="tel"
                placeholder="+49 123 456789"
                class="block w-full rounded-xl shadow-sm text-lg p-4 transition-colors border-2"
                :class="validationErrors.phone ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 bg-gray-50 focus:border-brand-primary focus:ring-brand-primary focus:bg-white'"
              />
              <p v-if="validationErrors.phone" class="mt-1 text-sm text-red-600">{{ validationErrors.phone }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Praxis-Größe</label>
              <select
                v-model="form.praxisGroesse"
                class="block w-full rounded-xl shadow-sm text-lg p-4 transition-colors border-2 border-gray-200 bg-gray-50 focus:border-brand-primary focus:ring-brand-primary focus:bg-white"
              >
                <option value="">Bitte wählen</option>
                <option value="einzel">Einzelpraxis</option>
                <option value="gemeinschaft">Praxisgemeinschaft</option>
                <option value="mvz">MVZ</option>
                <option value="klinik">Klinik</option>
              </select>
            </div>

            <div class="border-t border-gray-100 pt-6">
              <div class="flex items-start space-x-3">
                <input
                  v-model="form.agb"
                  type="checkbox"
                  class="mt-1 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                />
                <label class="text-sm text-gray-600">
                  Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
                  <a href="#" @click.prevent="showPrivacyModal = true" class="text-brand-primary hover:underline">Datenschutzerklärung</a>. *
                </label>
              </div>
              <p v-if="validationErrors.agb" class="mt-1 text-sm text-red-600">{{ validationErrors.agb }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Wird gesendet...' : 'Kostenlos bewerben' }}
            </button>

            <p class="text-sm text-gray-500 text-center">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
            </p>
          </form>

          <!-- Success State -->
          <div v-if="success" class="text-center py-8">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Bewerbung eingegangen!</h3>
            <p class="text-gray-600">Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          </div>

          <!-- Error State -->
          <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p class="text-red-700 text-sm">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Privacy Modal -->
    <div v-if="showPrivacyModal" class="fixed inset-0 z-50 overflow-y-auto" @click="showPrivacyModal = false">
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full" @click.stop>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h3>
            <div class="max-h-96 overflow-y-auto space-y-6 text-sm text-gray-700">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Verantwortlicher</h4>
                <p>RecallKoordinator / JP Codelabs GmbH<br>Im Kleinen Eschle 15, 78054 Villingen-Schwenningen<br>E-Mail: contact.me@jpcodelabs.de</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Zweck der Verarbeitung</h4>
                <p>Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Ihre Rechte</h4>
                <p>Sie haben Recht auf Auskunft, Berichtigung, Löschung und Datenübertragbarkeit gemäß DSGVO.</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" @click="showPrivacyModal = false" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-primary text-base font-medium text-white hover:bg-purple-700 sm:ml-3 sm:w-auto sm:text-sm">
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>