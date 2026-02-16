<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface HelpDetail {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  icon: string
  whoCanApply: string[]
  documentNeeded: string[]
  processSteps: string[]
  images: string[]
  benefits: string[]
  timeline: string
  contactInfo: { department: string; phone: string; email: string }
  faqs: { question: string; answer: string }[]
}

const helpData: HelpDetail[] = [
  {
    id: 1,
    title: 'Emergency Assistance',
    description: 'Immediate financial and material support for sudden crises',
    fullDescription: 'We provide emergency assistance to individuals and families facing sudden crises. This includes immediate financial support, essential supplies, and coordination with other services.',
    image: 'https://via.placeholder.com/800x400?text=Emergency+Help',
    icon: '🆘',
    whoCanApply: [
      'Individuals facing job loss',
      'Families affected by accidents',
      'People in health emergencies',
      'Those affected by natural disasters',
      'Elderly in vulnerable situations'
    ],
    documentNeeded: [
      'Valid ID proof',
      'Income certificate or proof of job loss',
      'Medical reports (if applicable)',
      'Proof of emergency (accident report, disaster certificate, etc.)',
      'Bank account details for transfer'
    ],
    processSteps: [
      'Contact our emergency hotline or office',
      'Provide emergency details and documentation',
      'Assessment by our team (24 hours)',
      'Approval and assistance disbursement (48 hours)',
      'Follow-up support for recovery'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Emergency+1',
      'https://via.placeholder.com/400x300?text=Emergency+2',
      'https://via.placeholder.com/400x300?text=Emergency+3'
    ],
    benefits: [
      'Quick approval within 24 hours',
      'Financial assistance up to $500',
      'Essential supplies provision',
      'Follow-up counseling',
      'Connection to long-term support'
    ],
    timeline: '48 hours average from application to assistance',
    contactInfo: {
      department: 'Emergency Relief Team',
      phone: '+1 (267) 385-0667',
      email: 'emergency@hisgracefoundation.org'
    },
    faqs: [
      {
        question: 'How much emergency assistance can I receive?',
        answer: 'Emergency assistance ranges from $100 to $500 based on your situation and needs.'
      },
      {
        question: 'What if my situation is not on the list?',
        answer: 'Contact us with your specific situation. We assess each case individually.'
      },
      {
        question: 'Is there a waiting period?',
        answer: 'No. In true emergencies, assistance can be provided within 24 hours.'
      }
    ]
  },
  {
    id: 2,
    title: 'Food Security Program',
    description: 'Regular food distribution and meal support to families',
    fullDescription: 'Our food security program ensures that no family goes hungry. We provide regular food distributions, nutritious meals, and nutrition education to vulnerable families.',
    image: 'https://via.placeholder.com/800x400?text=Food+Security',
    icon: '🍲',
    whoCanApply: [
      'Families living below poverty line',
      'Single mothers with dependent children',
      'Elderly living alone with no income',
      'Families with disabled members',
      'Internally displaced persons'
    ],
    documentNeeded: [
      'Identity proof',
      'Income certificate',
      'Household composition letter',
      'Proof of address',
      'Bank account for ration card registration'
    ],
    processSteps: [
      'Register at nearest food center',
      'Provide required documents',
      'Verification visit by our team',
      'Approval and ration card issuance',
      'Monthly food collection'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Food+1',
      'https://via.placeholder.com/400x300?text=Food+2',
      'https://via.placeholder.com/400x300?text=Food+3'
    ],
    benefits: [
      'Monthly food rations for entire family',
      'Nutritious meal plans',
      'Cooking and nutrition workshops',
      'Special diets for elderly and children',
      'Free delivery for disabled members'
    ],
    timeline: 'Registration to first distribution: 7-10 days',
    contactInfo: {
      department: 'Food Security Team',
      phone: '+1 (267) 385-0667',
      email: 'food@hisgracefoundation.org'
    },
    faqs: [
      {
        question: 'What food items are included?',
        answer: 'Grains, pulses, oil, salt, and seasonal vegetables. Monthly menus are nutrition-planned.'
      },
      {
        question: 'Can I choose my rations?',
        answer: 'Rations are based on family size and nutritional needs, but preferences are noted.'
      },
      {
        question: 'Is there a limit to how long I can receive help?',
        answer: 'No fixed limit. Assistance continues as long as you meet eligibility criteria.'
      }
    ]
  },
  {
    id: 3,
    title: 'Shelter & Housing',
    description: 'Providing safe housing and shelter to homeless',
    fullDescription: 'We provide safe shelter and transitional housing to homeless and at-risk populations. Our programs include shelter, rehabilitation, and support towards independent living.',
    image: 'https://via.placeholder.com/800x400?text=Housing+Help',
    icon: '🏠',
    whoCanApply: [
      'Homeless individuals and families',
      'Domestic violence survivors',
      'Evicted families with no shelter',
      'Disaster-affected without homes',
      'Elderly needing care and shelter'
    ],
    documentNeeded: [
      'Identity proof (if available)',
      'Proof of homelessness (police report or NGO letter)',
      'Medical records (if applicable)',
      'Family documentation',
      'Income proof (if any)'
    ],
    processSteps: [
      'Contact our shelter hotline',
      'Intake assessment and needs evaluation',
      'Shelter placement (immediate if possible)',
      'Case management and support planning',
      'Transition to independent living preparation'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Shelter+1',
      'https://via.placeholder.com/400x300?text=Shelter+2',
      'https://via.placeholder.com/400x300?text=Shelter+3'
    ],
    benefits: [
      'Safe, secure shelter with basic facilities',
      'Three nutritious meals daily',
      'Medical and counseling support',
      'Skills training for employment',
      'Help with documentation and legal issues'
    ],
    timeline: 'Immediate shelter available. Rehabilitation: 6-12 months',
    contactInfo: {
      department: 'Housing Support Team',
      phone: '+1 (267) 385-0667',
      email: 'housing@hisgraceformation.org'
    },
    faqs: [
      {
        question: 'How long can I stay in shelter?',
        answer: 'Temporary: 1-3 months. Long-term programs available for those transitioning to independent living.'
      },
      {
        question: 'Are families kept together?',
        answer: 'Yes. We prioritize keeping families together. Separate facilities for safety are only in special cases.'
      },
      {
        question: 'What happens after shelter?',
        answer: 'We provide job training, documentation help, and support for independent housing.'
      }
    ]
  },
  {
    id: 4,
    title: 'Medical Assistance',
    description: 'Supporting individuals who cannot afford treatments',
    fullDescription: 'We support individuals and families who cannot afford essential medical treatments. This includes surgery costs, medication, and ongoing healthcare support.',
    image: 'https://via.placeholder.com/800x400?text=Medical+Aid',
    icon: '⚕️',
    whoCanApply: [
      'Below poverty line individuals needing surgery',
      'Patients with chronic diseases needing medication',
      'Accident victims needing emergency care',
      'Elderly needing specialized treatment',
      'Children needing critical medical interventions'
    ],
    documentNeeded: [
      'Medical prescription from registered doctor',
      'Hospital estimate/bill',
      'Identity proof',
      'Income certificate',
      'Medical reports and test results',
      'Bank account for disbursement'
    ],
    processSteps: [
      'Consult our medical coordinator',
      'Submit medical and financial documents',
      'Verification of medical need and finances',
      'Hospital/clinic coordination',
      'Direct payment to hospital',
      'Follow-up on recovery'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Medical+1',
      'https://via.placeholder.com/400x300?text=Medical+2',
      'https://via.placeholder.com/400x300?text=Medical+3'
    ],
    benefits: [
      'Complete or partial surgery cost coverage',
      'Essential medication support up to $200/month',
      'Medical test cost assistance',
      'Post-treatment rehabilitation support',
      'Counseling and follow-up care'
    ],
    timeline: 'Assessment: 3-5 days. Approval and payment: 7-10 days',
    contactInfo: {
      department: 'Medical Assistance Team',
      phone: '+1 (267) 385-0667',
      email: 'medical@hisgraceformation.org'
    },
    faqs: [
      {
        question: 'What types of medical costs do you cover?',
        answer: 'Surgeries, medications, diagnostic tests, and essential treatments. Cancer and rare disease treatments given priority.'
      },
      {
        question: 'Is there a maximum amount?',
        answer: 'No fixed maximum. Each case is assessed individually based on documentation.'
      },
      {
        question: 'How is payment made?',
        answer: 'We pay hospitals and clinics directly. No cash to patients to ensure funds are used for medical care.'
      }
    ]
  },
  {
    id: 5,
    title: 'Educational Support',
    description: 'Scholarship and educational materials for students',
    fullDescription: 'We provide educational support to underprivileged students ensuring no child is left out of school due to financial constraints. Programs include scholarships and school supplies.',
    image: 'https://via.placeholder.com/800x400?text=Education+Support',
    icon: '📚',
    whoCanApply: [
      'Students from below-poverty households',
      'Orphans and semi-orphans',
      'Girl children from marginalized communities',
      'Children with disabilities',
      'First-generation learners'
    ],
    documentNeeded: [
      'School enrollment certificate',
      'Income certificate of parents/guardians',
      'Marks/progress card',
      'Identity proof',
      'Family documentation',
      'Bank account details'
    ],
    processSteps: [
      'Apply at school with teacher recommendation',
      'Submit documents to nearest office',
      'Merit and need-based assessment',
      'Approval and scholarship disbursement',
      'Annual review and continuation'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Education+1',
      'https://via.placeholder.com/400x300?text=Education+2',
      'https://via.placeholder.com/400x300?text=Education+3'
    ],
    benefits: [
      'School fee coverage (partial or full)',
      'Educational materials (books, notebooks, pens)',
      'Uniform and shoes provision',
      'Nutrition support during school hours',
      'Mentorship and tutoring'
    ],
    timeline: 'Application to approval: 15 days. Valid for academic year',
    contactInfo: {
      department: 'Education Support Team',
      phone: '+1 (267) 385-0667',
      email: 'education@hisgraceformation.org'
    },
    faqs: [
      {
        question: 'What is the scholarship amount?',
        answer: 'Scholarships range from $50-200/month depending on student need and academic performance.'
      },
      {
        question: 'Is scholarship continued every year?',
        answer: 'Yes, if student continues schooling and maintains eligibility. Annual review required.'
      },
      {
        question: 'Can I get help with higher education?',
        answer: 'Yes. Special programs for college students. Vocational and skill training scholarships available too.'
      }
    ]
  },
  {
    id: 6,
    title: 'Elderly Care',
    description: 'Support services for senior citizens including healthcare',
    fullDescription: 'Our elderly care program provides holistic support including healthcare, nutrition, companionship, and assistance with daily activities for vulnerable senior citizens.',
    image: 'https://via.placeholder.com/800x400?text=Elderly+Care',
    icon: '👴',
    whoCanApply: [
      'Senior citizens (60+ years) below poverty line',
      'Widows/widowers living alone',
      'Elderly with chronic diseases',
      'Senior citizens without family support',
      'Abandoned elderly persons'
    ],
    documentNeeded: [
      'Age proof (birth certificate/ID)',
      'Income proof',
      'Medical reports of health conditions',
      'Proof of address',
      'Family documentation'
    ],
    processSteps: [
      'Contact our elderly care team',
      'Health assessment and needs evaluation',
      'Development of personalized care plan',
      'Monthly support delivery and visits',
      'Regular health monitoring and adjustments'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Elderly+1',
      'https://via.placeholder.com/400x300?text=Elderly+2',
      'https://via.placeholder.com/400x300?text=Elderly+3'
    ],
    benefits: [
      'Monthly nutritious food rations',
      'Healthcare checkups and medicine support',
      'Companionship visits twice monthly',
      'Assistance with daily activities',
      'Communication with family members',
      'Emergency support hotline'
    ],
    timeline: 'Registration to support: 3-5 days',
    contactInfo: {
      department: 'Elderly Care Team',
      phone: '+1 (267) 385-0667',
      email: 'elderly@hisgraceformation.org'
    },
    faqs: [
      {
        question: 'What is the age requirement?',
        answer: 'Generally 60 years and above. Special consideration for 55+ in vulnerable situations.'
      },
      {
        question: 'How often do volunteers visit?',
        answer: 'Minimum twice per month. Additional visits for those needing intensive care.'
      },
      {
        question: 'Is facility care available?',
        answer: 'Yes. For those without home support, we have care facilities. Preference for home-based care.'
      }
    ]
  }
]

