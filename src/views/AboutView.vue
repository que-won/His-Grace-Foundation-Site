<script setup>
import { ref } from 'vue'
import { ChevronDown, Heart, Users, Leaf, Home, Briefcase } from 'lucide-vue-next'

const homelessnessExpanded = ref(false)

const toggleHomelessness = () => {
  homelessnessExpanded.value = !homelessnessExpanded.value
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
            About His Grace Foundation
          </h1>
          <p class="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Providing compassionate support to children, families, and individuals facing homelessness and hardship.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Story Section -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Images -->
          <div data-aos="fade-right" data-aos-delay="100" class="relative">
            <div class="relative h-96">
              <img 
                src="/images/real1.jpeg" 
                alt="Community support"
                class="absolute top-0 left-8 w-56 h-56 rounded-xl shadow-2xl object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Individual story"
                class="absolute bottom-0 right-0 w-56 h-56 rounded-xl shadow-2xl object-cover border-4 border-white"
              />
            </div>
          </div>

          <!-- Content -->
          <div data-aos="fade-left" data-aos-delay="100">
            <div class="mb-6">
              <p class="text-sm font-black text-primary-dark uppercase tracking-wider mb-3">About Us</p>
              <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Supporting Individuals <span class="text-primary-purple">Facing Homelessness</span>
              </h2>
            </div>

            <p class="text-gray-600 leading-relaxed mb-4">
              Welcome to His Grace Foundation, where compassion meets action. Our mission is to provide a sanctuary for children, families, and individuals facing the challenges of homelessness and hardship.
            </p>

            <div :class="`overflow-hidden transition-all duration-300 ${homelessnessExpanded ? 'max-h-96' : 'max-h-0'}`">
              <p class="text-gray-600 leading-relaxed mb-4">
                Through our comprehensive programs, we offer shelter, essential services, and a community of care that fosters resilience and self-sufficiency. At His Grace Foundation, we are committed to creating lasting change and empowering those in need to achieve a brighter, more stable future.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Our team works alongside local partners to provide practical support that meets people where they are. That includes help with housing, food, clothing, job readiness, and community connection so the path forward feels possible, steady, and human.
              </p>
            </div>

            <button 
              @click="toggleHomelessness"
              class="mt-6 px-6 py-3 bg-gradient-to-r from-primary-dark to-primary-purple text-white font-black rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              {{ homelessnessExpanded ? 'Read Less' : 'Read More' }}
              <ChevronDown :size="18" :class="`transition-transform ${homelessnessExpanded ? 'rotate-180' : ''}`" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Purpose Section -->
    <section class="py-16 md:py-20 px-6 bg-slate-50">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div data-aos="fade-right" data-aos-delay="100">
            <p class="text-sm font-black text-primary-dark uppercase tracking-wider mb-3">Our Purpose</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Building a world where every child can thrive
            </h2>

            <p class="text-gray-600 leading-relaxed mb-4">
              His Grace Foundation was created to support children and families through education, care, and practical community action. We want to remove barriers, open doors, and help people move forward with dignity.
            </p>

            <p class="text-gray-600 leading-relaxed mb-6">
              We focus on helping underserved communities access learning, resources, and encouragement that lasts beyond a single moment of need. Every child deserves an opportunity to reach their full potential.
            </p>

            <router-link to="/volunteer-signup" class="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white font-black rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
              Get Involved
              <ChevronDown :size="18" class="rotate-90" />
            </router-link>
          </div>

          <!-- Image -->
          <div data-aos="fade-left" data-aos-delay="100">
            <img
              src="https://images.pexels.com/photos/8617558/pexels-photo-8617558.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Teacher with a child"
              class="w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Support Areas Section -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <p class="text-sm font-black text-primary-dark uppercase tracking-wider mb-3">How We Support</p>
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Addressing Core Needs
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We address core needs with compassion and practical solutions</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Housing Card -->
          <div data-aos="fade-up" data-aos-delay="150" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-primary-dark hover:-translate-y-1">
            <div class="w-12 h-12 rounded-lg bg-primary-dark/10 grid place-items-center mb-4">
              <Home :size="28" class="text-primary-dark" />
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-3">Housing</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We provide temporary and permanent housing for families and individuals facing homelessness and transitional needs.
            </p>
          </div>

          <!-- Food Card -->
          <div data-aos="fade-up" data-aos-delay="200" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-cta hover:-translate-y-1">
            <div class="w-12 h-12 rounded-lg bg-orange-cta/10 grid place-items-center mb-4">
              <Heart :size="28" class="text-orange-cta" />
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-3">Food & Nutrition</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Nutritious and delicious meals are served to ensure no one goes hungry. We prioritize both nutrition and dignity.
            </p>
          </div>

          <!-- Clothing Card -->
          <div data-aos="fade-up" data-aos-delay="250" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 grid place-items-center mb-4">
              <Briefcase :size="28" class="text-blue-500" />
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-3">Clothing & Essentials</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We offer quality clothing and essential items to help individuals have appropriate clothing for various needs.
            </p>
          </div>

          <!-- Employment Card -->
          <div data-aos="fade-up" data-aos-delay="300" class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-600 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-lg bg-green-600/10 grid place-items-center mb-4">
              <Leaf :size="28" class="text-green-600" />
            </div>
            <h3 class="text-lg font-black text-slate-900 mb-3">Employment & Skills</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We connect individuals with employment opportunities and skills training, empowering them to build sustainable futures.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Action Section -->
    <section class="py-16 md:py-20 px-6 bg-slate-50">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Take Action Today
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            There are several ways you can get involved with His Grace Foundation. Below are the most popular ways to make a direct impact.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Volunteer Card -->
          <div data-aos="fade-up" data-aos-delay="150" class="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <p class="text-sm font-black text-primary-dark uppercase tracking-wider mb-3">Volunteer Your Time</p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Join us on upcoming initiatives or contact us to learn more about volunteer opportunities in your area.
            </p>
            <router-link to="/contact-us" class="inline-flex items-center gap-2 px-4 py-2 bg-primary-dark text-white font-black rounded-lg hover:shadow-lg transition-all">
              Contact Us
              <ChevronDown :size="16" class="rotate-90" />
            </router-link>
          </div>

          <!-- Donate Card -->
          <div data-aos="fade-up" data-aos-delay="200" class="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <p class="text-sm font-black text-orange-cta uppercase tracking-wider mb-3">Give / Donate</p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Money helps fund programs, supplies, and services for children and families who need consistent support.
            </p>
            <router-link to="/donations" class="inline-flex items-center gap-2 px-4 py-2 bg-orange-cta text-white font-black rounded-lg hover:shadow-lg transition-all">
              Donate Today
              <ChevronDown :size="16" class="rotate-90" />
            </router-link>
          </div>

          <!-- Spread Word Card -->
          <div data-aos="fade-up" data-aos-delay="250" class="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <p class="text-sm font-black text-blue-600 uppercase tracking-wider mb-3">Spread the Word</p>
            <p class="text-gray-600 leading-relaxed mb-6">
              We're always looking for partners and advocates who can help bring awareness to those in need.
            </p>
            <router-link to="/volunteer-signup" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-black rounded-lg hover:shadow-lg transition-all">
              Join Us
              <ChevronDown :size="16" class="rotate-90" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            See Our Impact
          </h2>
          <p class="text-gray-600">Follow us on social media to see real stories and the difference we're making daily</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <img 
            data-aos="fade-up" 
            data-aos-delay="150"
            src="https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Impact image 1"
            class="w-full h-48 rounded-xl object-cover shadow-lg hover:shadow-xl transition-all hover:scale-105"
          />
          <img 
            data-aos="fade-up" 
            data-aos-delay="200"
            src="https://images.pexels.com/photos/8617511/pexels-photo-8617511.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Impact image 2"
            class="w-full h-48 rounded-xl object-cover shadow-lg hover:shadow-xl transition-all hover:scale-105"
          />
          <img 
            data-aos="fade-up" 
            data-aos-delay="250"
            src="https://images.pexels.com/photos/8078383/pexels-photo-8078383.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Impact image 3"
            class="w-full h-48 rounded-xl object-cover shadow-lg hover:shadow-xl transition-all hover:scale-105"
          />
          <img 
            data-aos="fade-up" 
            data-aos-delay="300"
            src="https://images.pexels.com/photos/6646956/pexels-photo-6646956.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Impact image 4"
            class="w-full h-48 rounded-xl object-cover shadow-lg hover:shadow-xl transition-all hover:scale-105"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 px-6 bg-gradient-to-br from-primary-dark to-primary-purple">
      <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Join Our Mission</h2>
        <p class="text-lg text-gray-100 mb-8">Help us create lasting change in communities. Every contribution matters.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/volunteer-signup" class="px-8 py-4 bg-white text-primary-dark font-black rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Become a Volunteer
          </router-link>
          <router-link to="/donations" class="px-8 py-4 border-2 border-white text-white font-black rounded-lg hover:bg-white/10 transition-all">
            Make a Donation
          </router-link>
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
