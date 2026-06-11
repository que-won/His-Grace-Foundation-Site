<script setup>
import { ref } from 'vue'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: 'general',
  message: '',
})

const submitStatus = ref(null)

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@hisgracefoundation.org',
    description: 'Response within 24-48 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Monday-Friday, 9 AM - 5 PM',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '123 Foundation Drive',
    description: 'Suite 200, City, State 12345',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon - Fri: 9 AM - 6 PM',
    description: 'Saturday: 10 AM - 2 PM',
  },
]

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'donation', label: 'Donation & Sponsorship' },
  { value: 'volunteer', label: 'Volunteer Question' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'media', label: 'Media & Press' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
]

const submitForm = async () => {
  submitStatus.value = 'submitting'
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    submitStatus.value = 'success'
    
    // Reset form after 3 seconds
    setTimeout(() => {
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      }
      submitStatus.value = null
    }, 3000)
  } catch (error) {
    submitStatus.value = 'error'
  }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Background Banner -->
    <section 
      class="relative min-h-96 bg-cover bg-center overflow-hidden py-16 md:py-24 px-6"
      :style="{ backgroundImage: 'url(/images/real1.jpeg)', backgroundAttachment: 'fixed' }"
    >
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-purple/30 pointer-events-none"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute inset-0 pointer-events-none" style="
        background: 
          radial-gradient(circle at 18% 33%, rgba(255, 255, 255, 0.08) 0 6%, transparent 6.4%),
          radial-gradient(circle at 23% 24%, rgba(255, 215, 134, 0.2) 0 2.1%, transparent 2.4%),
          linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, transparent 32%);
      "></div>

      <!-- Content -->
      <div class="relative z-10 max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p class="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Have a question, partnership idea, or feedback? We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(method, index) in contactMethods"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="`${100 + index * 100}`"
            class="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-primary-dark transition-all text-center"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary-dark/10 grid place-items-center">
              <component :is="method.icon" :size="32" class="text-primary-dark" />
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-2">{{ method.title }}</h3>
            <p class="text-primary-dark font-bold text-sm mb-1">{{ method.value }}</p>
            <p class="text-gray-600 text-xs">{{ method.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 md:py-20 px-6 bg-slate-50">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-aos="fade-right" data-aos-delay="100">
            <h2 class="text-3xl font-black text-slate-900 mb-2">Send us a Message</h2>
            <p class="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Full Name *</label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    required
                    placeholder="Your name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Email *</label>
                  <input 
                    v-model="formData.email"
                    type="email" 
                    required
                    placeholder="your@email.com"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Phone Number</label>
                  <input 
                    v-model="formData.phone"
                    type="tel" 
                    placeholder="(555) 123-4567"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Subject *</label>
                  <select 
                    v-model="formData.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  >
                    <option v-for="option in subjectOptions" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-black text-slate-900 mb-2">Message *</label>
                <textarea 
                  v-model="formData.message"
                  required
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                ></textarea>
              </div>

              <!-- Success Message -->
              <div v-if="submitStatus === 'success'" class="p-6 bg-green-50 rounded-lg flex gap-3">
                <CheckCircle :size="24" class="text-green-600 flex-shrink-0" />
                <div>
                  <h4 class="font-black text-green-900">Thank you!</h4>
                  <p class="text-sm text-green-800 mt-1">Your message has been sent successfully. We'll be in touch soon.</p>
                </div>
              </div>

              <button 
                v-else
                :disabled="submitStatus === 'submitting'"
                type="submit"
                :class="`w-full py-3 px-6 font-black rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  submitStatus === 'submitting'
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-dark to-primary-purple text-white hover:shadow-lg'
                }`"
              >
                <Send :size="20" />
                {{ submitStatus === 'submitting' ? 'Sending...' : 'Send Message' }}
              </button>

              <p class="text-xs text-gray-500 text-center">
                We respect your privacy. We'll only use your information to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>

        <!-- Side Panel -->
        <div data-aos="fade-left" data-aos-delay="100">
          <div class="space-y-6">
            <!-- Quick Response -->
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-dark">
              <h3 class="font-black text-slate-900 mb-2">Quick Response</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Most inquiries are responded to within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>

            <!-- Office Hours -->
            <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-purple">
              <h3 class="font-black text-slate-900 mb-4">Office Hours</h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="font-bold text-gray-700">Monday - Friday:</span>
                  <span class="text-gray-600">9 AM - 6 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-bold text-gray-700">Saturday:</span>
                  <span class="text-gray-600">10 AM - 2 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-bold text-gray-700">Sunday:</span>
                  <span class="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="bg-gradient-to-br from-primary-dark to-primary-purple p-6 rounded-xl text-white">
              <h3 class="font-black mb-3">Stay Updated</h3>
              <p class="text-sm mb-4 text-gray-100">Subscribe to get news and updates from His Grace Foundation.</p>
              <div class="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  class="px-3 py-2 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-cta"
                />
                <button class="px-4 py-2 bg-orange-cta text-white font-black rounded-lg hover:shadow-lg transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="font-black text-slate-900 mb-4">Follow Us</h3>
              <div class="flex gap-3 flex-wrap">
                <a href="#" class="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center hover:shadow-lg transition-all font-black text-sm">f</a>
                <a href="#" class="w-10 h-10 rounded-full bg-sky-400 text-white grid place-items-center hover:shadow-lg transition-all font-black text-sm">𝕏</a>
                <a href="#" class="w-10 h-10 rounded-full bg-pink-600 text-white grid place-items-center hover:shadow-lg transition-all font-black text-sm">📷</a>
                <a href="#" class="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center hover:shadow-lg transition-all font-black text-sm">▶</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (placeholder) -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-xl relative">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-primary-purple/20 flex items-center justify-center">
            <div class="text-center">
              <MapPin :size="48" class="mx-auto text-white mb-4" />
              <p class="text-white font-black text-xl">Map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
