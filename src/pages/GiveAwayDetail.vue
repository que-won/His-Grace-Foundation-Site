<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface GiveAwayDetail {
  id: number
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  items: string
  icon: string
  whatWeNeed: string[]
  condition: string[]
  benefits: string[]
  pickupInfo: string
  acceptedItems: string[]
  notAccepted: string[]
  donationProcess: string[]
  images: string[]
  recentDonors: { name: string; item: string; impact: string }[]
  faqs: { question: string; answer: string }[]
}

const giveAwayData: GiveAwayDetail[] = [
  {
    id: 1,
    title: 'Books & Educational Materials',
    category: 'Education',
    description: 'We collect and distribute books and educational materials',
    fullDescription: 'Help provide learning resources to underprivileged children. We collect and distribute books, notebooks, pens, and other educational materials to students in remote and rural areas.',
    image: 'https://via.placeholder.com/800x400?text=Books+Donation',
    items: 'Books, Stationery',
    icon: '📚',
    whatWeNeed: [
      'Textbooks and reference books',
      'Story books and novel',
      'Notebooks and writing pads',
      'Pens, pencils, and erasers',
      'Geometric sets and calculators',
      'School bags and organized materials'
    ],
    condition: [
      'Books should be in readable condition',
      'No torn pages or missing pages',
      'Clean and organized',
      'Newer editions preferred but older acceptable',
      'No water damage or excessive markings'
    ],
    benefits: [
      'Tax deduction for fair market value',
      'Free pickup for bulk donations',
      'Impact report on beneficiary students',
      'Donation certificate provided',
      'Organization credit in our programs'
    ],
    pickupInfo: 'Free pickup available for donations above 20 books or 10 kg weight.',
    acceptedItems: [
      'Textbooks',
      'Storybooks',
      'Encyclopedias',
      'Notebooks and pads',
      'Writing instruments',
      'Geometric sets'
    ],
    notAccepted: [
      'Torn or unreadable books',
      'Books with offensive content',
      'Books in languages not used locally',
      'Damaged stationery'
    ],
    donationProcess: [
      'Assess and gather books/stationery',
      'Contact us with collection details',
      'Schedule pickup (or drop-off)',
      'We collect and verify items',
      'Distribute to schools and students',
      'Receive impact report'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Books+1',
      'https://via.placeholder.com/400x300?text=Books+2',
      'https://via.placeholder.com/400x300?text=Books+3'
    ],
    recentDonors: [
      {
        name: 'City Library System',
        item: '500 books',
        impact: 'Equipped 2 schools with libraries'
      },
      {
        name: 'Sarah Wilson',
        item: '150 school supplies',
        impact: 'Helped 100 students continue schooling'
      }
    ],
    faqs: [
      {
        question: 'How old can books be?',
        answer: 'Age is not a factor if content is current and book condition is good. Educational content is what matters.'
      },
      {
        question: 'Can I donate online?',
        answer: 'Contact us for shipping options. Local pickup/dropoff preferred for efficiency.'
      },
      {
        question: 'Do I get a tax receipt?',
        answer: 'Yes. We provide itemized donation receipts with fair market valuations.'
      }
    ]
  },
  {
    id: 2,
    title: 'Clothing Drive',
    category: 'Fashion',
    description: 'Donate new or gently used clothing for families',
    fullDescription: 'Contribute to our clothing drive and help provide warm, decent clothes to underprivileged families. We accept clothing for all ages and seasons.',
    image: 'https://via.placeholder.com/800x400?text=Clothes+Donation',
    items: 'Clothes, Shoes',
    icon: '👕',
    whatWeNeed: [
      'Winter clothing (jackets, sweaters)',
      'Summer clothing (shirts, dresses)',
      'Undergarments and socks',
      'Shoes and sandals for all ages',
      'School uniforms',
      'Baby clothes and shoes'
    ],
    condition: [
      'Clean and washed',
      'No stains or tears',
      'Complete (all buttons present)',
      'Appropriate sizing',
      'Good condition for at least 1 more season'
    ],
    benefits: [
      'Tax deductible donations',
      'Direct help for families during seasons',
      'Ensures dignity and proper dress',
      'Free pickup for bulk donations',
      'Community appreciation'
    ],
    pickupInfo: 'Pickup available for 20+ items. Donated clothes reach families within 48 hours.',
    acceptedItems: [
      'T-shirts and shirts',
      'Trousers and skirts',
      'Sweaters and jackets',
      'Underwear',
      'Socks and stockings',
      'Shoes and sandals',
      'Baby clothes',
      'School uniforms'
    ],
    notAccepted: [
      'Torn or heavily stained clothing',
      'Clothes with broken zippers',
      'Underwear (new only)',
      'Excessively worn items'
    ],
    donationProcess: [
      'Sort and check clothing condition',
      'Wash if needed',
      'Organize by size and type',
      'Call or visit collection center',
      'Arrange pickup or drop-off',
      'Items distributed to families'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Clothes+1',
      'https://via.placeholder.com/400x300?text=Clothes+2',
      'https://via.placeholder.com/400x300?text=Clothes+3'
    ],
    recentDonors: [
      {
        name: 'Fashion Store XYZ',
        item: '300 items',
        impact: 'Clothed 200 people'
      },
      {
        name: 'Community Group',
        item: 'Seasonal clothing',
        impact: 'Supported 50 families'
      }
    ],
    faqs: [
      {
        question: 'Can I donate used clothing?',
        answer: 'Yes! Gently used, clean clothing is welcome. Just ensure it\'s in good condition.'
      },
      {
        question: 'What about winter/summer only?',
        answer: 'We distribute seasonally appropriate clothing. All seasons are needed throughout the year.'
      },
      {
        question: 'Do you accept branded items?',
        answer: 'Yes, all brands welcome as long as condition is good and appropriate.'
      }
    ]
  },
  {
    id: 3,
    title: 'Household Essentials',
    category: 'Essentials',
    description: 'Donate household items for families in need',
    fullDescription: 'Help families create a comfortable home. We distribute blankets, utensils, bedding, and other household items to ensure basic living dignity.',
    image: 'https://via.placeholder.com/800x400?text=Household+Items',
    items: 'Blankets, Utensils, Toiletries',
    icon: '🛏️',
    whatWeNeed: [
      'Blankets and quilts',
      'Bed sheets and pillows',
      'Cooking utensils and plates',
      'Cups, glasses and cutlery',
      'Soap, shampoo and toothpaste',
      'Towels and cleaning cloths',
      'Storage containers'
    ],
    condition: [
      'Clean and in working condition',
      'No cracks or damages',
      'Functional and usable',
      'Food-safe for kitchenware',
      'Non-toxic for all items'
    ],
    benefits: [
      'Provides dignity and comfort',
      'Keeps families warm and hygienic',
      'Tax deductible items',
      'Bulk donations welcomed',
      'Direct distribution to families'
    ],
    pickupInfo: 'Bulk pickups arranged for 30+ items. Community distribution centers available.',
    acceptedItems: [
      'Blankets',
      'Bed sheets',
      'Pillows',
      'Cooking pots and pans',
      'Plates and bowls',
      'Plastic containers',
      'Towels',
      'Basic toiletries'
    ],
    notAccepted: [
      'Broken or non-functional items',
      'Items with heavy damages',
      'Expired medications/toiletries',
      'Hazardous materials'
    ],
    donationProcess: [
      'Assess household items',
      'Clean and organize',
      'Group by category',
      'Contact our team',
      'Schedule pickup/dropoff at collection center',
      'Items delivered to families'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Household+1',
      'https://via.placeholder.com/400x300?text=Household+2',
      'https://via.placeholder.com/400x300?text=Household+3'
    ],
    recentDonors: [
      {
        name: 'Retail Store ABC',
        item: '100+ household items',
        impact: 'Set up homes for 20 families'
      }
    ],
    faqs: [
      {
        question: 'Can I donate kitchen items?',
        answer: 'Yes, absolutely! Pots, pans, dishes, and utensils are highly needed.'
      },
      {
        question: 'What about bedding?',
        answer: 'Clean bedding, blankets, and pillows are gratefully accepted.'
      },
      {
        question: 'Are toiletries accepted?',
        answer: 'Yes, but only new/unopened items for hygiene reasons.'
      }
    ]
  },
  {
    id: 4,
    title: 'Electronics & Technology',
    category: 'Technology',
    description: 'Donate refurbished computers and smartphones',
    fullDescription: 'Bridge the digital divide. We collect refurbished electronics for schools and individuals, ensuring they have access to technology and digital learning.',
    image: 'https://via.placeholder.com/800x400?text=Technology+Donation',
    items: 'Computers, Tablets, Phones',
    icon: '💻',
    whatWeNeed: [
      'Computers and laptops (working condition)',
      'Tablets with good battery',
      'Smartphones (basic functionality)',
      'USB cables and chargers',
      'External hard drives',
      'Keyboards and mouse',
      'Monitors in good condition'
    ],
    condition: [
      'Functional and working properly',
      'Battery life minimum 3 hours',
      'No water damage',
      'All accessories included if possible',
      'Data should be completely wiped'
    ],
    benefits: [
      'Enables digital literacy for students',
      'Provides opportunity access',
      'Tax deductible donations',
      'Data privacy ensured',
      'Free technical refurbishment'
    ],
    pickupInfo: 'Pickup arranged for laptops/computers. Drop-off centers for smaller items.',
    acceptedItems: [
      'Computers (5+ years old acceptable)',
      'Laptops',
      'Tablets',
      'Smartphones',
      'Monitors',
      'Keyboards',
      'Mice and trackpads',
      'Cables and chargers'
    ],
    notAccepted: [
      'Completely non-functional devices',
      'Devices with locked accounts',
      'Items with personal data',
      'Devices without chargers (desktop)'
    ],
    donationProcess: [
      'Back up and wipe personal data',
      'Test device functionality',
      'Include all cables and chargers',
      'Contact our tech team',
      'Arrange secure pickup/delivery',
      'We refurbish and distribute'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Tech+1',
      'https://via.placeholder.com/400x300?text=Tech+2',
      'https://via.placeholder.com/400x300?text=Tech+3'
    ],
    recentDonors: [
      {
        name: 'Tech Company XYZ',
        item: '50 refurbished laptops',
        impact: 'Opened digital learning center for 200 students'
      }
    ],
    faqs: [
      {
        question: 'Will my data be secure?',
        answer: 'Absolutely. We completely wipe all data using military-grade methods.'
      },
      {
        question: 'Do devices need original chargers?',
        answer: 'Preferred but not required. We can source compatible chargers.'
      },
      {
        question: 'What about old but working devices?',
        answer: 'Perfect! Age is not an issue. Working functionality is what matters.'
      }
    ]
  },
  {
    id: 5,
    title: 'Food & Groceries',
    category: 'Food',
    description: 'Donate packaged foods and groceries',
    fullDescription: 'Fight hunger together. Donate packaged foods, non-perishable items, and groceries to support our food security programs for vulnerable families.',
    image: 'https://via.placeholder.com/800x400?text=Food+Donation',
    items: 'Groceries, Food Items',
    icon: '🍎',
    whatWeNeed: [
      'Rice, wheat, and pulses',
      'Cooking oil',
      'Peanut butter and nuts',
      'Canned vegetables and fruits',
      'Pasta and noodles',
      'Powdered milk',
      'Breakfast cereals'
    ],
    condition: [
      'Unexpired and within shelf life',
      'Sealed and properly packaged',
      'No damage to packaging',
      'Clearly labeled',
      'Stored in cool, dry place'
    ],
    benefits: [
      'Directly fights hunger',
      'Supports food security programs',
      'Tax deductible donations',
      'Reaches families within days',
      'Addresses immediate needs'
    ],
    pickupInfo: 'Bulk donations coordinated with food distribution centers.',
    acceptedItems: [
      'Grains (rice, wheat)',
      'Pulses (dal, beans)',
      'Oil and ghee',
      'Canned goods',
      'Flour and cornmeal',
      'Spices',
      'Tea, coffee, sugar',
      'Canned milk and formul'
    ],
    notAccepted: [
      'Expired food items',
      'Open or partially used items',
      'Perishable items (without proper handling)',
      'Food with unknown origin',
      'Heavily damaged packaging'
    ],
    donationProcess: [
      'Check expiry dates',
      'Ensure proper packaging',
      'Organize by item type',
      'Contact food program coordinator',
      'Schedule donation pickup/delivery',
      'Food distributed to families'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Food+1',
      'https://via.placeholder.com/400x300?text=Food+2',
      'https://via.placeholder.com/400x300?text=Food+3'
    ],
    recentDonors: [
      {
        name: 'Food Co. ABC',
        item: '1000+ food items',
        impact: 'Fed 500+ families'
      }
    ],
    faqs: [
      {
        question: 'Can I donate fresh produce?',
        answer: 'Yes! Fresh vegetables and fruits are excellent. Deliver within 24 hours.'
      },
      {
        question: 'What about bulk expired items?',
        answer: 'Please do not donate expired items. Helps only items within shelf life count.'
      },
      {
        question: 'Does canned food expire?',
        answer: 'While canned goods last long, check expiry dates before donating.'
      }
    ]
  },
  {
    id: 6,
    title: 'Medical Supplies',
    category: 'Healthcare',
    description: 'Donate first aid supplies and medical equipment',
    fullDescription: 'Support healthcare initiatives. Donate medical supplies, first aid kits, and equipment to support our healthcare camps in remote areas.',
    image: 'https://via.placeholder.com/800x400?text=Medical+Supplies',
    items: 'Medicines, Medical Supplies',
    icon: '⚕️',
    whatWeNeed: [
      'First aid supplies (bandages, antiseptic)',
      'Over-the-counter medicines',
      'Blood pressure monitors',
      'Thermometers',
      'Stethoscopes',
      'Medical gloves and masks',
      'Surgical supplies'
    ],
    condition: [
      'Non-expired medicines',
      'Properly sealed and stored',
      'Fully functional equipment',
      'Original packaging prefe erred',
      'Sterile medical supplies'
    ],
    benefits: [
      'Directly supports healthcare camps',
      'Helps remote area clinics',
      'Tax deductible donations',
      'Saves lives in emergencies',
      'Medical waste disposed safely'
    ],
    pickupInfo: 'Handled by medical team with proper storage and safety protocols.',
    acceptedItems: [
      'Antibiotics and pain relief',
      'Vitamin supplements',
      'First aid items',
      'Medical equipment',
      'Diagnostic tools',
      'Surgical materials',
      'Vaccines (approved only)'
    ],
    notAccepted: [
      'Expired medicines',
      'Controlled substances',
      'Medicines without clear labels',
      'Syringes with unknown previous use'
    ],
    donationProcess: [
      'Verify expiry and condition',
      'Organize by type',
      'Include usage instructions',
      'Contact medical coordinator',
      'Arrange secure pickup',
      'Used in healthcare camps'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Medical+1',
      'https://via.placeholder.com/400x300?text=Medical+2',
      'https://via.placeholder.com/400x300?text=Medical+3'
    ],
    recentDonors: [
      {
        name: 'Health Org XYZ',
        item: 'Medical supplies kit',
        impact: 'Treated 1000+ patients in remote camps'
      }
    ],
    faqs: [
      {
        question: 'Can I donate prescription medicines?',
        answer: 'Only non-prescription over-the-counter medicines accepted for safety reasons.'
      },
      {
        question: 'Are unused medicines acceptable?',
        answer: 'Yes! Unopened, unexpired medicines in original packaging are perfect.'
      },
      {
        question: 'How are medicines stored?',
        answer: 'In temperature-controlled facilities following medical standards and protocols.'
      }
    ]
  }
]

