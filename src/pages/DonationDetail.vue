<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface DonationDetail {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  amount: string
  icon: string
  benefits: string[]
  howItWorks: string[]
  images: string[]
  eligibility: string[]
  taxBenefits: string
  successStories: { name: string; story: string; title: string }[]
  faqs: { question: string; answer: string }[]
}

const donationsData: DonationDetail[] = [
  {
    id: 1,
    title: 'Monthly Donations',
    description: 'Become a monthly donor and provide consistent support',
    fullDescription: 'Join our community of monthly supporters and make a lasting difference. Your regular contributions help us plan and execute long-term initiatives with confidence.',
    image: 'https://via.placeholder.com/800x400?text=Monthly+Giving',
    amount: 'Starting from $10/month',
    icon: '💳',
    benefits: [
      'Consistent impact on programs',
      'Automatic recurring donations',
      'Received monthly impact reports',
      'Priority to new initiatives',
      'Tax-deductible contributions',
      'Special donor recognition',
      'Access to donor-only events',
      'Cancel anytime'
    ],
    howItWorks: [
      'Choose your monthly donation amount',
      'Provide payment information',
      'Your card will be charged on the 1st of each month',
      'Receive monthly impact reports',
      'Update or cancel anytime'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Monthly+Donor+1',
      'https://via.placeholder.com/400x300?text=Monthly+Donor+2',
      'https://via.placeholder.com/400x300?text=Monthly+Donor+3'
    ],
    eligibility: [
      'Age 18 or older',
      'Valid payment method',
      'Preferred currency support'
    ],
    taxBenefits: '100% tax-deductible in most countries. Consult your tax advisor.',
    successStories: [
      {
        name: 'Sarah Johnson',
        title: 'Monthly Donor for 24 Months',
        story: 'My $25 monthly donation helps feed 10 children. Its amazing to know my impact is consistent every month!'
      },
      {
        name: 'Raj Patel',
        title: 'Corporate Monthly Donor',
        story: 'We donate $500 monthly from our company. This regular contribution has helped build a safe drinking water system.'
      }
    ],
    faqs: [
      {
        question: 'When will my donation be processed?',
        answer: 'Your donation is processed on the 1st of each month automatically.'
      },
      {
        question: 'Can I change my donation amount?',
        answer: 'Yes, you can update your amount anytime from your donor dashboard.'
      },
      {
        question: 'Is my donation secure?',
        answer: 'Absolutely. We use industry-standard encryption to protect all payment information.'
      },
      {
        question: 'How do I receive impact reports?',
        answer: 'Monthly impact reports are sent via email and available in your donor portal.'
      }
    ]
  },
  {
    id: 2,
    title: 'One-Time Donations',
    description: 'Make a one-time contribution towards a specific cause',
    fullDescription: 'Support a cause that matters to you with a single donation. Whether large or small, your contribution directly helps us achieve our mission right away.',
    image: 'https://via.placeholder.com/800x400?text=One-Time+Gift',
    amount: 'Any amount',
    icon: '🎁',
    benefits: [
      'No recurring commitment',
      'Immediate impact',
      'Flexible amount',
      'Choose your focus area',
      'Tax-deductible',
      'Instant donation confirmation',
      'Donation information saved',
      'Donate again anytime'
    ],
    howItWorks: [
      'Select your donation amount',
      'Choose a focus area (optional)',
      'Provide your contact information',
      'Complete secure payment',
      'Receive donation receipt immediately'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=One-Time+1',
      'https://via.placeholder.com/400x300?text=One-Time+2',
      'https://via.placeholder.com/400x300?text=One-Time+3'
    ],
    eligibility: [
      'Any age with payment method',
      'Valid payment information',
      'Email address for receipt'
    ],
    taxBenefits: '100% tax-deductible. Tax receipt provided immediately.',
    successStories: [
      {
        name: 'Emily Chen',
        title: 'First-time Donor',
        story: 'I donated $100 and loved the immediate impact report. Now I donate monthly!'
      },
      {
        name: 'Michael Adams',
        title: 'Emergency Relief Donor',
        story: 'During the disaster, my $500 donation helped provide immediate shelter for 20 families.'
      }
    ],
    faqs: [
      {
        question: 'What is the minimum donation?',
        answer: 'There is no minimum. Any amount helps us make a difference.'
      },
      {
        question: 'How quickly does my donation help?',
        answer: 'Most donations are deployed within 48 hours of receipt.'
      },
      {
        question: 'Can I see how my donation is used?',
        answer: 'Yes! You receive a detailed impact report showing exactly how your money helps.'
      }
    ]
  },
  {
    id: 3,
    title: 'Corporate Donations',
    description: 'Organizations can contribute to our cause while building CSR',
    fullDescription: 'Partner with us for meaningful corporate social responsibility. Build your brand while making a genuine difference in communities.',
    image: 'https://via.placeholder.com/800x400?text=Corporate+Giving',
    amount: 'Flexible amounts',
    icon: '🏢',
    benefits: [
      'Brand visibility and recognition',
      'Tax deductions for companies',
      'Employee engagement opportunities',
      'CSR reporting support',
      'Media coverage and publicity',
      'Customized partnership programs',
      'Employee volunteer opportunities',
      'Annual recognition events'
    ],
    howItWorks: [
      'Contact our corporate partnerships team',
      'Discuss organizational goals and budget',
      'Design a customized partnership plan',
      'Formalize partnership agreement',
      'Execute donation and programs',
      'Receive recognition and reporting'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Corporate+Partner+1',
      'https://via.placeholder.com/400x300?text=Corporate+Partner+2',
      'https://via.placeholder.com/400x300?text=Corporate+Partner+3'
    ],
    eligibility: [
      'Registered business entity',
      'Verified business information',
      'tax compliance'
    ],
    taxBenefits: 'Full tax deduction for corporate donations. Corporate tax exemption documentation provided.',
    successStories: [
      {
        name: 'Tech Corp Inc.',
        title: 'Annual Partner',
        story: 'Our $50,000 annual partnership supports skill development for 200+ youth yearly. Great CSR impact!'
      },
      {
        name: 'Global Business Solutions',
        title: 'Employee Engagement Partner',
        story: 'We matched employee donations and organized volunteer days. Pure win for both our company and communities!'
      }
    ],
    faqs: [
      {
        question: 'What corporate benefits do we get?',
        answer: 'Benefits include tax deductions, brand recognition, media coverage, and employee engagement opportunities.'
      },
      {
        question: 'Can we customize partnership programs?',
        answer: 'Absolutely! We customize partnerships to align with your corporate social responsibility goals.'
      },
      {
        question: 'How are donations publicly recognized?',
        answer: 'Recognition includes website listing, annual reports, media releases, and events.'
      }
    ]
  },
  {
    id: 4,
    title: 'In-Kind Donations',
    description: 'Donate goods, supplies, clothing, or other items',
    fullDescription: 'Share what you have. Whether new or gently used items, your donations help communities directly. We accept various items throughout the year.',
    image: 'https://via.placeholder.com/800x400?text=In-Kind+Donation',
    amount: 'Various items',
    icon: '📦',
    benefits: [
      'Tax deduction for fair market value',
      'Reduce waste and help environment',
      'Visible community impact',
      'Easy logistics support',
      'Free pickup available',
      'Receipt for your records',
      'Direct recipient feedback',
      'Corporate donation options'
    ],
    howItWorks: [
      'Decide what items you want to donate',
      'Contact us with items and quantity',
      'Schedule pickup or drop-off',
      'We verify and collect items',
      'Items distributed to beneficiaries',
      'Receive donation receipt and report'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=In-Kind+1',
      'https://via.placeholder.com/400x300?text=In-Kind+2',
      'https://via.placeholder.com/400x300?text=In-Kind+3'
    ],
    eligibility: [
      'Clean and usable items',
      'Expiry date (for food/medicine)',
      'Age appropriate items',
      'Reasonable quantity'
    ],
    taxBenefits: 'Fair market value donations are tax-deductible. Appraisal and documentation provided.',
    successStories: [
      {
        name: 'Maria Garcia',
        title: 'Regular In-Kind Donor',
        story: 'I donate used books and stationery regularly. Seeing students use them is incredibly rewarding!'
      },
      {
        name: 'Community Hospital',
        title: 'Medical Supplies Donor',
        story: 'We donate expired non-critical medical supplies. Healthcare camps use them effectively in remote areas.'
      }
    ],
    faqs: [
      {
        question: 'What items do you accept?',
        answer: 'We accept books, clothing, electronics, furniture, household items, food, and medical supplies. Contact us for specifics.'
      },
      {
        question: 'Is free pickup available?',
        answer: 'Yes, we offer free pickup for bulk donations across our service areas.'
      },
      {
        question: 'How do I get a tax receipt?',
        answer: 'We provide itemized receipts with fair market valuations for all in-kind donations.'
      }
    ]
  },
  {
    id: 5,
    title: 'Sponsor a Child',
    description: 'Sponsor a child\'s education and witness transformation',
    fullDescription: 'Make a direct, meaningful difference in a child\'s life. Your monthly sponsorship covers education, nutrition, and essential materials.',
    image: 'https://via.placeholder.com/800x400?text=Child+Sponsorship',
    amount: '$20-50/month',
    icon: '👧',
    benefits: [
      'Direct impact on specific child',
      'Regular progress updates',
      'Photo and letter correspondence',
      'Educational materials provided',
      'School fee coverage',
      'Nutrition program inclusion',
      'Health check-ups',
      'Personal connection'
    ],
    howItWorks: [
      'Browse child sponsorship profiles',
      'Select a child to sponsor',
      'Complete sponsorship agreement',
      'Set up monthly donations',
      'Receive regular updates and photos',
      'Maintain correspondence',
      'Witness transformation over years'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Sponsorship+1',
      'https://via.placeholder.com/400x300?text=Sponsorship+2',
      'https://via.placeholder.com/400x300?text=Sponsorship+3'
    ],
    eligibility: [
      'Monthly commitment minimum 1 year',
      'Valid payment method',
      'Commitment to communication'
    ],
    taxBenefits: 'Monthly sponsorship payments are fully tax-deductible.',
    successStories: [
      {
        name: 'Margaret Williams',
        title: 'Sponsor for 8 Years',
        story: 'I sponsor Priya. Seeing her graduate to high school with honors changed my life. She is my daughter now!'
      },
      {
        name: 'The Johnson Family',
        title: 'Corporate Sponsorship',
        story: 'We sponsor 10 children as our company program. Amazing impact and our employees love the connection!'
      }
    ],
    faqs: [
      {
        question: 'How often do I hear about the child?',
        answer: 'You receive quarterly reports, annual updates, and can exchange letters and photos.'
      },
      {
        question: 'What if I need to stop sponsoring?',
        answer: 'You can pause or end sponsorship anytime. We help transition support to another sponsor.'
      },
      {
        question: 'Can I meet the child?',
        answer: 'Yes! After 1 year, we facilitate visits to meet your sponsored child and their family.'
      }
    ]
  },
  {
    id: 6,
    title: 'Fundraiser Events',
    description: 'Organize or participate in community fundraiser events',
    fullDescription: 'Host your own fundraiser or participate in ours. Whether a house party, marathon, or community event, fundraisers make giving fun and engaging.',
    image: 'https://via.placeholder.com/800x400?text=Fundraiser+Events',
    amount: 'Community-driven',
    icon: '🎉',
    benefits: [
      'Create your own fundraiser page',
      'Easy sharing and tracking',
      'Fundraiser toolkit provided',
      'Media promotion support',
      'Community participation',
      'Fun and engagement',
      'Transparent tracking',
      'Tax deductibility'
    ],
    howItWorks: [
      'Choose fundraiser type',
      'Create fundraiser page',
      'Share with family and friends',
      'Accept donations online',
      'Update progress and share impact',
      'Submit funds and receive recognition'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Event+1',
      'https://via.placeholder.com/400x300?text=Event+2',
      'https://via.placeholder.com/400x300?text=Event+3'
    ],
    eligibility: [
      'Any age with adult support',
      'Event in good taste',
      'Transparency in reporting'
    ],
    taxBenefits: 'All funds raised are tax-deductible for donors.',
    successStories: [
      {
        name: 'Alex Thompson & Friends',
        title: 'Marathon Fundraiser',
        story: 'We ran a marathon and raised $8,000! It was challenging but so rewarding for the cause.'
      },
      {
        name: 'School Book Club',
        title: 'Community Events',
        story: 'Our monthly book sales raised $3,000 for the school project. Community loved participating!'
      }
    ],
    faqs: [
      {
        question: 'What types of fundraisers can I organize?',
        answer: 'Any type! Marathons, dinners, bake sales, talent shows, online campaigns, etc. We provide support.'
      },
      {
        question: 'How do I track donations?',
        answer: 'Your personalized fundraiser page tracks all donations in real-time with donor information.'
      },
      {
        question: 'What is the platform fee?',
        answer: 'We take a small fee (3-5%) to cover transaction costs. The rest goes 100% to the cause.'
      }
    ]
  }
]

