<script setup lang="ts">
import { RouterLink } from 'vue-router'

const helpActivities = [
  {
    id: 1,
    title: 'Emergency Assistance',
    description: 'Immediate financial and material support for individuals facing sudden crises like accidents, job loss, or natural disasters.',
    image: 'https://via.placeholder.com/300x200?text=Emergency+Help',
    status: 'Active',
    icon: '🆘'
  },
  {
    id: 2,
    title: 'Food Security Program',
    description: 'Regular food distribution and meal support to families living below the poverty line. We ensure nutritious meals for children.',
    image: 'https://via.placeholder.com/300x200?text=Food+Security',
    status: 'Active',
    icon: '🍲'
  },
  {
    id: 3,
    title: 'Shelter & Housing',
    description: 'Providing safe housing and shelter to homeless individuals and families. Including temporary housing and rehabilitation programs.',
    image: 'https://via.placeholder.com/300x200?text=Housing+Help',
    status: 'Active',
    icon: '🏠'
  },
  {
    id: 4,
    title: 'Medical Assistance',
    description: 'Supporting individuals who cannot afford medical treatments. We help with surgeries, medications, and ongoing healthcare costs.',
    image: 'https://via.placeholder.com/300x200?text=Medical+Aid',
    status: 'Active',
    icon: '⚕️'
  },
  {
    id: 5,
    title: 'Educational Support',
    description: 'Scholarship programs and educational materials for underprivileged students to ensure they can continue their studies.',
    image: 'https://via.placeholder.com/300x200?text=Education+Support',
    status: 'Active',
    icon: '📚'
  },
  {
    id: 6,
    title: 'Elderly Care',
    description: 'Support services for senior citizens including healthcare, nutrition, companionship, and assistance with daily activities.',
    image: 'https://via.placeholder.com/300x200?text=Elderly+Care',
    status: 'Active',
    icon: '👴'
  }
]
</script>

<template>
  <div class="help-page">
    <!-- Banner -->
    <div class="banner" style="background-image: url('/images/banner-help.svg')">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h1>How We Help</h1>
        <p>Reaching out to those in need</p>
      </div>
    </div>

    <!-- Help Activities -->
    <div class="container">
      <div class="intro-section">
        <h2>Our Support Programs</h2>
        <p>We provide comprehensive assistance across multiple areas to address the diverse needs of vulnerable communities.</p>
      </div>

      <div class="help-grid">
        <div v-for="activity in helpActivities" :key="activity.id" class="help-card">
          <div class="card-icon">{{ activity.icon }}</div>
          <div class="activity-image">
            <img :src="activity.image" :alt="activity.title">
            <span class="status-badge">{{ activity.status }}</span>
          </div>
          <div class="help-content">
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.description }}</p>
            <button class="details-btn">Get Help</button>
            <RouterLink :to="`/help/${activity.id}`" class="learn-more-btn">Learn More →</RouterLink>
          </div>
        </div>
      </div>

      <!-- How to Get Help Section -->
      <div class="process-section">
        <h2>How to Access Help</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h4>Apply</h4>
            <p>Fill out our application form with your details and explain your situation</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h4>Assessment</h4>
            <p>Our team reviews your application and assesses your needs</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h4>Approval</h4>
            <p>Receive approval and guidance on next steps</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h4>Support</h4>
            <p>Get the assistance you need with ongoing support</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <h2>Need Help? Contact Us</h2>
        <p>We're here to help. Reach out to us today.</p>
        <button class="contact-btn">Contact Support</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.help-page {
  width: 100%;
}

.banner {
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(111, 45, 168, 0.7);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
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

.intro-section {
  text-align: center;
  margin-bottom: 50px;
}

.intro-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.intro-section p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.help-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.help-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  text-align: center;
  font-size: 2.5rem;
  padding: 15px;
  background: #f0f0f0;
}

.activity-image {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(79, 172, 254, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.help-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.help-content h3 {
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
}

.help-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.details-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
}

.details-btn:hover {
  opacity: 0.9;
}

.learn-more-btn {
  display: inline-block;
  background: #4facfe;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 10px;
}

.learn-more-btn:hover {
  background: #00b4ff;
  transform: translateX(3px);
}

.process-section {
  margin: 60px 0;
  text-align: center;
}

.process-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.step {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.step h4 {
  font-size: 1.2rem;
  color: #333;
  margin: 15px 0 10px 0;
}

.step p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.contact-section {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 50px 30px;
  border-radius: 10px;
  text-align: center;
  margin-top: 60px;
}

.contact-section h2 {
  margin: 0 0 10px 0;
  font-size: 2rem;
}

.contact-section p {
  margin: 0 0 25px 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.contact-btn {
  background: white;
  color: #4facfe;
  border: none;
  padding: 12px 40px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.3s;
}

.contact-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2rem;
  }

  .help-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
