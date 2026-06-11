<script setup>
import { ref } from 'vue'
import { Heart, Users, Clock, Award, CheckCircle, AlertCircle } from 'lucide-vue-next'

const formStep = ref(1)
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  location: '',
  skills: [],
  availability: 'flexible',
  interests: [],
  experience: '',
  message: '',
})

const submitStatus = ref(null)

const skillOptions = [
  { id: 'education', label: 'Teaching/Education' },
  { id: 'healthcare', label: 'Healthcare/Medical' },
  { id: 'it', label: 'Technology/IT' },
  { id: 'business', label: 'Business/Finance' },
  { id: 'communication', label: 'Communication/Writing' },
  { id: 'management', label: 'Project Management' },
  { id: 'mentoring', label: 'Mentoring/Coaching' },
  { id: 'other', label: 'Other' },
]

const interestAreas = [
  { id: 'education', label: 'Education & Scholarships', icon: '📚' },
  { id: 'health', label: 'Health & Wellness', icon: '❤️' },
  { id: 'economic', label: 'Economic Development', icon: '💼' },
  { id: 'community', label: 'Community Engagement', icon: '👥' },
]

const volunteerBenefits = [
  {
    icon: Heart,
    title: 'Make a Real Impact',
    description: 'Your skills and time directly help transform lives and strengthen communities.',
  },
  {
    icon: Users,
    title: 'Join a Community',
    description: 'Connect with like-minded individuals passionate about social change.',
  },
  {
    icon: Clock,
    title: 'Flexible Commitment',
    description: 'Choose opportunities that fit your schedule and availability.',
  },
  {
    icon: Award,
    title: 'Professional Growth',
    description: 'Develop new skills, gain experience, and expand your network.',
  },
]

const toggleSkill = (skillId) => {
  const index = formData.value.skills.indexOf(skillId)
  if (index > -1) {
    formData.value.skills.splice(index, 1)
  } else {
    formData.value.skills.push(skillId)
  }
}

const toggleInterest = (interestId) => {
  const index = formData.value.interests.indexOf(interestId)
  if (index > -1) {
    formData.value.interests.splice(index, 1)
  } else {
    formData.value.interests.push(interestId)
  }
}

const nextStep = () => {
  if (formStep.value < 3) {
    formStep.value++
  }
}

const prevStep = () => {
  if (formStep.value > 1) {
    formStep.value--
  }
}

