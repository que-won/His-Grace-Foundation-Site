<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Community School Building',
    description: 'Building a new school facility in rural areas to provide quality education for underprivileged children. This project focuses on creating a safe and equipped learning environment.',
    image: 'https://via.placeholder.com/300x200?text=School+Building',
    category: 'Education',
    impact: 'Benefiting 500+ students'
  },
  {
    id: 2,
    title: 'Clean Water Initiative',
    description: 'Providing clean drinking water to communities without access. Installing water purification systems and teaching water conservation practices.',
    image: 'https://via.placeholder.com/300x200?text=Clean+Water',
    category: 'Health',
    impact: '10,000+ people helped'
  },
  {
    id: 3,
    title: 'Healthcare Camps',
    description: 'Mobile healthcare units visiting remote villages for free medical checkups, vaccinations, and health awareness programs.',
    image: 'https://via.placeholder.com/300x200?text=Healthcare',
    category: 'Health',
    impact: 'Monthly medical camps'
  },
  {
    id: 4,
    title: 'Environmental Reforestation',
    description: 'Planting native trees and creating green spaces to combat deforestation and improve environmental sustainability.',
    image: 'https://via.placeholder.com/300x200?text=Reforestation',
    category: 'Environment',
    impact: '50,000+ trees planted'
  },
  {
    id: 5,
    title: 'Skill Development Program',
    description: 'Teaching vocational skills to youth to enable them to earn sustainable livelihoods and become self-reliant.',
    image: 'https://via.placeholder.com/300x200?text=Skills+Training',
    category: 'Employment',
    impact: 'Training 200+ youth annually'
  },
  {
    id: 6,
    title: 'Disaster Relief Operations',
    description: 'Quick response to natural disasters with emergency aid, food, shelter, and medical support for affected communities.',
    image: 'https://via.placeholder.com/300x200?text=Disaster+Relief',
    category: 'Emergency',
    impact: 'Helping in times of crisis'
  }
]
</script>

<template>
  <div class="projects-page">
    <!-- Banner -->
    <div class="banner">
      <div class="banner-content">
        <h1>Our Projects</h1>
        <p>Making a difference through targeted initiatives</p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="container">
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
            <span class="category-badge">{{ project.category }}</span>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <div class="impact">
              <strong>Impact:</strong> {{ project.impact }}
            </div>
            <RouterLink :to="`/projects/${project.id}`" class="learn-more-btn">
              Learn More →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  width: 100%;
}

.banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.banner-content h1 {
  font-size: 3rem;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.banner-content p {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-content h3 {
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}

.impact {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 0.95rem;
  color: #555;
}

.learn-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
  text-decoration: none;
  display: inline-block;
}

.learn-more-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
