<script setup lang="ts">
import { RouterLink } from 'vue-router'

const donations = [
  {
    id: 1,
    title: 'Monthly Donations',
    description: 'Become a monthly donor and provide consistent support to our ongoing charitable programs. Your regular contribution helps us plan and execute long-term initiatives.',
    image: 'https://via.placeholder.com/300x200?text=Monthly+Giving',
    amount: 'Starting from $10/month',
    icon: '💳'
  },
  {
    id: 2,
    title: 'One-Time Donations',
    description: 'Make a one-time contribution towards a specific cause or project of your choice. Every amount helps us achieve our mission.',
    image: 'https://via.placeholder.com/300x200?text=One-Time+Gift',
    amount: 'Any amount',
    icon: '🎁'
  },
  {
    id: 3,
    title: 'Corporate Donations',
    description: 'Organizations can contribute to our cause while building their corporate social responsibility. Tax benefits available for eligible donations.',
    image: 'https://via.placeholder.com/300x200?text=Corporate+Giving',
    amount: 'Flexible amounts',
    icon: '🏢'
  },
  {
    id: 4,
    title: 'In-Kind Donations',
    description: 'Donate goods, supplies, clothing, or other items needed for our projects. We accept both new and gently used items.',
    image: 'https://via.placeholder.com/300x200?text=In-Kind+Donation',
    amount: 'Various items',
    icon: '📦'
  },
  {
    id: 5,
    title: 'Sponsor a Child',
    description: 'Sponsor a child\'s education and witness the transformation. Your monthly contribution covers schooling, nutrition, and materials.',
    image: 'https://via.placeholder.com/300x200?text=Child+Sponsorship',
    amount: '$20-50/month',
    icon: '👧'
  },
  {
    id: 6,
    title: 'Fundraiser Events',
    description: 'Organize or participate in community fundraiser events. We help you plan successful charity events that support our initiatives.',
    image: 'https://via.placeholder.com/300x200?text=Fundraiser+Events',
    amount: 'Community-driven',
    icon: '🎉'
  }
]
</script>

<template>
  <div class="donations-page">
    <!-- Banner -->
    <div class="banner" style="background-image: url('/images/banner-donations.svg')">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h1>Make a Donation</h1>
        <p>Your generosity creates lasting change</p>
      </div>
    </div>

    <!-- Donations Grid -->
    <div class="container">
      <div class="intro-text">
        <h2>Ways to Give</h2>
        <p>Whether it's a small or large donation, every contribution helps us support those in need. Choose the donation method that works best for you.</p>
      </div>

      <div class="donations-grid">
        <div v-for="donation in donations" :key="donation.id" class="donation-card">
          <div class="donation-header">
            <div class="icon">{{ donation.icon }}</div>
            <h3>{{ donation.title }}</h3>
          </div>
          <div class="donation-image">
            <img :src="donation.image" :alt="donation.title">
          </div>
          <div class="donation-content">
            <p class="description">{{ donation.description }}</p>
            <div class="amount-badge">{{ donation.amount }}</div>
            <button class="donate-btn">Donate Now</button>
            <RouterLink :to="`/donations/${donation.id}`" class="learn-more-btn">Learn More →</RouterLink>
          </div>
        </div>
      </div>

      <!-- Impact Section -->
      <div class="impact-section">
        <h2>Your Impact</h2>
        <div class="impact-grid">
          <div class="impact-item">
            <h4>$10</h4>
            <p>Provides meals for 5 children</p>
          </div>
          <div class="impact-item">
            <h4>$25</h4>
            <p>Supplies school materials for 1 student</p>
          </div>
          <div class="impact-item">
            <h4>$50</h4>
            <p>Medical checkup for 10 people</p>
          </div>
          <div class="impact-item">
            <h4>$100</h4>
            <p>Plants 20 trees for environment</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donations-page {
  width: 100%;
}

.banner {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

.intro-text {
  text-align: center;
  margin-bottom: 50px;
}

.intro-text h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.intro-text p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.donations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.donation-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.donation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.donation-header {
  padding: 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  text-align: center;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.donation-header h3 {
  font-size: 1.3rem;
  margin: 0;
  font-weight: 600;
}

.donation-image {
  height: 150px;
  overflow: hidden;
}

.donation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.donation-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.amount-badge {
  background: #f0f0f0;
  color: #f5576c;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.donate-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
}

.donate-btn:hover {
  opacity: 0.9;
}

.learn-more-btn {
  display: inline-block;
  background: #f5576c;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 10px;
}

.learn-more-btn:hover {
  background: #e63547;
  transform: translateX(3px);
}

.impact-section {
  margin-top: 60px;
  text-align: center;
}

.impact-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.impact-item {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
}

.impact-item h4 {
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.impact-item p {
  margin: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2rem;
  }

  .donations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
