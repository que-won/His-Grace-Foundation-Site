<template>
  <section class="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-r from-slate-50 to-blue-50" aria-labelledby="testimonials-title">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10 md:mb-14" data-aos="fade-up" data-aos-delay="0">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4" id="testimonials-title">Transformed Lives, Empowered Communities</h2>
        <p class="text-lg text-slate-600">Stories of hope and resilience from those we serve</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10" aria-label="Testimonials from community members">
        <article
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          class="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-purple-300"
          :data-aos="`fade-${idx % 2 === 0 ? 'left' : 'right'}`"
          :data-aos-delay="`${100 + idx * 100}`"
        >
          <div class="flex gap-4 mb-6">
            <div class="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border-4 border-purple-100">
              <img :src="testimonial.avatar" :alt="`${testimonial.name}, ${testimonial.role}`" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <h4 class="text-base md:text-lg font-bold text-slate-900">{{ testimonial.name }}</h4>
              <p class="text-sm md:text-base text-purple-600 font-semibold mt-1">{{ testimonial.role }}</p>
            </div>
          </div>

          <div class="mb-6 relative">
            <Quote class="w-6 h-6 text-purple-600 opacity-20 absolute -top-2 -left-1" aria-hidden="true" />
            <p class="text-sm md:text-base text-slate-700 leading-relaxed italic pl-6">{{ testimonial.message }}</p>
          </div>

          <div class="flex gap-1" :aria-label="`Rating: ${testimonial.rating} out of 5 stars`">
            <span v-for="i in 5" :key="i" :class="i <= testimonial.rating ? 'text-amber-400' : 'text-gray-200'" aria-hidden="true">★</span>
          </div>
        </article>
      </div>

      <div class="flex justify-center gap-2 flex-wrap" role="tablist" aria-label="Testimonials carousel controls">
        <button 
          v-for="(_, idx) in testimonials.slice(0, Math.ceil(testimonials.length / 3))"
          :key="idx"
          class="min-h-11 min-w-11 rounded-full border-2 border-purple-600 transition-all duration-300 hover:scale-110"
          :class="activeTestimonial === idx ? 'bg-purple-600' : 'bg-purple-100'"
          @click="activeTestimonial = idx"
          :aria-label="`Go to testimonial group ${idx + 1}`"
          :aria-selected="activeTestimonial === idx"
          role="tab"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Quote } from 'lucide-vue-next';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  message: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Student, Educational Empowerment',
    avatar: '/images/real1.jpeg',
    message: 'Through His Grace Foundation\'s scholarship, I\'m now in secondary school. My dreams of becoming a teacher are finally becoming real.',
    rating: 5,
  },
  {
    name: 'David Mutua',
    role: 'Community Leader',
    avatar: '/images/real1.jpeg',
    message: 'The health fair brought vital wellness screening to our village. Now families have access to healthcare and education they never had before.',
    rating: 5,
  },
  {
    name: 'Grace Kipchoge',
    role: 'Job Training Graduate',
    avatar: '/images/real1.jpeg',
    message: 'The economic development program taught me business skills. I now run my own small business and provide for my children.',
    rating: 5,
  },
  {
    name: 'Emmanuel Kariuki',
    role: 'Volunteer, Community Engagement',
    avatar: '/images/real1.jpeg',
    message: 'Serving with His Grace Foundation has empowered me to use my skills for real community change. This mission gives my life purpose.',
    rating: 5,
  },
  {
    name: 'Lucy Kipchoge',
    role: 'Program Participant',
    avatar: '/images/real1.jpeg',
    message: 'This foundation showed me dignity, resilience, and hope during my hardest times. I\'m now helping others experience the same transformation.',
    rating: 5,
  },
  {
    name: 'Thomas Omondi',
    role: 'Beneficiary Family Head',
    avatar: '/images/real1.jpeg',
    message: 'The emergency relief program saved our family when disaster struck. We are forever grateful for their compassion and quick action.',
    rating: 5,
  },
];

const activeTestimonial = ref(0);
</script>

<style scoped>
/* All styling handled by Tailwind CSS and AOS animations */
</style>
