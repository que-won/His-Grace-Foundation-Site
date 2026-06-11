<script setup lang="ts">
import { Heart, Leaf, Zap, Star, Check, Search } from 'lucide-vue-next'

interface Value {
  title: string
  description: string
  icon: typeof Heart
  image: string
}

const values: Value[] = [
  {
    title: 'Service Beyond Self',
    description: 'We are committed to serving others with dedication and compassion, putting community needs first.',
    icon: Heart,
    image: '/images/real1.jpeg'
  },
  {
    title: 'Sustainability',
    description: 'Our programs are designed for long-term impact, ensuring lasting change for future generations.',
    icon: Leaf,
    image: '/images/real1.jpeg'
  },
  {
    title: 'Empowerment',
    description: 'We empower communities to take control of their futures and drive their own development.',
    icon: Zap,
    image: '/images/real1.jpeg'
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all our actions and decisions.',
    icon: Star,
    image: '/images/real1.jpeg'
  },
  {
    title: 'Accountability',
    description: 'We are responsible for every resource and committed to the communities we serve.',
    icon: Check,
    image: '/images/real1.jpeg'
  },
  {
    title: 'Transparency',
    description: 'We openly communicate our progress, challenges, and the impact of our work.',
    icon: Search,
    image: '/images/real1.jpeg'
  }
]
</script>

<template>
  <section class="bg-gradient-to-br from-blue-600 to-blue-500 py-16 md:py-24 lg:py-32 text-white" aria-labelledby="values-title">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 id="values-title" class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" data-aos="fade-up" data-aos-duration="800">
          Our Core Values
        </h2>
        <p class="text-base md:text-lg text-blue-100" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          Six pillars that guide everything we do at His Grace Foundation
        </p>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" aria-label="Core values cards">
        <article 
          v-for="(value, index) in values" 
          :key="index"
          class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-h-80 md:min-h-80 focus-within:outline focus-within:outline-2 focus-within:outline-blue-300"
          :data-aos="`${index % 2 === 0 ? 'fade-up' : index % 3 === 0 ? 'fade-left' : 'fade-right'}`"
          :data-aos-delay="`${index * 100}`"
          data-aos-duration="800"
          role="complementary"
          :aria-label="`${value.title} value`"
        >
          <!-- Background Image -->
          <img 
            :src="value.image" 
            :alt="`Background for ${value.title}`"
            class="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          
          <!-- Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/70 to-blue-700/50 group-hover:from-blue-900 group-hover:via-blue-800/80 group-hover:to-blue-700/60 transition-all duration-300"></div>
          
          <!-- Content -->
          <div class="relative h-full flex flex-col justify-between p-6 md:p-7 text-white">
            <!-- Icon -->
            <div class="flex justify-start" aria-hidden="true">
              <div class="p-3 md:p-3.5 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                <component :is="value.icon" class="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="space-y-3">
              <!-- Title -->
              <h3 class="text-lg md:text-xl font-semibold leading-snug">
                {{ value.title }}
              </h3>
              
              <!-- Description -->
              <p class="text-sm md:text-base text-blue-50 leading-relaxed line-clamp-3">
                {{ value.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation keyframes if needed for custom animations */
@keyframes subtle-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