const submitForm = async () => {
  // Simulate form submission
  submitStatus.value = 'submitting'
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    submitStatus.value = 'success'
    
    // Reset form after 3 seconds
    setTimeout(() => {
      formData.value = {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        skills: [],
        availability: 'flexible',
        interests: [],
        experience: '',
        message: '',
      }
      formStep.value = 1
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
            Become a Volunteer
          </h1>
          <p class="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Join thousands of volunteers making real impact in communities. Your time and skills matter.
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why Volunteer With Us?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Being part of our volunteer community offers rewards beyond measure</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(benefit, index) in volunteerBenefits"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="`${150 + index * 100}`"
            class="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary-dark/10 grid place-items-center">
              <component :is="benefit.icon" :size="32" class="text-primary-dark" />
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Signup Form Section -->
    <section class="py-16 md:py-20 px-6 bg-slate-50">
      <div class="max-w-4xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <!-- Form Header -->
          <div class="bg-gradient-to-r from-primary-dark to-primary-purple p-8">
            <h2 class="text-2xl md:text-3xl font-black text-white">Volunteer Application</h2>
            <p class="text-gray-100 mt-2">Step {{ formStep }} of 3</p>
          </div>

          <!-- Progress Bar -->
          <div class="h-1 bg-gray-200">
            <div :style="{ width: `${(formStep / 3) * 100}%` }" class="h-full bg-gradient-to-r from-primary-dark to-primary-purple transition-all duration-300"></div>
          </div>

          <!-- Form Content -->
          <div class="p-8 md:p-12">
            <form @submit.prevent="submitForm">
              <!-- Step 1: Personal Info -->
              <div v-if="formStep === 1" class="space-y-6" data-aos="fade-up">
                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Full Name *</label>
                  <input 
                    v-model="formData.fullName"
                    type="text" 
                    required
                    placeholder="Your full name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <label class="block text-sm font-black text-slate-900 mb-2">Phone Number</label>
                    <input 
                      v-model="formData.phone"
                      type="tel" 
                      placeholder="Your phone number"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Location</label>
                  <input 
                    v-model="formData.location"
                    type="text" 
                    placeholder="City or region"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Step 2: Skills & Interests -->
              <div v-if="formStep === 2" class="space-y-8" data-aos="fade-up">
                <div>
                  <label class="block text-lg font-black text-slate-900 mb-4">What are your skills? *</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button 
                      v-for="skill in skillOptions"
                      :key="skill.id"
                      @click.prevent="toggleSkill(skill.id)"
                      type="button"
                      :class="`px-4 py-3 rounded-lg font-bold transition-all border-2 ${
                        formData.skills.includes(skill.id)
                          ? 'bg-primary-dark text-white border-primary-dark'
                          : 'bg-white text-slate-900 border-gray-300 hover:border-primary-dark'
                      }`"
                    >
                      {{ skill.label }}
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-lg font-black text-slate-900 mb-4">Areas of Interest *</label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      v-for="interest in interestAreas"
                      :key="interest.id"
                      @click.prevent="toggleInterest(interest.id)"
                      type="button"
                      :class="`p-4 rounded-xl transition-all border-2 text-left ${
                        formData.interests.includes(interest.id)
                          ? 'bg-primary-dark text-white border-primary-dark'
                          : 'bg-white text-slate-900 border-gray-300 hover:border-primary-dark'
                      }`"
                    >
                      <span class="text-2xl">{{ interest.icon }}</span>
                      <p class="font-black mt-2">{{ interest.label }}</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Availability *</label>
                  <select 
                    v-model="formData.availability"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  >
                    <option value="flexible">Flexible (varies)</option>
                    <option value="weekends">Weekends only</option>
                    <option value="weekdays">Weekdays only</option>
                    <option value="part-time">Part-time (5-10 hrs/week)</option>
                    <option value="full-time">Full-time</option>
                  </select>
                </div>
              </div>

              <!-- Step 3: Additional Info -->
              <div v-if="formStep === 3" class="space-y-6" data-aos="fade-up">
                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Prior Experience (Optional)</label>
                  <textarea 
                    v-model="formData.experience"
                    placeholder="Tell us about any relevant volunteer or work experience..."
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label class="block text-sm font-black text-slate-900 mb-2">Additional Message (Optional)</label>
                  <textarea 
                    v-model="formData.message"
                    placeholder="Tell us why you want to volunteer with us..."
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  ></textarea>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg flex gap-3">
                  <AlertCircle :size="20" class="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p class="text-sm text-blue-900">By submitting this form, you agree to our Volunteer Code of Conduct and Privacy Policy.</p>
                </div>
              </div>

              <!-- Success Message -->
              <div v-if="submitStatus === 'success'" class="p-6 bg-green-50 rounded-lg flex gap-3" data-aos="fade-up">
                <CheckCircle :size="24" class="text-green-600 flex-shrink-0" />
                <div>
                  <h4 class="font-black text-green-900">Thank you!</h4>
                  <p class="text-sm text-green-800 mt-1">Your application has been submitted successfully. We'll review it and be in touch within 3 business days.</p>
                </div>
              </div>

              <!-- Form Actions -->
              <div v-if="submitStatus !== 'success'" class="flex gap-4 mt-10">
                <button 
                  v-if="formStep > 1"
                  @click="prevStep" 
                  type="button"
                  class="px-6 py-3 border-2 border-primary-dark text-primary-dark font-black rounded-lg hover:bg-primary-dark hover:text-white transition-all"
                >
                  Previous
                </button>

                <button 
                  v-if="formStep < 3"
                  @click="nextStep"
                  type="button"
                  class="flex-1 px-6 py-3 bg-gradient-to-r from-primary-dark to-primary-purple text-white font-black rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Next
                </button>

                <button 
                  v-else
                  :disabled="submitStatus === 'submitting'"
                  type="submit"
                  :class="`flex-1 px-6 py-3 font-black rounded-lg transition-all transform hover:-translate-y-1 ${
                    submitStatus === 'submitting'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-dark to-primary-purple text-white hover:shadow-lg'
                  }`"
                >
                  {{ submitStatus === 'submitting' ? 'Submitting...' : 'Submit Application' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <details class="group bg-white rounded-lg shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="150">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-black text-slate-900">
              How much time commitment is required?
              <span class="transition-transform group-open:rotate-180">›</span>
            </summary>
            <p class="px-6 pb-6 text-gray-600">We have flexible opportunities ranging from a few hours per month to full-time positions. Choose what works best for your schedule.</p>
          </details>

          <details class="group bg-white rounded-lg shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="200">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-black text-slate-900">
              Do I need prior experience?
              <span class="transition-transform group-open:rotate-180">›</span>
            </summary>
            <p class="px-6 pb-6 text-gray-600">No, we welcome volunteers of all experience levels. If you're passionate about our mission, we can provide training and support.</p>
          </details>

          <details class="group bg-white rounded-lg shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="250">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-black text-slate-900">
              When can I start volunteering?
              <span class="transition-transform group-open:rotate-180">›</span>
            </summary>
            <p class="px-6 pb-6 text-gray-600">After your application is approved and orientation is complete, you can start volunteering within 1-2 weeks.</p>
          </details>

          <details class="group bg-white rounded-lg shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="300">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-black text-slate-900">
              Is there a volunteer agreement?
              <span class="transition-transform group-open:rotate-180">›</span>
            </summary>
            <p class="px-6 pb-6 text-gray-600">Yes, all volunteers sign a simple code of conduct to ensure a safe and respectful environment for everyone.</p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