const currentGiveAway = computed(() => {
  const id = parseInt(route.params.id as string)
  return giveAwayData.find(g => g.id === id)
})

const goBack = () => {
  router.push('/give-away')
}
</script>

<template>
  <div v-if="currentGiveAway" class="giveaway-detail">
    <!-- Back Button -->
    <div class="back-button-container">
      <button @click="goBack" class="back-btn">← Back to Give Away</button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img :src="currentGiveAway.image" :alt="currentGiveAway.title" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-icon">{{ currentGiveAway.icon }}</div>
        <h1>{{ currentGiveAway.title }}</h1>
        <p>{{ currentGiveAway.items }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <!-- Description -->
      <div class="description-box">
        <p>{{ currentGiveAway.fullDescription }}</p>
      </div>

      <!-- Pickup Info -->
      <div class="info-badge">
        {{ currentGiveAway.pickupInfo }}
      </div>

      <!-- What We Need Section -->
      <section class="section">
        <h2>What We Need</h2>
        <ul class="need-list">
          <li v-for="item in currentGiveAway.whatWeNeed" :key="item">{{ item }}</li>
        </ul>
      </section>

      <!-- Condition Requirements -->
      <section class="section">
        <h2>Condition Requirements</h2>
        <div class="conditions-grid">
          <div v-for="cond in currentGiveAway.condition" :key="cond" class="condition-card">
            <span class="check-icon">✓</span>
            <p>{{ cond }}</p>
          </div>
        </div>
      </section>

      <!-- Accepted vs Not Accepted -->
      <section class="section">
        <h2>Accepted & Not Accepted Items</h2>
        <div class="comparison-grid">
          <div class="accepted-box">
            <h4>✅ We Accept</h4>
            <ul>
              <li v-for="item in currentGiveAway.acceptedItems" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="not-accepted-box">
            <h4>❌ We Don't Accept</h4>
            <ul>
              <li v-for="item in currentGiveAway.notAccepted" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Donation Process -->
      <section class="section">
        <h2>Donation Process</h2>
        <div class="timeline-steps">
          <div v-for="(step, index) in currentGiveAway.donationProcess" :key="index" class="timeline-step">
            <div class="timeline-number">{{ index + 1 }}</div>
            <p>{{ step }}</p>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="section benefits-section">
        <h2>Benefits of Donating</h2>
        <div class="benefits-list">
          <div v-for="benefit in currentGiveAway.benefits" :key="benefit" class="benefit-item">
            <span class="heart">💛</span>
            <span>{{ benefit }}</span>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section">
        <h2>Donation in Action</h2>
        <div class="gallery">
          <div v-for="(image, index) in currentGiveAway.images" :key="index" class="gallery-item">
            <img :src="image" :alt="`Image ${index + 1}`">
          </div>
        </div>
      </section>

      <!-- Recent Donors -->
      <section class="section">
        <h2>Recent Donors Making Impact</h2>
        <div class="donors-grid">
          <div v-for="donor in currentGiveAway.recentDonors" :key="donor.name" class="donor-card">
            <h4>{{ donor.name }}</h4>
            <p class="donor-item">📦 {{ donor.item }}</p>
            <p class="donor-impact">{{ donor.impact }}</p>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section">
        <h2>Frequently Asked Questions</h2>
        <div class="faqs">
          <div v-for="faq in currentGiveAway.faqs" :key="faq.question" class="faq-item">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section cta-section">
        <h2>Ready to Donate?</h2>
        <p>Help us distribute {{ currentGiveAway.title.toLowerCase() }} to those in need</p>
        <button class="donate-items-btn">📦 Arrange Pickup</button>
      </section>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Item Category Not Found</h2>
    <button @click="goBack" class="back-btn">← Back to Give Away</button>
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
  background: #fa709a;
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
  background: #f85580;
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

.hero-overlay p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.95;
}

