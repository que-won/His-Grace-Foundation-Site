<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">Stories of Change</h2>
        <p class="testimonials-subtitle">Real impact from the people we serve</p>
      </div>

      <div class="testimonials-grid">
        <div 
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          class="testimonial-card"
          :style="{ '--card-index': idx }"
        >
          <div class="testimonial-card__header">
            <div class="testimonial-card__avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
            </div>
            <div class="testimonial-card__author">
              <h4 class="testimonial-card__name">{{ testimonial.name }}</h4>
              <p class="testimonial-card__role">{{ testimonial.role }}</p>
            </div>
          </div>

          <div class="testimonial-card__quote">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#7d2be0" opacity="0.3">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.50-5-7-5s-4 3.5-4 5c0 3 2 6 5 6.5L7 11 5.8 3c-1 .5-3 2.5-3 5 0 5 2 7 7 7s11 1 11-10" />
            </svg>
            <p class="testimonial-card__text">{{ testimonial.message }}</p>
          </div>

          <div class="testimonial-card__rating">
            <span v-for="i in 5" :key="i" class="star" :class="{ 'is-filled': i <= testimonial.rating }">★</span>
          </div>
        </div>
      </div>

      <div class="testimonials-controls">
        <button 
          v-for="(_, idx) in testimonials.slice(0, Math.ceil(testimonials.length / 3))"
          :key="idx"
          class="testimonials-dot"
          :class="{ 'is-active': activeTestimonial === idx }"
          @click="activeTestimonial = idx"
          :aria-label="`Go to testimonial ${idx + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    role: 'Mother, Education Beneficiary',
    avatar: '/images/real1.jpeg',
    message: 'Thanks to this organization, my daughter can now attend school. She has dreams of becoming a teacher, and this foundation is helping make that possible.',
    rating: 5,
  },
  {
    name: 'David Mutua',
    role: 'Community Leader',
    avatar: '/images/real1.jpeg',
    message: 'The clean water project transformed our village. No more long walks for water, and our children are healthier than ever before.',
    rating: 5,
  },
  {
    name: 'Grace Kipchoge',
    role: 'Healthcare Worker',
    avatar: '/images/real1.jpeg',
    message: 'The medical camps have reached remote areas that never had access to healthcare. The impact has been remarkable and immediate.',
    rating: 5,
  },
  {
    name: 'Emmanuel Kariuki',
    role: 'Youth Participant',
    avatar: '/images/real1.jpeg',
    message: 'Through the mentorship program, I gained skills and confidence. Now I am employed and can support my family.',
    rating: 5,
  },
  {
    name: 'Lucy Kipchoge',
    role: 'Program Volunteer',
    avatar: '/images/real1.jpeg',
    message: 'Being part of this team is fulfilling. Seeing the direct impact of our work on real families makes every moment worthwhile.',
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
.testimonials-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f0ff 100%);
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.testimonials-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2428;
  margin: 0 0 1rem 0;
}

.testimonials-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.testimonial-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateY(0);
  border-left: 4px solid transparent;
  animation: cardIn 0.6s ease backwards;
  animation-delay: calc(var(--card-index) * 0.1s);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(125, 43, 224, 0.15);
  border-left-color: #7d2be0;
}

.testimonial-card__header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.testimonial-card__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid rgba(125, 43, 224, 0.2);
}

.testimonial-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-card__author {
  flex: 1;
}

.testimonial-card__name {
  font-size: 1rem;
  font-weight: 700;
  color: #1f2428;
  margin: 0;
}

.testimonial-card__role {
  font-size: 0.85rem;
  color: #7d2be0;
  margin: 0.25rem 0 0 0;
  font-weight: 600;
}

.testimonial-card__quote {
  position: relative;
  margin-bottom: 1.5rem;
}

.testimonial-card__text {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.testimonial-card__rating {
  display: flex;
  gap: 0.4rem;
}

.star {
  font-size: 1.2rem;
  color: #ddd;
  transition: all 0.3s ease;
}

.star.is-filled {
  color: #ffc107;
  text-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.testimonials-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.testimonials-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(125, 43, 224, 0.2);
  border: 2px solid #7d2be0;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.testimonials-dot:hover {
  transform: scale(1.2);
}

.testimonials-dot.is-active {
  background: #7d2be0;
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 1rem;
  }

  .testimonials-title {
    font-size: 2rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
