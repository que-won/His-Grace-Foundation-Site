<script setup lang="ts">
import { RouterLink } from 'vue-router'

const opportunities = [
  {
    id: 1,
    title: 'Education Volunteer',
    description: 'Teach students in rural schools or provide tutoring to underprivileged children. Share your knowledge and skills to create lasting impact.',
    image: 'https://via.placeholder.com/300x200?text=Education+Volunteer',
    commitment: '4-8 hours/week',
    skills: 'Teaching, Mentoring'
  },
  {
    id: 2,
    title: 'Healthcare Volunteer',
    description: 'Assist in medical camps and healthcare initiatives. Help patients, organize medical materials, and support healthcare professionals.',
    image: 'https://via.placeholder.com/300x200?text=Healthcare+Volunteer',
    commitment: '6-10 hours/week',
    skills: 'Medical knowledge helpful'
  },
  {
    id: 3,
    title: 'Community Outreach',
    description: 'Engage with communities, raise awareness about our programs, and mobilize support. Be the voice connecting communities to our mission.',
    image: 'https://via.placeholder.com/300x200?text=Community+Outreach',
    commitment: '5-8 hours/week',
    skills: 'Communication, Networking'
  },
  {
    id: 4,
    title: 'Environmental Volunteer',
    description: 'Join our tree plantation drives and environmental conservation efforts. Help create a green future for generations to come.',
    image: 'https://via.placeholder.com/300x200?text=Environment+Volunteer',
    commitment: 'Flexible schedule',
    skills: 'No specific skills needed'
  },
  {
    id: 5,
    title: 'Administrative Support',
    description: 'Help with data entry, event organization, fundraising coordination, and other administrative tasks that keep our organization running.',
    image: 'https://via.placeholder.com/300x200?text=Admin+Support',
    commitment: '3-6 hours/week',
    skills: 'Organization, Office Skills'
  },
  {
    id: 6,
    title: 'Content & Social Media',
    description: 'Create content, manage social media, write stories, and help document our impact through photography and videography.',
    image: 'https://via.placeholder.com/300x200?text=Content+Creation',
    commitment: '5-8 hours/week',
    skills: 'Writing, Photography, Social Media'
  }
]
</script>

<template>
  <div class="volunteer-page">
    <!-- Banner -->
    <div class="banner">
      <div class="banner-content">
        <h1>Become a Volunteer</h1>
        <p>Make a difference with your time and talents</p>
      </div>
    </div>

    <!-- Opportunities Grid -->
    <div class="container">
      <div class="intro-text">
        <h2>Volunteer Opportunities</h2>
        <p>We welcome volunteers from all backgrounds and skill levels. Find an opportunity that matches your interests and availability.</p>
      </div>

      <div class="opportunities-grid">
        <div v-for="opportunity in opportunities" :key="opportunity.id" class="opportunity-card">
          <div class="opportunity-image">
            <img :src="opportunity.image" :alt="opportunity.title">
          </div>
          <div class="opportunity-content">
            <h3>{{ opportunity.title }}</h3>
            <p class="description">{{ opportunity.description }}</p>
            <div class="details">
              <div class="detail-item">
                <strong>⏱️ Commitment:</strong> {{ opportunity.commitment }}
              </div>
              <div class="detail-item">
                <strong>💡 Skills:</strong> {{ opportunity.skills }}
              </div>
            </div>
            <button class="apply-btn">Apply Now</button>
            <RouterLink :to="`/volunteer/${opportunity.id}`" class="learn-more-btn">Learn More →</RouterLink>
          </div>
        </div>
      </div>

      <!-- Why Volunteer -->
      <div class="benefits-section">
        <h2>Why Volunteer With Us?</h2>
        <div class="benefits-grid">
          <div class="benefit">
            <div class="benefit-icon">🌟</div>
            <h4>Make Real Impact</h4>
            <p>Your work directly helps those in need and creates meaningful change in communities.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🤝</div>
            <h4>Join a Community</h4>
            <p>Connect with like-minded individuals who share your passion for helping others.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">📚</div>
            <h4>Learn & Grow</h4>
            <p>Develop new skills, gain experience, and grow personally and professionally.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🏆</div>
            <h4>Be Recognized</h4>
            <p>Receive certificates and recognition for your valuable contributions.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">⚡</div>
            <h4>Flexible Schedule</h4>
            <p>Choose opportunities that fit your schedule and commitments.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">💚</div>
            <h4>Personal Fulfillment</h4>
            <p>Experience the joy and satisfaction of making a difference in people's lives.</p>
          </div>
        </div>
      </div>

      <!-- Volunteer Process -->
      <div class="process-section">
        <h2>How to Get Started</h2>
        <div class="steps">
          <div class="process-step">
            <div class="step-circle">1</div>
            <h4>Register</h4>
            <p>Create your volunteer profile and tell us about yourself</p>
          </div>
          <div class="process-step">
            <div class="step-circle">2</div>
            <h4>Orientation</h4>
            <p>Attend a brief orientation to understand our mission and expectations</p>
          </div>
          <div class="process-step">
            <div class="step-circle">3</div>
            <h4>Get Assigned</h4>
            <p>Be matched with a suitable volunteer opportunity</p>
          </div>
          <div class="process-step">
            <div class="step-circle">4</div>
            <h4>Start Helping</h4>
            <p>Begin your volunteer journey and make a difference</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.volunteer-page {
  width: 100%;
}

.banner {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
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

.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.opportunity-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.opportunity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.opportunity-image {
  height: 180px;
  overflow: hidden;
}

.opportunity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.opportunity-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.opportunity-content h3 {
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 0.95rem;
}

.details {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-item {
  font-size: 0.9rem;
  color: #555;
}

.apply-btn {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
}

.apply-btn:hover {
  opacity: 0.9;
}

.learn-more-btn {
  display: inline-block;
  background: #11998e;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 10px;
}

.learn-more-btn:hover {
  background: #0d7a6f;
  transform: translateX(3px);
}

.benefits-section {
  margin: 60px 0;
  text-align: center;
}

.benefits-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.benefit {
  background: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.benefit:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.benefit h4 {
  font-size: 1.2rem;
  color: #333;
  margin: 15px 0 10px 0;
}

.benefit p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.process-section {
  margin-top: 60px;
  text-align: center;
}

.process-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.process-step {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.step-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.process-step h4 {
  font-size: 1.2rem;
  color: #333;
  margin: 15px 0 10px 0;
}

.process-step p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2rem;
  }

  .opportunities-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
