<template>
  <section class="py-20 lg:py-28 px-4 lg:px-6 bg-gradient-to-br from-white to-purple-50" aria-labelledby="video-title">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 lg:mb-14" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-4xl lg:text-5xl font-black text-gray-900 mb-4" id="video-title" data-aos="fade-up" data-aos-delay="100">Our Mission in Motion</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Witness transformation through education, health, economic development, and community engagement</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" aria-label="Video cards">
        <div 
          v-for="(video, idx) in videos" 
          :key="idx"
          class="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer"
          role="article"
          @click="playVideo(idx)"
          @keydown.enter="playVideo(idx)"
          @keydown.space="playVideo(idx)"
          tabindex="0"
          :data-aos="`fade-up`"
          :data-aos-delay="`${300 + idx * 100}`"
        >
          <div class="relative w-full aspect-video overflow-hidden bg-black">
            <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
              <button 
                class="bg-none border-none cursor-pointer flex items-center justify-center group-hover:scale-125 transition-transform duration-300 min-h-11 min-w-11" 
                :aria-label="`Play: ${video.title}`"
              >
                <Play :size="60" class="text-white" />
              </button>
            </div>
            <div class="absolute bottom-4 right-4 bg-black/80 text-white text-sm font-bold px-3 py-2 rounded">{{ video.duration }}</div>
          </div>
          <div class="p-6 lg:p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{{ video.title }}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ video.description }}</p>
            <span class="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase">{{ video.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Modal -->
  <Teleport to="body">
    <transition name="video-modal-fade">
      <div 
        v-if="videoModalOpen" 
        class="fixed inset-0 bg-black/85 flex items-center justify-center z-50 backdrop-blur-sm" 
        @click="closeVideoModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <div class="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl" @click.stop data-aos="zoom-up" data-aos-delay="200">
          <button 
            class="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:rotate-90 transition-all duration-200 min-h-11 min-w-11" 
            @click="closeVideoModal"
            :aria-label="`Close ${activeVideo?.title || 'video'} modal`"
          >
            <X :size="24" class="text-gray-900" />
          </button>
          
          <h2 v-if="activeVideo" id="video-modal-title" class="sr-only">{{ activeVideo.title }}</h2>
          
          <div class="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              :src="activeVideoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Play, X } from 'lucide-vue-next';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  category: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Education Transformation',
    description: 'See how our education program changed lives in rural communities.',
    thumbnail: '/images/real1.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '3:45',
    category: 'Education',
  },
  {
    id: '2',
    title: 'Clean Water Initiative Impact',
    description: 'Families now have access to clean, safe drinking water.',
    thumbnail: '/images/real1.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '2:30',
    category: 'Water Access',
  },
  {
    id: '3',
    title: 'Healthcare Outreach Success',
    description: 'Medical camps bringing healthcare to remote areas.',
    thumbnail: '/images/real1.jpeg',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '4:15',
    category: 'Healthcare',
  },
];

const videoModalOpen = ref(false);
const activeVideoIndex = ref(0);

const activeVideo = computed(() => videos[activeVideoIndex.value]);

const activeVideoUrl = computed(() => {
  const videoId = videos[activeVideoIndex.value].youtubeId;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
});

const playVideo = (index: number) => {
  activeVideoIndex.value = index;
  videoModalOpen.value = true;
};

const closeVideoModal = () => {
  videoModalOpen.value = false;
};
</script>

<style scoped>
.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}
</style>
