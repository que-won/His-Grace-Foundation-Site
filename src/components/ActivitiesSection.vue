<script setup lang="ts">
interface Activity {
  title: string
  description: string
  icon: string
  image: string
}

const activities: Activity[] = [
  {
    title: 'Healthy Food Programs',
    description: 'Providing nutritious meals to children in schools and communities, ensuring proper nutrition for healthy development.',
    icon: '',
    image: '../../public/images/real1.jpeg'
  },
  {
    title: 'Pure Water Access',
    description: 'Installing and maintaining water systems to provide clean, safe drinking water to remote villages.',
    icon: '',
    image: '../../public/images/real1.jpeg'
  },
  {
    title: 'Medical Facilities',
    description: 'Building and supporting healthcare centers to provide medical care and emergency services to underserved communities.',
    icon: '',
    image: '../../public/images/real1.jpeg'
  },
  {
    title: 'Educational Support',
    description: 'Supporting schools with resources, scholarships, and programs to empower children through quality education.',
    icon: '',
    image: '../../public/images/real1.jpeg'
  }
]
</script>

<template>
  <section id="activities" class="activities-section">
    <div class="container">
      <div class="section-title">
        <h2>Our Core Activities</h2>
        <p>We focus on initiatives that create lasting positive change in communities across Africa</p>
      </div>

      <div class="activities-grid">
        <div v-for="(activity, index) in activities" :key="index" class="activity-card">
          <div class="activity-image">
            <img :src="activity.image" :alt="activity.title" />
            <div class="activity-overlay">
              <span class="activity-icon">{{ activity.icon }}</span>
            </div>
          </div>
          <div class="activity-content">
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.description }}</p>
            <a href="#" class="learn-more">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.activities-section {
  background: var(--bg-light);
  padding: 4rem 0;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
}

.activity-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.activity-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.activity-card:hover .activity-image img {
  transform: scale(1.1);
}

.activity-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 95, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.activity-card:hover .activity-overlay {
  opacity: 1;
}

.activity-icon {
  font-size: 3.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.activity-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.activity-content h3 {
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.5rem;
}

.activity-content p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  flex: 1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.learn-more {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.learn-more:hover {
  color: var(--accent-light);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .activity-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .activity-image {
    height: 180px;
  }

  .activity-content {
    padding: 1.5rem;
  }

  .activity-content h3 {
    font-size: 1.25rem;
  }

  .activity-content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .activities-grid {
    grid-template-columns: 1fr;
  }

  .activity-image {
    height: 200px;
  }
}
</style>
