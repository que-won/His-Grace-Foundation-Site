<template>
  <section class="video-section">
    <div class="video-container">
      <div class="video-header">
        <h2 class="video-title">See Our Impact in Action</h2>
        <p class="video-subtitle">Watch real stories from the communities we serve</p>
      </div>

      <div class="video-grid">
        <div 
          v-for="(video, idx) in videos" 
          :key="idx"
          class="video-card"
          @click="playVideo(idx)"
        >
          <div class="video-card__thumbnail">
            <img :src="video.thumbnail" :alt="video.title" />
            <div class="video-card__play">
              <button class="video-play-btn" aria-label="Play video">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="#7d2be0" opacity="0.9"/>
                  <polygon points="24,15 24,45 40,30" fill="white"/>
                </svg>
              </button>
            </div>
            <div class="video-card__duration">{{ video.duration }}</div>
          </div>
          <div class="video-card__content">
            <h3 class="video-card__title">{{ video.title }}</h3>
            <p class="video-card__description">{{ video.description }}</p>
            <div class="video-card__meta">{{ video.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Modal -->
  <Teleport to="body">
    <transition name="video-modal-fade">
      <div v-if="videoModalOpen" class="video-modal-overlay" @click="closeVideoModal">
        <div class="video-modal" @click.stop>
          <button class="video-modal__close" @click="closeVideoModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="video-modal__player">
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
.video-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f3ff 100%);
}

@media (max-width: 768px) {
  .video-section {
    padding: 3rem 1rem;
  }
}

.video-container {
  max-width: 1200px;
  margin: 0 auto;
}

.video-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

@media (max-width: 768px) {
  .video-header {
    margin-bottom: 2.5rem;
  }
}

.video-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2428;
  margin: 0 0 1rem 0;
}

@media (max-width: 768px) {
  .video-title {
    font-size: clamp(1.75rem, 5vw, 2rem);
  }
}

.video-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 1024px) {
  .video-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.8rem;
  }
}

@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}

.video-card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateY(0);
}

@media (max-width: 768px) {
  .video-card {
    border-radius: 10px;
  }
}

.video-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 40px rgba(125, 43, 224, 0.15);
}

.video-card__thumbnail {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  background: #000;
}

.video-card__thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.video-card:hover .video-card__thumbnail img {
  transform: scale(1.08);
}

.video-card__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.video-card:hover .video-card__play {
  background: rgba(0, 0, 0, 0.5);
}

.video-play-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  padding: 0;
}

.video-card:hover .video-play-btn {
  transform: scale(1.15);
}

.video-card__duration {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.video-card__content {
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .video-card__content {
    padding: 1.2rem;
  }
}

.video-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2428;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .video-card__title {
    font-size: 1.05rem;
  }
}

.video-card__description {
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.video-card__meta {
  display: inline-block;
  background: rgba(125, 43, 224, 0.1);
  color: #7d2be0;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  text-transform: uppercase;
}

/* Video Modal */
.video-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

.video-modal {
  position: relative;
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.video-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #333;
  transition: all 0.2s ease;
}

.video-modal__close:hover {
  background: #fff;
  transform: rotate(90deg);
}

.video-modal__player {
  width: 100%;
  height: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .video-section {
    padding: 3rem 1rem;
  }

  .video-title {
    font-size: 2rem;
  }

  .video-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .video-modal {
    width: 95%;
    aspect-ratio: auto;
    height: auto;
    max-height: 80vh;
  }
}
</style>
