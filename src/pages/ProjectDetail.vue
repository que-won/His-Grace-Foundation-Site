<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface ProjectDetail {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  category: string
  impact: string
  status: string
  startDate: string
  location: string
  budget: string
  targetBeneficiaries: string
  highlights: string[]
  images: string[]
  objectives: string[]
  activities: string[]
  results: { label: string; value: string }[]
  partners: string[]
  newsletter: boolean
}

const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: 'Community School Building',
    description: 'Building a new school facility in rural areas to provide quality education for underprivileged children.',
    fullDescription: 'A comprehensive educational initiative aimed at establishing a state-of-the-art school facility in underserved rural communities. This project focuses on creating a safe, equipped, and inclusive learning environment.',
    image: 'https://via.placeholder.com/800x400?text=School+Building+Main',
    category: 'Education',
    impact: 'Benefiting 500+ students',
    status: 'Ongoing',
    startDate: 'January 2024',
    location: 'Rural Areas, North Region',
    budget: '$250,000',
    targetBeneficiaries: '500+ students, 50+ staff members',
    highlights: [
      'Construction of 20 classrooms with modern infrastructure',
      'Digital learning center with computers and internet connectivity',
      'Well-equipped library with 5,000+ books',
      'Sports and recreation facilities',
      'Safe drinking water and sanitation facilities'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=School+Building+1',
      'https://via.placeholder.com/400x300?text=School+Building+2',
      'https://via.placeholder.com/400x300?text=School+Building+3',
      'https://via.placeholder.com/400x300?text=School+Building+4'
    ],
    objectives: [
      'Provide accessible quality education to 500+ children',
      'Create 50 employment opportunities for teachers and staff',
      'Establish a center for community development',
      'Reduce educational inequality in rural areas',
      'Promote digital literacy among students'
    ],
    activities: [
      'Site evaluation and planning (Month 1-2)',
      'Infrastructure development (Month 3-8)',
      'Facility setup and equipment installation (Month 9-10)',
      'Staff recruitment and training (Month 9-10)',
      'Student enrollment and program launch (Month 11)'
    ],
    results: [
      { label: 'Students Admitted', value: '450+' },
      { label: 'Teachers Employed', value: '35' },
      { label: 'Infrastructure Completed', value: '95%' },
      { label: 'Community Engagement', value: 'High' }
    ],
    partners: ['Ministry of Education', 'Local Government', 'Community Leaders', 'Education NGOs'],
    newsletter: false
  },
  {
    id: 2,
    title: 'Clean Water Initiative',
    description: 'Providing clean drinking water to communities without access. Installing water purification systems.',
    fullDescription: 'A vital health and sanitation project dedicated to ensuring safe drinking water access for underserved populations. The initiative includes system installation, maintenance, and community education.',
    image: 'https://via.placeholder.com/800x400?text=Clean+Water+Main',
    category: 'Health',
    impact: '10,000+ people helped',
    status: 'Ongoing',
    startDate: 'March 2024',
    location: '15 Villages, Central Region',
    budget: '$180,000',
    targetBeneficiaries: '10,000+ people across 15 communities',
    highlights: [
      'Installation of 15 water purification plants',
      'Distribution of 500 household water filters',
      'Training for 45 community water managers',
      'Water quality testing labs in each village',
      'Rainwater harvesting systems'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Water+Initiative+1',
      'https://via.placeholder.com/400x300?text=Water+Initiative+2',
      'https://via.placeholder.com/400x300?text=Water+Initiative+3',
      'https://via.placeholder.com/400x300?text=Water+Initiative+4'
    ],
    objectives: [
      'Provide safe drinking water to 10,000+ people',
      'Reduce waterborne diseases by 80%',
      'Create sustainable water management systems',
      'Empower communities with water conservation knowledge',
      'Ensure long-term maintenance through local capacity building'
    ],
    activities: [
      'Community assessments and water testing (Month 1)',
      'Technology selection and procurement (Month 2)',
      'Infrastructure installation (Month 3-5)',
      'Staff and community training (Month 5-6)',
      'Monitoring and support systems setup (Month 7)'
    ],
    results: [
      { label: 'Communities Served', value: '15' },
      { label: 'People with Safe Water', value: '10,000+' },
      { label: 'Plants Installed', value: '15' },
      { label: 'Disease Reduction', value: 'In Progress' }
    ],
    partners: ['Water Supply Board', 'Health Department', 'Environmental NGOs'],
    newsletter: false
  },
  {
    id: 3,
    title: 'Healthcare Camps',
    description: 'Mobile healthcare units visiting remote villages for free medical checkups and vaccinations.',
    fullDescription: 'A preventive and curative healthcare initiative utilizing mobile medical units to reach remote populations. Providing free healthcare services, vaccinations, and health awareness.',
    image: 'https://via.placeholder.com/800x400?text=Healthcare+Main',
    category: 'Health',
    impact: 'Monthly medical camps',
    status: 'Active',
    startDate: 'June 2024',
    location: '25 Remote Villages, Multiple Regions',
    budget: '$120,000',
    targetBeneficiaries: '5,000+ people monthly',
    highlights: [
      'Mobile clinics visiting 25 villages monthly',
      'Free medical consultations by qualified doctors',
      'Vaccination drives and immunization programs',
      'Health awareness workshops in communities',
      'Distribution of basic medicines'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Healthcare+1',
      'https://via.placeholder.com/400x300?text=Healthcare+2',
      'https://via.placeholder.com/400x300?text=Healthcare+3',
      'https://via.placeholder.com/400x300?text=Healthcare+4'
    ],
    objectives: [
      'Provide accessible healthcare to 5,000+ people monthly',
      'Increase vaccination coverage in remote areas',
      'Conduct health awareness campaigns',
      'Create referral networks for critical cases',
      'Maintain health records for continuous care'
    ],
    activities: [
      'Mobile clinic setup and scheduling (Ongoing)',
      'Doctor and nurse deployment (Monthly)',
      'Vaccination drives (Bi-weekly)',
      'Health awareness sessions (Weekly)',
      'Follow-up and patient support (Continuous)'
    ],
    results: [
      { label: 'People Served Monthly', value: '5,000+' },
      { label: 'Consultations Provided', value: '15,000+' },
      { label: 'Vaccinations Done', value: '10,000+' },
      { label: 'Villages Covered', value: '25' }
    ],
    partners: ['Health Ministry', 'Medical Colleges', 'ASHA Workers', 'Village Councils'],
    newsletter: false
  },
  {
    id: 4,
    title: 'Environmental Reforestation',
    description: 'Planting native trees and creating green spaces to combat deforestation.',
    fullDescription: 'An environmental conservation project focused on reforestation, biodiversity restoration, and climate change mitigation through systematic tree planting and ecosystem management.',
    image: 'https://via.placeholder.com/800x400?text=Reforestation+Main',
    category: 'Environment',
    impact: '50,000+ trees planted',
    status: 'Ongoing',
    startDate: 'May 2024',
    location: '5 Districts, Forest Areas',
    budget: '$95,000',
    targetBeneficiaries: 'Entire ecosystem and 100,000+ community members',
    highlights: [
      'Planting of 50,000 native trees in first phase',
      'Creation of 200 acres of green forest',
      'Establishment of seed production centers',
      'Community participation in tree planting',
      'Regular monitoring and maintenance programs'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Reforestation+1',
      'https://via.placeholder.com/400x300?text=Reforestation+2',
      'https://via.placeholder.com/400x300?text=Reforestation+3',
      'https://via.placeholder.com/400x300?text=Reforestation+4'
    ],
    objectives: [
      'Restore 200 acres of forest area',
      'Plant 50,000 native trees',
      'Improve air quality and reduce carbon footprint',
      'Protect biodiversity and wildlife habitats',
      'Create employment for 200+ community members'
    ],
    activities: [
      'Site selection and soil testing (Month 1)',
      'Seed collection and nursery setup (Month 1-2)',
      'Community training and awareness (Month 2)',
      'Large-scale tree planting drives (Month 3-8)',
      'Maintenance and monitoring (Ongoing)'
    ],
    results: [
      { label: 'Trees Planted', value: '50,000+' },
      { label: 'Forest Area Restored', value: '200 acres' },
      { label: 'Community Participation', value: '5,000+' },
      { label: 'Survival Rate', value: '92%' }
    ],
    partners: ['Forest Department', 'Environmental Ministry', 'Wildlife NGOs', 'Local Communities'],
    newsletter: false
  },
  {
    id: 5,
    title: 'Skill Development Program',
    description: 'Teaching vocational skills to youth to enable them to earn sustainable livelihoods.',
    fullDescription: 'A comprehensive vocational training initiative designed to equip disadvantaged youth with market-relevant skills for economic independence and sustainable employment.',
    image: 'https://via.placeholder.com/800x400?text=Skills+Training+Main',
    category: 'Employment',
    impact: 'Training 200+ youth annually',
    status: 'Active',
    startDate: 'April 2024',
    location: '10 Training Centers Across Regions',
    budget: '$160,000',
    targetBeneficiaries: '200 youth annually',
    highlights: [
      'Training in 10 different vocational skills',
      'Industry partnership and internships',
      'Placement assistance with 85% success rate',
      'Life skills and entrepreneurship training',
      'Tools and certificate provision'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Skills+Training+1',
      'https://via.placeholder.com/400x300?text=Skills+Training+2',
      'https://via.placeholder.com/400x300?text=Skills+Training+3',
      'https://via.placeholder.com/400x300?text=Skills+Training+4'
    ],
    objectives: [
      'Train 200 youth in vocational skills annually',
      'Achieve 85% job placement rate',
      'Increase average income by 300%',
      'Empower youth economically and socially',
      'Create entrepreneurs and small business owners'
    ],
    activities: [
      'Identification and enrollment of youth (Month 1)',
      'Vocational skills training (Month 2-5)',
      'Internship and practical exposure (Month 6)',
      'Job placement support (Month 7-8)',
      'Follow-up and entrepreneurship support (Ongoing)'
    ],
    results: [
      { label: 'Youth Trained', value: '150+' },
      { label: 'Placement Rate', value: '85%' },
      { label: 'Average Income Increase', value: '300%' },
      { label: 'Self-Employed', value: '25+' }
    ],
    partners: ['Industry Associations', 'Employers', 'Skill Development Board', 'Youth Groups'],
    newsletter: false
  },
  {
    id: 6,
    title: 'Disaster Relief Operations',
    description: 'Quick response to natural disasters with emergency aid, food, shelter, and medical support.',
    fullDescription: 'An emergency response initiative focused on rapid deployment of relief resources during natural disasters. Providing immediate aid, shelter, food, and medical support to affected communities.',
    image: 'https://via.placeholder.com/800x400?text=Disaster+Relief+Main',
    category: 'Emergency',
    impact: 'Helping in times of crisis',
    status: 'Always Ready',
    startDate: 'Ongoing Since 2020',
    location: 'Pan-Region Emergency Response',
    budget: '$200,000 (Emergency Fund)',
    targetBeneficiaries: 'Disaster-affected communities (varies)',
    highlights: [
      '24/7 emergency response team',
      'Pre-positioned relief supplies',
      'Mobile medical teams',
      'Temporary shelter establishment',
      'Coordination with government agencies'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Disaster+Relief+1',
      'https://via.placeholder.com/400x300?text=Disaster+Relief+2',
      'https://via.placeholder.com/400x300?text=Disaster+Relief+3',
      'https://via.placeholder.com/400x300?text=Disaster+Relief+4'
    ],
    objectives: [
      'Provide immediate relief within 24 hours of disaster',
      'Ensure food and water for affected populations',
      'Provide emergency medical care',
      'Establish temporary shelter facilities',
      'Support long-term recovery programs'
    ],
    activities: [
      'Disaster assessment and damage evaluation',
      'Emergency aid distribution (24-48 hours)',
      'Medical camp setup and healthcare delivery',
      'Temporary shelter construction',
      'Long-term rehabilitation support'
    ],
    results: [
      { label: 'Disasters Responded', value: '15+' },
      { label: 'People Assisted', value: '50,000+' },
      { label: 'Response Time', value: '< 24 hours' },
      { label: 'Coverage Area', value: '10 Districts' }
    ],
    partners: ['Government Agencies', 'Other NGOs', 'Red Crescent', 'Community Leaders'],
    newsletter: false
  }
]

