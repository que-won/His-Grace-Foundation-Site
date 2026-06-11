<script setup>
import { ref } from 'vue'
import { BookOpen, Heart, TrendingUp, Users, Award, Target } from 'lucide-vue-next'

const selectedProgram = ref(null)

const programs = [
  {
    id: 1,
    title: 'Educational Empowerment',
    icon: BookOpen,
    color: 'orange',
    description: 'Providing scholarships, skill development, and educational opportunities to underprivileged youth.',
    shortDescription: 'Scholarships & Training',
    metrics: [
      { label: 'Students Helped', value: '2,450', icon: Users },
      { label: 'Scholarships Awarded', value: '1,200', icon: Award },
      { label: 'Success Rate', value: '94%', icon: TrendingUp },
    ],
    details: 'Our educational programs focus on breaking cycles of poverty through quality education. We provide full scholarships, mentorship, vocational training, and career guidance to students from low-income backgrounds.',
    impact: 'Students who participate in our programs show 40% higher graduation rates and improved employment outcomes.',
  },
  {
    id: 2,
    title: 'Health & Wellness',
    icon: Heart,
    color: 'red',
    description: 'Accessible healthcare, mental health support, and wellness initiatives for underserved communities.',
    shortDescription: 'Medical & Mental Health',
    metrics: [
      { label: 'People Served', value: '5,800', icon: Users },
      { label: 'Health Fairs', value: '48', icon: Award },
      { label: 'Success Rate', value: '89%', icon: TrendingUp },
    ],
    details: 'We organize quarterly health fairs, provide mental health counseling, and partner with healthcare providers to ensure no one is left without access to care.',
    impact: 'Communities we serve report 60% improvement in health outcomes and 75% increase in wellness awareness.',
  },
  {
    id: 3,
    title: 'Economic Development',
    icon: TrendingUp,
    color: 'blue',
    description: 'Job training, entrepreneurship programs, and economic empowerment for sustainable livelihoods.',
    shortDescription: 'Job Training & Mentorship',
    metrics: [
      { label: 'People Employed', value: '1,850', icon: Users },
      { label: 'Businesses Started', value: '320', icon: Award },
      { label: 'Income Growth', value: '155%', icon: TrendingUp },
    ],
    details: 'Through comprehensive job training and entrepreneurship programs, we equip individuals with skills needed for stable, well-paying employment or to start their own businesses.',
    impact: 'Participants experience average income increases of 155% and 85% report improved quality of life.',
  },
  {
    id: 4,
    title: 'Community Engagement',
    icon: Users,
    color: 'green',
    description: 'Volunteer programs, community service projects, and grassroots initiatives that strengthen neighborhoods.',
    shortDescription: 'Volunteer & Service',
    metrics: [
      { label: 'Volunteers', value: '3,200', icon: Users },
      { label: 'Projects Completed', value: '580', icon: Award },
      { label: 'Hours Contributed', value: '89K+', icon: TrendingUp },
    ],
    details: 'We believe change happens when communities work together. Our volunteer programs mobilize local leaders and residents to address neighborhood challenges.',
    impact: 'Volunteer-led initiatives have transformed 47 neighborhoods and created $12M in community value.',
  },
]

