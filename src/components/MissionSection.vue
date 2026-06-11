<template>
  <section 
    id="about" 
    class="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 scroll-mt-24"
    aria-labelledby="mission-title"
    data-aos="fade-up"
  >
  <div class="container mx-auto">
   <p class="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 " data-aos="fade-up" data-aos-delay="100">
            Our Mission &amp; Vision
          </p>

          <!-- Heading -->
          <h2 
            id="mission-title"
            class="text-3xl md:text-4xl lg:text-5xl font-black text-dark-bg leading-tight mb-4"
          >
            Uplifting Communities Through Education and Support
          </h2>
  </div>
    <div class="max-w-6xl mx-auto">
      <article class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
        
        <!-- Mission Image -->
        <div 
          class="relative min-h-96 md:min-h-80 lg:min-h-96 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="../../public/images/real1.jpeg"
            alt="Volunteer team supporting a charity initiative"
            class="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          <!-- Heart Badge -->
          <div 
            class="absolute top-4 left-4 w-13 h-13 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-3xl shadow-lg"
            aria-hidden="true"
          >
            ❤
          </div>
        </div>

        <!-- Mission Content -->
        <div class="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
          <!-- Eyebrow -->
         
          <!-- Intro Text -->
          <p class="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
            At <span class="font-bold">His Grace Foundation,</span> we are dedicated to uplifting underprivileged individuals and communities by providing resources, support, and education.
          </p>

          <!-- Subheading -->
          <h3 class="text-lg font-bold text-dark-bg mb-4">Our Strategic Goals</h3>

          <!-- Goals List -->
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-3 text-gray-700">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
              <span class="text-base leading-relaxed">Empower Through Education - Increase access to educational resources and opportunities</span>
            </li>
            <li class="flex items-start gap-3 text-gray-700">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
              <span class="text-base leading-relaxed">Enhance Community Health and Well-being - Improve overall health and wellness</span>
            </li>
            <li class="flex items-start gap-3 text-gray-700">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
              <span class="text-base leading-relaxed">Promote Economic Development - Foster stability and self-sufficiency</span>
            </li>
            <li class="flex items-start gap-3 text-gray-700">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
              <span class="text-base leading-relaxed">Encourage Community Engagement - Strengthen community bonds and volunteerism</span>
            </li>
          </ul>

          <!-- Description -->
          <p class="text-base text-gray-600 mb-8 leading-relaxed">
            We strive to foster dignity, resilience, and hope, empowering those in need to realize their full potential. 
            Our work is grounded in compassion and focuses on creating lasting opportunities for a brighter future.
          </p>

          <!-- CTA Button -->
          <a 
            href="#why-us" 
            aria-label="Learn why you should choose His Grace Foundation"
            class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-purple-600 to-purple-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-11"
          >
            Why Choose Us
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
// No external imports needed for this section
</script>

<style scoped>
/* All styling handled by Tailwind CSS */
</style>
