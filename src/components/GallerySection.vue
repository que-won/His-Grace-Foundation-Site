<template>
  <section class="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Transforming Lives Through Our Four Goals</h2>
        <p class="text-base sm:text-lg md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">Visual stories of empowerment, health, economic development, and community engagement</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
        <div 
          v-for="(item, idx) in galleryItems" 
          :key="idx"
          :data-aos="`fade-${idx % 2 === 0 ? 'left' : 'right'}`"
          :data-aos-delay="`${idx * 100}`"
          class="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
          @click="openGallery(idx)"
        >
          <div class="relative w-full overflow-hidden bg-gray-100 aspect-video">
            <img 
              :src="item.src" 
              :alt="item.alt"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button 
                class="flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-white rounded-full text-purple-700 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl min-h-11" 
                aria-label="View image gallery"
              >
                <Download :size="32" />
              </button>
            </div>
          </div>
          <div class="p-5 md:p-6">
            <div class="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase">{{ item.category }}</div>
            <h3 class="font-bold text-gray-900 text-base md:text-lg leading-snug">{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <button 
        v-if="hasMore"
        @click="loadMoreItems"
        data-aos="fade-up"
        class="block mx-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl min-h-11 text-base sm:text-base"
      >
        Load More
      </button>
    </div>
  </section>

  <GalleryModal 
    :images="modalImages"
    :is-open="galleryOpen"
    @close="galleryOpen = false"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Download } from 'lucide-vue-next';
import GalleryModal from './GalleryModal.vue';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

const allGalleryItems: GalleryItem[] = [
  {
    src: '/images/real1.jpeg',
    alt: 'Students in scholarship program',
    title: 'Educational Empowerment',
    category: 'Education',
    description: 'Students receiving scholarships and skill-building workshops to increase access to educational opportunities.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Community health fair',
    title: 'Community Health Fair',
    category: 'Health & Wellness',
    description: 'Free health screenings and wellness programs improving community health and well-being.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Job training program',
    title: 'Economic Development Training',
    category: 'Economic Development',
    description: 'Job training and small business mentorship fostering economic stability and self-sufficiency.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Community volunteer service',
    title: 'Community Service Project',
    category: 'Community Engagement',
    description: 'Volunteers mobilizing together to address community needs and strengthen local bonds.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Mental health support',
    title: 'Mental Health Resources',
    category: 'Health & Wellness',
    description: 'Partnering with healthcare providers to offer mental health resources and community support.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Youth mentorship',
    title: 'Youth Mentorship',
    category: 'Youth',
    description: 'Building futures through mentorship and skills training.',
  },
];

const itemsPerPage = 6;
const displayedCount = ref(itemsPerPage);
const galleryOpen = ref(false);
const selectedIndex = ref(0);

const galleryItems = computed(() => 
  allGalleryItems.slice(0, displayedCount.value)
);

const hasMore = computed(() => 
  displayedCount.value < allGalleryItems.length
);

const modalImages = computed(() =>
  allGalleryItems.map(item => ({
    src: item.src,
    alt: item.alt,
    title: item.title,
    description: item.description,
  }))
);

const openGallery = (index: number) => {
  selectedIndex.value = index;
  galleryOpen.value = true;
};

const loadMoreItems = () => {
  displayedCount.value += itemsPerPage;
};
</script>

<style scoped>
/* Tailwind CSS handles all styling via utility classes */
</style>

<style scoped>
/* Tailwind CSS handles all styling via utility classes */
</style>
