<script setup>
import { Heart, Users, Zap, Target } from 'lucide-vue-next'
</script>

<template>
  <section 
    id="home" 
    class="relative min-h-screen bg-cover bg-center overflow-hidden py-0"
    :style="{ backgroundImage: 'url(/images/real1.jpeg)', backgroundAttachment: 'fixed' }"
    data-aos="fade-up"
    data-aos-duration="1000"
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

    <!-- Main Hero Section -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-16 lg:pt-20 pb-8 md:pb-6">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-5 md:gap-8 lg:gap-3 items-center min-h-96">
        
        <!-- Hero Copy (Left) -->
        <div class="max-w-xl text-white" data-aos="fade-left" data-aos-delay="100">
          <h1 class="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-4 md:mb-6">
            Empowering Communities Through Compassion and Education
          </h1>
          
          <p class="text-base md:text-lg text-gray-100 mb-6 md:mb-8 leading-relaxed max-w-2xl">
            His Grace Foundation is dedicated to uplifting underprivileged individuals and communities by providing resources, support, and education. We foster dignity, resilience, and hope, empowering those in need to realize their full potential.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col md:flex-row gap-4" data-aos="fade-left" data-aos-delay="200" >
            <router-link 
              to="/donations" 
              class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-cta text-white font-black rounded-lg mb-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-11 gap-2"
            >
              <Heart :size="20" />
              Donate Now
            </router-link>
            <router-link 
              to="/about" 
              class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/15 border-2 mb-6  border-white/50 backdrop-blur-md text-white font-black rounded-lg hover:bg-white/25 hover:border-white hover:-translate-y-1 transition-all duration-300 min-h-11 gap-2"
            >
              Learn More
              <Zap :size="20" />
            </router-link>
          </div>
        </div>

        <!-- Hero Card (Right) -->
        <div 
          class="w-full max-w-md lg:max-w-none bg-white/95 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 text-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-dark to-primary-purple text-white text-xs font-black uppercase tracking-wider rounded-lg mb-4">
            <Target :size="16" />
            Our Mission
          </div>
          
          <h2 class="text-2xl md:text-3xl font-black text-primary-dark mb-3 leading-tight">
            Transforming Lives Through Grace
          </h2>
          
          <p class="text-sm text-gray-600 mb-6 leading-relaxed">
            To empower underprivileged children and communities through compassion, education, and support. We foster dignity, resilience, and hope.
          </p>

          <!-- Progress Bar -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-black text-gray-700">Mission Impact</span>
              <span class="text-xs font-black text-primary-purple">65%</span>
            </div>
            <div class="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div 
                class="h-full bg-gradient-to-r from-primary-dark to-primary-purple rounded-full shadow-lg"
                style="width: 65%; animation: progress-fill 1.5s ease-out;"
              ></div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-3">
            <router-link 
              to="/volunteer-signup" 
              class="inline-flex items-center justify-center px-4 py-3 bg-white border-2 border-primary-dark text-primary-dark font-black rounded-lg hover:bg-primary-dark hover:text-white hover:-translate-y-1 transition-all duration-300 text-sm gap-2 min-h-11"
            >
              <Users :size="16" />
              Volunteer
            </router-link>
            <router-link 
              to="/donations" 
              class="inline-flex items-center justify-center px-4 py-3 bg-white border-2 border-orange-cta text-orange-cta font-black rounded-lg hover:bg-orange-cta hover:text-white hover:-translate-y-1 transition-all duration-300 text-sm gap-2 min-h-11"
            >
              <Heart :size="16" />
              Donate
            </router-link>
          </div>
        </div>
      </div>
    </div>


    <!-- Stats Section -->
    <div class="relative z-10 -mt-8 md:-mt-6 px-4 md:px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 bg-gradient-to-br from-white to-slate-50 rounded-lg shadow-2xl overflow-hidden border border-gray-100">
          
          <!-- Stat 1 -->
          <div 
            class="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-slate-100/50 transition-colors flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="w-12 h-12 rounded-lg bg-orange-cta/10 grid place-items-center flex-shrink-0">
              <Heart :size="28" class="text-orange-cta" />
            </div>
            <div>
              <div class="text-3xl md:text-2xl font-black text-primary-dark mb-1">90+</div>
              <p class="text-sm text-gray-600 leading-relaxed">Children and Families Reached</p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div 
            class="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-slate-100/50 transition-colors flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="w-12 h-12 rounded-lg bg-primary-purple/10 grid place-items-center flex-shrink-0">
              <Users :size="28" class="text-primary-purple" />
            </div>
            <div>
              <div class="text-3xl md:text-2xl font-black text-primary-dark mb-1">18</div>
              <p class="text-sm text-gray-600 leading-relaxed">Community Outreach Activities</p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div 
            class="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-slate-100/50 transition-colors lg:border-r-0 flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="w-12 h-12 rounded-lg bg-green-600/10 grid place-items-center flex-shrink-0">
              <Zap :size="28" class="text-green-600" />
            </div>
            <div>
              <div class="text-3xl md:text-2xl font-black text-primary-dark mb-1">6</div>
              <p class="text-sm text-gray-600 leading-relaxed">Active Program Areas</p>
            </div>
          </div>

          <!-- Mission CTA -->
          <div 
            class="col-span-1 md:col-span-2 lg:col-span-3 p-6 md:p-8 bg-gradient-to-r from-primary-dark to-primary-purple text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p class="text-lg md:text-base font-black leading-snug">
              Fostering Dignity, Resilience, and Hope Through Education
            </p>
            <router-link 
              to="/volunteer-signup"
              class="inline-flex items-center justify-center px-6 py-3 bg-white/20 border-2 border-white/50 text-white font-black rounded-lg hover:bg-white/40 hover:border-white transition-all duration-300 whitespace-nowrap gap-2 min-h-11"
            >
              <Users :size="18" />
              Become Volunteer
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes progress-fill {
  from {
    width: 0;
  }
  to {
    width: 65%;
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
