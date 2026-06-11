<script setup>
import { Book, Heart, Shield, Droplet } from "lucide-vue-next";

const activities = [
  {
    icon: "book",
    title: "Empower Through Education",
    text: "Increase access to educational resources through scholarships, grants, and skill-building workshops.",
    image: "/images/real1.jpeg",
    alt: "Educational empowerment program",
  },
  {
    icon: "heart",
    title: "Enhance Community Health",
    text: "Improve health and wellness through programs and partnerships.",
    image: "/images/real1.jpeg",
    alt: "Community health initiative",
  },
  {
    icon: "health",
    title: "Promote Economic Development",
    text: "Foster stability through job training and mentorship.",
    image: "/images/real1.jpeg",
    alt: "Economic development program",
  },
  {
    icon: "water",
    title: "Encourage Community Engagement",
    text: "Strengthen community bonds through volunteer programs.",
    image: "/images/real1.jpeg",
    alt: "Community engagement activities",
  },
];

const getIcon = (iconType) => {
  const icons = { book: Book, heart: Heart, health: Shield, water: Droplet };
  return icons[iconType];
};
</script>

<template>
  <section id="activities" class="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 items-end mb-8" data-aos="fade-up" data-aos-delay="100">
        <div class="lg:col-span-2">
          <p class="text-orange-600 text-xs font-black uppercase tracking-widest mb-2">Our Strategic Goals</p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">Four Pillars of Impact</h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(activity, i) in activities" :key="i" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden" :data-aos="i % 2 === 0 ? 'fade-left' : 'fade-right'" :data-aos-delay="`${700 + i * 100}`">
          <img :src="activity.image" :alt="activity.alt" class="w-full h-48 object-cover" />
          <div class="p-5 md:p-6">
            <strong class="text-slate-900 block text-lg">{{ activity.title }}</strong>
            <p class="text-sm text-gray-600 mt-2 leading-relaxed">{{ activity.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  [data-aos] { opacity: 1 !important; transform: none !important; }
}
</style>