const currentProject = computed(() => {
  const id = parseInt(route.params.id as string)
  return projectsData.find(p => p.id === id)
})

const goBack = () => {
  router.push('/projects')
}
</script>

<template>
  <div v-if="currentProject" class="project-detail">
    <!-- Back Button -->
    <div class="back-button-container">
      <button @click="goBack" class="back-btn">← Back to Projects</button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img :src="currentProject.image" :alt="currentProject.title" class="hero-image">
      <div class="hero-overlay">
        <h1>{{ currentProject.title }}</h1>
        <p class="tagline">{{ currentProject.description }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <!-- Key Information Cards -->
      <div class="info-cards">
        <div class="info-card">
          <h4>📍 Location</h4>
          <p>{{ currentProject.location }}</p>
        </div>
        <div class="info-card">
          <h4>📅 Started</h4>
          <p>{{ currentProject.startDate }}</p>
        </div>
        <div class="info-card">
          <h4>💰 Budget</h4>
          <p>{{ currentProject.budget }}</p>
        </div>
        <div class="info-card">
          <h4>👥 Beneficiaries</h4>
          <p>{{ currentProject.targetBeneficiaries }}</p>
        </div>
        <div class="info-card">
          <h4>🏷️ Category</h4>
          <p>{{ currentProject.category }}</p>
        </div>
        <div class="info-card">
          <h4>✅ Status</h4>
          <p class="status">{{ currentProject.status }}</p>
        </div>
      </div>

      <!-- Detailed Description -->
      <section class="section">
        <h2>Project Overview</h2>
        <p class="full-description">{{ currentProject.fullDescription }}</p>
      </section>

      <!-- Objectives -->
      <section class="section">
        <h2>Project Objectives</h2>
        <ul class="objectives-list">
          <li v-for="(objective, index) in currentProject.objectives" :key="index">
            {{ objective }}
          </li>
        </ul>
      </section>

      <!-- Highlights -->
      <section class="section">
        <h2>Key Highlights</h2>
        <ul class="highlights-list">
          <li v-for="(highlight, index) in currentProject.highlights" :key="index">
            {{ highlight }}
          </li>
        </ul>
      </section>

      <!-- Activity Timeline -->
      <section class="section">
        <h2>Project Timeline & Activities</h2>
        <div class="timeline">
          <div v-for="(activity, index) in currentProject.activities" :key="index" class="timeline-item">
            <div class="timeline-marker">{{ index + 1 }}</div>
            <div class="timeline-content">
              {{ activity }}
            </div>
          </div>
        </div>
      </section>

      <!-- Results & Impact -->
      <section class="section">
        <h2>Results & Impact</h2>
        <div class="results-grid">
          <div v-for="result in currentProject.results" :key="result.label" class="result-card">
            <div class="result-value">{{ result.value }}</div>
            <div class="result-label">{{ result.label }}</div>
          </div>
        </div>
      </section>

      <!-- Project Images Gallery -->
      <section class="section">
        <h2>Project Gallery</h2>
        <div class="gallery">
          <div v-for="(image, index) in currentProject.images" :key="index" class="gallery-item">
            <img :src="image" :alt="`Project Image ${index + 1}`">
          </div>
        </div>
      </section>

      <!-- Partners -->
      <section class="section">
        <h2>Partners & Collaborators</h2>
        <div class="partners-list">
          <div v-for="partner in currentProject.partners" :key="partner" class="partner-badge">
            {{ partner }}
          </div>
        </div>
      </section>

      <!-- Newsletter & Support -->
      <section class="section support-section">
        <h2>Support This Project</h2>
        <div class="support-content">
          <p>Help us achieve our mission. Your contribution can make a real difference.</p>
          <div class="support-buttons">
            <button class="donate-btn">💚 Donate Now</button>
            <button class="volunteer-btn">🤝 Become a Volunteer</button>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Project Not Found</h2>
    <p>The project you're looking for doesn't exist.</p>
    <button @click="goBack" class="back-btn">← Back to Projects</button>
  </div>
</template>

<style scoped>
.back-button-container {
  background: white;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 70px;
  z-index: 100;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
}

.back-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  margin-left: 20px;
}

