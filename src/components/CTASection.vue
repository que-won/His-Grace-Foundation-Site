﻿<template>
  <section 
    class="relative py-12 lg:py-20 px-6 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden"
    data-aos="fade-up"
    aria-labelledby="cta-title"
  >
    <!-- Decorative pattern background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 opacity-10 bg-repeat"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Content Section -->
        <div
          class="text-white"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 
            id="cta-title"
            class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight"
          >
            Empower Communities Today
          </h2>
          <p class="text-base sm:text-lg leading-relaxed mb-6 lg:mb-10 opacity-95 max-w-xl">
            Support our four strategic goals: educational empowerment, health and wellness, economic development, and community engagement. Together, we foster dignity, resilience, and hope.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12 flex-wrap">
            <router-link
              to="/donations"
              class="inline-flex items-center justify-center min-h-11 px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
              aria-label="Donate to His Grace Foundation"
            >
              Donate Now
            </router-link>
            <router-link
              to="/volunteer"
              class="inline-flex items-center justify-center min-h-11 px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-20 text-white font-bold rounded-lg border border-white border-opacity-60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-opacity-30 hover:border-opacity-90 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Become a volunteer at His Grace Foundation"
            >
              Become a Volunteer
            </router-link>
          </div>

          <!-- Stats Section -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
            aria-label="Foundation impact statistics"
          >
            <div
              class="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">90+</span>
              <span class="text-sm lg:text-base opacity-90">Families Supported</span>
            </div>
            <div
              class="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">18</span>
              <span class="text-sm lg:text-base opacity-90">Outreach Activities</span>
            </div>
            <div
              class="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">6</span>
              <span class="text-sm lg:text-base opacity-90">Active Programs</span>
            </div>
          </div>
        </div>

        <!-- Visual Section with Animated Circles -->
        <div
          class="hidden lg:flex relative h-96 items-center justify-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <!-- Circle 1 -->
          <div
            class="absolute w-48 h-48 rounded-full bg-white bg-opacity-10 border-2 border-white border-opacity-20"
            style="top: -50px; right: -50px; animation: float 8s ease-in-out infinite;"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute w-72 h-72 rounded-full bg-white bg-opacity-10 border-2 border-white border-opacity-20"
            style="bottom: -100px; left: -100px; animation: float 10s ease-in-out infinite 0.5s;"
          ></div>
          <!-- Circle 3 -->
          <div
            class="absolute w-36 h-36 rounded-full bg-white bg-opacity-10 border-2 border-white border-opacity-20"
            style="top: 50%; right: 20%; animation: float 6s ease-in-out infinite 1s;"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
}
</style>