const currentDonation = computed(() => {
  const id = parseInt(route.params.id as string)
  return donationsData.find(d => d.id === id)
})

const goBack = () => {
  router.push('/donations')
}
</script>

<template>
  <div v-if="currentDonation" class="donation-detail">
    <!-- Back Button -->
    <div class="back-button-container">
      <button @click="goBack" class="back-btn">← Back to Donations</button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img :src="currentDonation.image" :alt="currentDonation.title" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-icon">{{ currentDonation.icon }}</div>
        <h1>{{ currentDonation.title }}</h1>
        <p class="amount-info">{{ currentDonation.amount }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <!-- Quick Info -->
      <div class="quick-info">
        <p class="description">{{ currentDonation.fullDescription }}</p>
      </div>

      <!-- Benefits Section -->
      <section class="section">
        <h2>Benefits of {{ currentDonation.title }}</h2>
        <div class="benefits-grid">
          <div v-for="(benefit, index) in currentDonation.benefits" :key="index" class="benefit-item">
            <div class="benefit-icon">✓</div>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="section">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div v-for="(step, index) in currentDonation.howItWorks" :key="index" class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <p>{{ step }}</p>
          </div>
        </div>
      </section>

      <!-- Eligibility -->
      <section class="section">
        <h2>Eligibility & Requirements</h2>
        <ul class="requirements-list">
          <li v-for="req in currentDonation.eligibility" :key="req">{{ req }}</li>
        </ul>
      </section>

      <!-- Tax Benefits -->
      <section class="section tax-section">
        <h2>💰 Tax Benefits</h2>
        <p class="tax-info">{{ currentDonation.taxBenefits }}</p>
      </section>

      <!-- Gallery -->
      <section class="section">
        <h2>Photo Gallery</h2>
        <div class="gallery">
          <div v-for="(image, index) in currentDonation.images" :key="index" class="gallery-item">
            <img :src="image" :alt="`Gallery ${index + 1}`">
          </div>
        </div>
      </section>

      <!-- Success Stories -->
      <section class="section">
        <h2>Donor Success Stories</h2>
        <div class="stories-grid">
          <div v-for="story in currentDonation.successStories" :key="story.name" class="story-card">
            <div class="story-header">
              <h4>{{ story.name }}</h4>
              <p class="story-title">{{ story.title }}</p>
            </div>
            <p class="story-text">{{ story.story }}</p>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section">
        <h2>Frequently Asked Questions</h2>
        <div class="faqs">
          <div v-for="faq in currentDonation.faqs" :key="faq.question" class="faq-item">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Start your {{ currentDonation.title.toLowerCase() }} today</p>
        <div class="cta-buttons">
          <button class="donate-now-btn">💚 Donate Now</button>
          <button class="learn-more-alt-btn">📧 Email Us for More Info</button>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Donation Option Not Found</h2>
    <p>The donation option you're looking for doesn't exist.</p>
    <button @click="goBack" class="back-btn">← Back to Donations</button>
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
  background: #f5576c;
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
  background: #e83d52;
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
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

.amount-info {
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.95;
  font-weight: 600;
}

.quick-info {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 50px;
  border-left: 4px solid #f5576c;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 3px solid #f5576c;
  padding-bottom: 10px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.benefit-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.benefit-icon {
  color: #f5576c;
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-item p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.step-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  border-top: 4px solid #f5576c;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.step-card p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirements-list li {
  padding: 12px 20px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border-left: 4px solid #f5576c;
  border-radius: 5px;
  color: #555;
}

.requirements-list li:before {
  content: '✓ ';
  color: #f5576c;
  font-weight: bold;
  margin-right: 10px;
}

.tax-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 50px;
}

.tax-section h2 {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.tax-info {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  opacity: 0.95;
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
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.story-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #f5576c;
}

.story-header {
  margin-bottom: 15px;
}

.story-card h4 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.1rem;
}

.story-title {
  margin: 0;
  color: #f5576c;
  font-size: 0.9rem;
  font-weight: 600;
}

.story-text {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
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
  color: #f5576c;
  font-size: 1.05rem;
}

.faq-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.donate-now-btn,
.learn-more-alt-btn {
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.donate-now-btn {
  background: white;
  color: #f5576c;
}

.donate-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.learn-more-alt-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.learn-more-alt-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.not-found {
  text-align: center;
  padding: 80px 20px;
}

.not-found h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.not-found p {
  color: #666;
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

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons button {
    width: 100%;
  }
}
</style>