.back-btn:hover {
  background: #5568d3;
  transform: translateX(-3px);
}

.hero-section {
  position: relative;
  height: 400px;
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: -60px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;
  padding: 40px 40px 30px;
}

.hero-overlay h1 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

.tagline {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.95;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.info-card h4 {
  margin: 0 0 10px 0;
  color: #667eea;
  font-size: 0.95rem;
}

.info-card p {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.info-card .status {
  color: #38ef7d;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

.full-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.objectives-list,
.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.objectives-list li,
.highlights-list li {
  padding: 15px 20px;
  margin-bottom: 12px;
  background: #f9f9f9;
  border-left: 4px solid #667eea;
  border-radius: 5px;
  color: #555;
  line-height: 1.6;
}

.objectives-list li:before {
  content: '✓ ';
  color: #667eea;
  font-weight: bold;
  margin-right: 10px;
}

.highlights-list li:before {
  content: '⭐ ';
  margin-right: 10px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding-left: 60px;
  position: relative;
}

.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 40px;
  width: 2px;
  height: 40px;
  background: #667eea;
}

.timeline-marker {
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.timeline-content {
  padding-top: 10px;
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.result-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s;
}

.result-card:hover {
  transform: translateY(-5px);
}

.result-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.result-label {
  font-size: 1rem;
  opacity: 0.95;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.partners-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.partner-badge {
  background: white;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
}

.support-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
}

.support-section h2 {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.support-content p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  opacity: 0.95;
}

.support-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.donate-btn,
.volunteer-btn {
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.donate-btn {
  background: white;
  color: #667eea;
}

.donate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.volunteer-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.volunteer-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.not-found h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.not-found p {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 1.8rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .info-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .support-buttons {
    flex-direction: column;
  }

  .support-buttons button {
    width: 100%;
  }
}
</style>
