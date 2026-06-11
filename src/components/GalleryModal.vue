<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-300 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click="closeModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
      >
        <div 
          class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          @click.stop
        >
          <!-- Close Button -->
          <button 
            class="absolute top-4 right-4 z-10 min-h-11 min-w-11 bg-white/95 rounded-lg flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-lg hover:scale-110 focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2 transition-all duration-300"
            @click="closeModal" 
            aria-label="Close gallery modal"
          >
            <X :size="24" />
          </button>

          <h2 id="gallery-modal-title" class="sr-only">Image Gallery</h2>

          <!-- Image and Info Section -->
          <div class="relative flex-1 overflow-auto flex flex-col">
            <img 
              :src="currentImage.src" 
              :alt="currentImage.alt"
              class="w-full h-auto object-contain transition-all duration-300"
            />
            
            <div class="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4">
              <h3 class="text-base sm:text-lg font-semibold text-purple-600 mb-1">
                {{ currentImage.title }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 line-clamp-2">
                {{ currentImage.description }}
              </p>
            </div>
          </div>

          <!-- Navigation Controls -->
          <div class="border-t border-gray-200 flex items-center justify-center gap-3 sm:gap-4 px-4 py-3 sm:py-4">
            <button 
              class="min-h-11 min-w-11 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2 transition-all duration-300"
              @click="prevImage"
              aria-label="Previous image"
            >
              <ChevronLeft :size="20" />
            </button>
            <div 
              class="text-sm text-gray-600 min-w-[50px] text-center"
              aria-live="polite" 
              aria-atomic="true"
            >
              {{ currentIndex + 1 }} / {{ images.length }}
            </div>
            <button 
              class="min-h-11 min-w-11 bg-purple-600 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2 transition-all duration-300"
              @click="nextImage"
              aria-label="Next image"
            >
              <ChevronRight :size="20" />
            </button>
          </div>

          <!-- Thumbnails -->
          <div 
            class="border-t border-gray-200 flex gap-2 sm:gap-3 px-3 sm:px-4 py-3 overflow-x-auto"
            role="tablist" 
            aria-label="Image thumbnails"
          >
            <button
              v-for="(img, idx) in images"
              :key="idx"
              class="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 border-2 rounded-lg overflow-hidden hover:border-purple-600 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2 transition-all duration-300"
              :class="idx === currentIndex ? 'border-purple-600 shadow-md' : 'border-gray-300'"
              @click="currentIndex = idx"
              :aria-label="`View image ${idx + 1}: ${img.title}`"
              :aria-selected="idx === currentIndex"
              role="tab"
            >
              <img 
                :src="img.src" 
                :alt="`${img.title} thumbnail`"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const props = defineProps<{
  images: GalleryImage[];
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const currentIndex = ref(0);

const currentImage = computed(() => props.images[currentIndex.value]);

const closeModal = () => emit('close');

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeModal();
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    window.addEventListener('keydown', handleKeydown);
  } else {
    window.removeEventListener('keydown', handleKeydown);
  }
});
</script>
