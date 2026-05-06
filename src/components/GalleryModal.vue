<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div v-if="isOpen" class="gallery-modal-overlay" @click="closeModal">
        <div class="gallery-modal" @click.stop>
          <button class="gallery-modal__close" @click="closeModal" aria-label="Close modal">
            <span>&times;</span>
          </button>

          <div class="gallery-modal__content">
            <img 
              :src="currentImage.src" 
              :alt="currentImage.alt"
              class="gallery-modal__image"
            />
            
            <div class="gallery-modal__info">
              <h3>{{ currentImage.title }}</h3>
              <p>{{ currentImage.description }}</p>
            </div>
          </div>

          <div class="gallery-modal__nav">
            <button 
              class="gallery-modal__prev" 
              @click="prevImage"
              aria-label="Previous image"
            >
              ‹
            </button>
            <div class="gallery-modal__counter">
              {{ currentIndex + 1 }} / {{ images.length }}
            </div>
            <button 
              class="gallery-modal__next" 
              @click="nextImage"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div class="gallery-modal__thumbnails">
            <button
              v-for="(img, idx) in images"
              :key="idx"
              class="gallery-modal__thumbnail"
              :class="{ 'is-active': idx === currentIndex }"
              @click="currentIndex = idx"
              :aria-label="`View image ${idx + 1}`"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

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

<style scoped>
.gallery-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

.gallery-modal {
  background: #fff;
  border-radius: 16px;
  max-width: 90%;
  width: 900px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.gallery-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid transparent;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #333;
}

.gallery-modal__close:hover,
.gallery-modal__close:focus-visible {
  background: #fff;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.gallery-modal__close:focus-visible {
  outline: 2px solid #7d2be0;
  outline-offset: 2px;
}

.gallery-modal__content {
  position: relative;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.gallery-modal__image {
  width: 100%;
  height: auto;
  object-fit: contain;
  animation: zoomIn 0.4s ease;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.gallery-modal__info {
  padding: 1.5rem;
  border-top: 1px solid #eee;
  background: #f9f9f9;
}

.gallery-modal__info h3 {
  margin: 0 0 0.5rem 0;
  color: #7d2be0;
  font-size: 1.1rem;
}

.gallery-modal__info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.gallery-modal__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
}

.gallery-modal__prev,
.gallery-modal__next {
  background: #7d2be0;
  color: #fff;
  border: 2px solid transparent;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  position: relative;
  overflow: hidden;
}

.gallery-modal__prev::before,
.gallery-modal__next::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.gallery-modal__prev:hover,
.gallery-modal__next:hover,
.gallery-modal__prev:focus-visible,
.gallery-modal__next:focus-visible {
  background: #6a1fb8;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.3);
}

.gallery-modal__prev:hover::before,
.gallery-modal__next:hover::before {
  transform: scaleX(1);
}

.gallery-modal__prev:focus-visible,
.gallery-modal__next:focus-visible {
  outline: 2px solid #7d2be0;
  outline-offset: 2px;
}

.gallery-modal__counter {
  color: #666;
  font-size: 0.9rem;
  min-width: 50px;
  text-align: center;
}

.gallery-modal__thumbnails {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #eee;
  overflow-x: auto;
}

.gallery-modal__thumbnail {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: none;
  padding: 0;
  position: relative;
}

.gallery-modal__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.gallery-modal__thumbnail:hover,
.gallery-modal__thumbnail:focus-visible {
  border-color: #7d2be0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.2);
}

.gallery-modal__thumbnail:hover img {
  transform: scale(1.1);
}

.gallery-modal__thumbnail:focus-visible {
  outline: 2px solid #7d2be0;
  outline-offset: 2px;
}

.gallery-modal__thumbnail.is-active {
  border-color: #7d2be0;
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.3), inset 0 0 0 2px #fff;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .gallery-modal {
    max-width: 95%;
    width: 100%;
    max-height: 85vh;
    border-radius: 12px;
  }

  .gallery-modal__info {
    padding: 1rem;
  }

  .gallery-modal__thumbnails {
    padding: 0.75rem;
    gap: 0.4rem;
  }

  .gallery-modal__thumbnail {
    width: 50px;
    height: 50px;
  }
}
</style>