.description-box {
  background: #fff5f7;
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #fa709a;
  margin-bottom: 20px;
}

.description-box p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.info-badge {
  display: inline-block;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: #333;
  padding: 15px 25px;
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
  border-bottom: 3px solid #fa709a;
  padding-bottom: 10px;
}

.need-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.need-list li {
  padding: 15px 20px;
  background: white;
  border-left: 4px solid #fa709a;
  border-radius: 5px;
  color: #555;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.need-list li:before {
  content: '• ';
  color: #fa709a;
  font-weight: bold;
  margin-right: 10px;
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.condition-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  border-top: 4px solid #fa709a;
}

.check-icon {
  color: #fa709a;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
}

.condition-card p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.accepted-box,
.not-accepted-box {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.accepted-box {
  border-left: 4px solid #38ef7d;
}

.not-accepted-box {
  border-left: 4px solid #ff6b6b;
}

.accepted-box h4,
.not-accepted-box h4 {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
}

.accepted-box ul,
.not-accepted-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.accepted-box li,
.not-accepted-box li {
  padding: 8px 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.accepted-box li:last-child,
.not-accepted-box li:last-child {
  border-bottom: none;
}

.accepted-box li:before {
  content: '✓ ';
  color: #38ef7d;
  font-weight: bold;
  margin-right: 10px;
}

.not-accepted-box li:before {
  content: '✗ ';
  color: #ff6b6b;
  font-weight: bold;
  margin-right: 10px;
}

.timeline-steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
}

.timeline-step {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 4px solid #fa709a;
}

.timeline-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.timeline-step p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.benefits-section h2 {
  border-color: #fa709a;
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.benefit-item {
  display: flex;
  gap: 12px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  align-items: flex-start;
  border-left: 4px solid #fa709a;
}

.heart {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.benefit-item span:last-child {
  color: #555;
  line-height: 1.5;
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

.donors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.donor-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #fa709a;
}

.donor-card h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.donor-item {
  margin: 0 0 8px 0;
  color: #fa709a;
  font-weight: 600;
}

.donor-impact {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
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
  color: #fa709a;
  font-size: 1.05rem;
}

.faq-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
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
  color: #333;
}

.donate-items-btn {
  background: white;
  color: #fa709a;
  border: none;
  padding: 15px 40px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.donate-items-btn:hover {
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

  .need-list,
  .conditions-grid,
  .comparison-grid,
  .timeline-steps {
    grid-template-columns: 1fr;
  }
}
</style>