const currentHelp = computed(() => {
  const id = parseInt(route.params.id as string)
  return helpData.find(h => h.id === id)
})

const goBack = () => {
  router.push('/help')
}
</script>

<template>
  <div v-if="currentHelp" class="help-detail">
    <!-- Back Button -->
    <div class="back-button-container">
      <button @click="goBack" class="back-btn">← Back to Help</button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img :src="currentHelp.image" :alt="currentHelp.title" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-icon">{{ currentHelp.icon }}</div>
        <h1>{{ currentHelp.title }}</h1>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <!-- Description -->
      <div class="description-box">
        <p>{{ currentHelp.fullDescription }}</p>
      </div>

      <!-- Timeline Badge -->
      <div class="timeline-badge">
        <span>⏱️ {{ currentHelp.timeline }}</span>
      </div>

      <!-- Who Can Apply -->
      <section class="section">
        <h2>Who Can Apply?</h2>
        <ul class="eligibility-list">
          <li v-for="item in currentHelp.whoCanApply" :key="item">{{ item }}</li>
        </ul>
      </section>

      <!-- Benefits -->
      <section class="section">
        <h2>What We Provide</h2>
        <div class="benefits-grid">
          <div v-for="(benefit, index) in currentHelp.benefits" :key="index" class="benefit-card">
            <div class="benefit-icon">💚</div>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="section">
        <h2>How to Apply</h2>
        <div class="process-timeline">
          <div v-for="(step, index) in currentHelp.processSteps" :key="index" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <p>{{ step }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Documents Needed -->
      <section class="section">
        <h2>Documents Required</h2>
        <div class="documents-list">
          <div v-for="doc in currentHelp.documentNeeded" :key="doc" class="document-item">
            <span class="doc-icon">📋</span>
            <span>{{ doc }}</span>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section">
        <h2>Program in Action</h2>
        <div class="gallery">
          <div v-for="(image, index) in currentHelp.images" :key="index" class="gallery-item">
            <img :src="image" :alt="`Program ${index + 1}`">
          </div>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="section contact-section">
        <h2>Get in Touch</h2>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-label">Department</div>
            <div class="contact-value">{{ currentHelp.contactInfo.department }}</div>
          </div>
          <div class="contact-card">
            <div class="contact-label">Phone</div>
            <div class="contact-value">
              <a :href="`tel:${currentHelp.contactInfo.phone}`">{{ currentHelp.contactInfo.phone }}</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-label">Email</div>
            <div class="contact-value">
              <a :href="`mailto:${currentHelp.contactInfo.email}`">{{ currentHelp.contactInfo.email }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section">
        <h2>Frequently Asked Questions</h2>
        <div class="faqs">
          <div v-for="faq in currentHelp.faqs" :key="faq.question" class="faq-item">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section cta-section">
        <h2>Need Help? Apply Today</h2>
        <p>Don't suffer in silence. We're here to help.</p>
        <button class="apply-btn">📝 Start Application</button>
      </section>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Help Program Not Found</h2>
    <button @click="goBack" class="back-btn">← Back to Help</button>
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
  background: #4facfe;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-left: 20px;
  transition: all 0.3s;
}

.back-btn:hover {
  background: #357ad8;
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
  padding: 40px;
  text-align: center;
}

.hero-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-overlay h1 {
  margin: 0;
  font-size: 2.5rem;
}

.description-box {
  background: #f0f7ff;
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #4facfe;
  margin-bottom: 30px;
}

.description-box p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.timeline-badge {
  display: inline-block;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  margin-bottom: 50px;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 3px solid #4facfe;
  padding-bottom: 10px;
}

.eligibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.eligibility-list li {
  padding: 15px 20px;
  margin-bottom: 12px;
  background: white;
  border-left: 4px solid #4facfe;
  border-radius: 5px;
  color: #555;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.eligibility-list li:before {
  content: '✓ ';
  color: #4facfe;
  font-weight: bold;
  margin-right: 10px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.benefit-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #4facfe;
  text-align: center;
}

.benefit-icon {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

.benefit-card p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.process-timeline {
  position: relative;
  padding: 20px 0;
}

.process-step {
  display: flex;
  gap: 25px;
  margin-bottom: 30px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 24px;
  top: 50px;
  width: 2px;
  height: 50px;
  background: #4facfe;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content {
  padding-top: 5px;
  flex-grow: 1;
}

.step-content p {
  margin: 0;
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
}

.documents-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
}

.document-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  align-items: center;
  color: #555;
}

.doc-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.contact-section h2 {
  border-color: #4facfe;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.contact-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #4facfe;
}

.contact-label {
  font-size: 0.9rem;
  color: #4facfe;
  font-weight: 600;
  margin-bottom: 10px;
}

.contact-value {
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
}

.contact-value a {
  color: #4facfe;
  text-decoration: none;
}

.contact-value a:hover {
  text-decoration: underline;
}

.faqs {
  display: grid;
  gap: 20px;
}

.faq-item {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.faq-item h4 {
  margin: 0 0 10px 0;
  color: #4facfe;
  font-size: 1.05rem;
}

.faq-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  text-align: center;
  padding: 50px 30px;
  border-radius: 15px;
}

.cta-section h2 {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.apply-btn {
  background: white;
  color: #4facfe;
  border: none;
  padding: 15px 40px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}

.not-found h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 1.8rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  .process-step {
    gap: 15px;
  }
}
</style>
