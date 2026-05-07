<template>
  <section class="gallery-section">
    <div class="gallery-container">
      <div class="gallery-header">
        <h2 class="gallery-title">Our Impact in Pictures</h2>
        <p class="gallery-subtitle">See the real stories and moments of change from our community</p>
      </div>

      <div class="gallery-grid">
        <div 
          v-for="(item, idx) in galleryItems" 
          :key="idx"
          class="gallery-card"
          @click="openGallery(idx)"
        >
          <div class="gallery-card__image-wrapper">
            <img 
              :src="item.src" 
              :alt="item.alt"
              class="gallery-card__image"
            />
            <div class="gallery-card__overlay">
              <button class="gallery-card__icon" aria-label="View image">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
          <div class="gallery-card__content">
            <div class="gallery-card__tag">{{ item.category }}</div>
            <h3 class="gallery-card__title">{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <button class="gallery-btn-load-more" @click="loadMoreItems" v-if="hasMore">
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
    alt: 'Children receiving education materials',
    title: 'Education Support Program',
    category: 'Education',
    description: 'Children from our community receiving educational materials and mentorship.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Clean water project',
    title: 'Clean Water Initiative',
    category: 'Clean Water',
    description: 'Installing clean water systems for rural communities.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Healthcare outreach',
    title: 'Medical Camp',
    category: 'Healthcare',
    description: 'Free medical checkups and awareness programs.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Food distribution',
    title: 'Nutrition Program',
    category: 'Food Security',
    description: 'Providing nutritious meals to vulnerable families.',
  },
  {
    src: '/images/real1.jpeg',
    alt: 'Shelter project',
    title: 'Emergency Shelter',
    category: 'Shelter',
    description: 'Emergency relief for families in crisis.',
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
.gallery-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0e6ff 100%);
  overflow: hidden;
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 3rem 1rem;
  }
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

@media (max-width: 768px) {
  .gallery-header {
    margin-bottom: 2.5rem;
  }
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2428;
  margin: 0 0 1rem 0;
}

@media (max-width: 768px) {
  .gallery-title {
    font-size: clamp(1.75rem, 5vw, 2rem);
  }
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .gallery-subtitle {
    font-size: 0.95rem;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
}

.gallery-card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateY(0);
}

.gallery-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(125, 43, 224, 0.15);
}

.gallery-card__image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  overflow: hidden;
  background: #f0f0f0;
}

.gallery-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover .gallery-card__image {
  transform: scale(1.1);
}

.gallery-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(125, 43, 224, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-card__overlay {
  opacity: 1;
}

.gallery-card__icon {
  background: #fff;
  border: 2px solid transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #7d2be0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.gallery-card__icon:hover {
  transform: scale(1.18);
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  box-shadow: 0 8px 24px rgba(125, 43, 224, 0.4);
}

.gallery-card__content {
  padding: 1.5rem;
}

.gallery-card__tag {
  display: inline-block;
  background: rgba(125, 43, 224, 0.1);
  color: #7d2be0;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.gallery-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2428;
  margin: 0;
  line-height: 1.4;
}

.gallery-btn-load-more {
  display: block;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 16px rgba(125, 43, 224, 0.35);
}

.gallery-btn-load-more:hover {
  background: linear-gradient(135deg, #7d2be0 0%, #6a1fb8 100%);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(125, 43, 224, 0.45);
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 3rem 1rem;
  }

  .gallery-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 1.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