const strategicPillars = [
  {
    number: '1',
    title: 'Accessibility',
    description: 'Making services available to those who need them most, regardless of geographic or economic barriers.',
  },
  {
    number: '2',
    title: 'Sustainability',
    description: 'Building long-term solutions that create lasting change rather than temporary relief.',
  },
  {
    number: '3',
    title: 'Empowerment',
    description: 'Equipping individuals with tools and knowledge to transform their own lives and communities.',
  },
  {
    number: '4',
    title: 'Accountability',
    description: 'Measuring impact rigorously and reporting transparently to all stakeholders.',
  },
]
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
            Our Programs & Impact
          </h1>
          <p class="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Four strategic pillars guide our work across education, health, economic development, and community engagement.
          </p>
        </div>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div 
            v-for="(program, index) in programs" 
            :key="program.id"
            :data-aos="`fade-${index % 2 === 0 ? 'right' : 'left'}`"
            :data-aos-delay="`${100 + index * 100}`"
            @click="selectedProgram = selectedProgram?.id === program.id ? null : program"
            class="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-dark"
          >
            <div class="p-6 md:p-8">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div :class="`w-14 h-14 rounded-lg grid place-items-center transition-all duration-300 ${
                    program.color === 'orange' ? 'bg-orange-100' :
                    program.color === 'red' ? 'bg-red-100' :
                    program.color === 'blue' ? 'bg-blue-100' :
                    'bg-green-100'
                  }`">
                    <component :is="program.icon" :size="28" :class="`${
                      program.color === 'orange' ? 'text-orange-600' :
                      program.color === 'red' ? 'text-red-600' :
                      program.color === 'blue' ? 'text-blue-600' :
                      'text-green-600'
                    }`" />
                  </div>
                  <div>
                    <h3 class="text-xl md:text-2xl font-black text-slate-900">{{ program.title }}</h3>
                    <p class="text-sm text-gray-500 font-bold">{{ program.shortDescription }}</p>
                  </div>
                </div>
              </div>

              <p class="text-gray-600 leading-relaxed mb-6">{{ program.description }}</p>

              <!-- Metrics -->
              <div class="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gray-200">
                <div v-for="metric in program.metrics" :key="metric.label" class="text-center">
                  <p class="text-2xl font-black text-primary-dark">{{ metric.value }}</p>
                  <p class="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">{{ metric.label }}</p>
                </div>
              </div>

              <!-- Expand Button -->
              <button 
                class="w-full py-3 px-4 bg-gradient-to-r from-primary-dark to-primary-purple text-white font-black rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                Learn More →
              </button>

              <!-- Expanded Details -->
              <transition name="expand">
                <div v-if="selectedProgram?.id === program.id" class="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <div>
                    <h4 class="font-black text-slate-900 mb-2">About This Program</h4>
                    <p class="text-gray-600 leading-relaxed">{{ program.details }}</p>
                  </div>
                  <div class="bg-gradient-to-r from-primary-dark/10 to-primary-purple/10 p-4 rounded-lg">
                    <p class="text-sm font-bold text-primary-dark">✓ Impact: {{ program.impact }}</p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Pillars -->
    <section class="py-16 md:py-20 px-6 bg-slate-50">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Strategic Approach</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Four foundational principles guide everything we do</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(pillar, index) in strategicPillars"
            :key="index"
            :data-aos="'fade-up'"
            :data-aos-delay="`${200 + index * 100}`"
            class="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div class="text-4xl font-black text-primary-dark mb-4">{{ pillar.number }}</div>
            <h3 class="text-xl font-black text-slate-900 mb-3">{{ pillar.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">By The Numbers</h2>
          <p class="text-gray-600">Our collective impact across all programs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div data-aos="fade-up" data-aos-delay="200" class="text-center p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white">
            <p class="text-4xl md:text-5xl font-black mb-2">14K+</p>
            <p class="font-bold uppercase tracking-wider">People Served Annually</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" class="text-center p-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl text-white">
            <p class="text-4xl md:text-5xl font-black mb-2">$2.3M</p>
            <p class="font-bold uppercase tracking-wider">Annual Impact Budget</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" class="text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
            <p class="text-4xl md:text-5xl font-black mb-2">12K+</p>
            <p class="font-bold uppercase tracking-wider">Volunteer Hours</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" class="text-center p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white">
            <p class="text-4xl md:text-5xl font-black mb-2">47</p>
            <p class="font-bold uppercase tracking-wider">Communities Transformed</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 md:py-20 px-6 bg-gradient-to-br from-primary-dark to-primary-purple">
      <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Ready to Make an Impact?</h2>
        <p class="text-lg text-gray-100 mb-8">Join us in transforming communities through education, health, economic opportunity, and engagement.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/volunteer-signup" class="px-8 py-4 bg-white text-primary-dark font-black rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Become a Volunteer
          </router-link>
          <router-link to="/contact-us" class="px-8 py-4 border-2 border-white text-white font-black rounded-lg hover:bg-white/10 transition-all">
            Get Involved
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from, .expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.expand-enter-to, .expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
