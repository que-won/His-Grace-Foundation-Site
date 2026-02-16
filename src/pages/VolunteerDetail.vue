<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface VolunteerDetail {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  commitment: string
  skills: string
  icon: string
  whatYoulDo: string[]
  idealCandidate: string[]
  requirements: string[]
  benefits: string[]
  images: string[]
  testimonials: { name: string; role: string; quote: string }[]
  timeline: { phase: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

const volunteersData: VolunteerDetail[] = [
  {
    id: 1,
    title: 'Education Volunteer',
    description: 'Teach students in rural schools or provide tutoring',
    fullDescription: 'Join our education team and share knowledge with underprivileged children. Whether teaching in classrooms or one-on-one tutoring, your teaching transforms lives.',
    image: 'https://via.placeholder.com/800x400?text=Education+Volunteer',
    commitment: '4-8 hours/week',
    skills: 'Teaching, Mentoring',
    icon: '📚',
    whatYoulDo: [
      'Conduct classroom sessions for multiple subjects',
      'Provide personalized tutoring to struggling students',
      'Help with homework and academic guidance',
      'Mentor students for competitive exams',
      'Organize educational workshops and activities',
      'Create and use creative teaching methods'
    ],
    idealCandidate: [
      'Have passion for education',
      'Good communication skills',
      'Patience and empathy',
      'Subject expertise (any level)',
      'Willingness to learn and adapt',
      'Commitment to student success'
    ],
    requirements: [
      'Minimum 18 years old',
      'Any educational background',
      'Basic computer literacy helpful',
      'Police clearance certificate',
      'Consistent schedule commitment'
    ],
    benefits: [
      'Impact thousand students lives',
      'Teaching experience and mentoring skills',
      'Certificate of volunteering',
      'Community recognition',
      'Team connections and friendship',
      'Professional references'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Education+1',
      'https://via.placeholder.com/400x300?text=Education+2',
      'https://via.placeholder.com/400x300?text=Education+3'
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Education Volunteer (8 months)',
        quote: 'Teaching these kids is the most fulfilling thing I do. Watching them grow and succeed makes every hour worthwhile!'
      },
      {
        name: 'James Wilson',
        role: 'Math Tutor Volunteer',
        quote: 'I taught advanced math to rural students. The enthusiasm and gratitude I received is unmatched anywhere.'
      }
    ],
    timeline: [
      { phase: 'Week 1', description: 'Orientation and training on teaching methodology' },
      { phase: 'Week 2-3', description: 'Classroom familiarization and student interaction' },
      { phase: 'Week 4+', description: 'Full-time teaching and mentoring responsibilities' }
    ],
    faqs: [
      {
        question: 'Do I need a teaching degree?',
        answer: 'No. Passion and willingness to teach matter most. We provide training and support.'
      },
      {
        question: 'Can I choose my subject?',
        answer: 'Yes! You can volunteer in your area of expertise or strength.'
      },
      {
        question: 'What if I make a mistake?',
        answer: 'Learning is part of volunteering. We support and guide you through challenges.'
      }
    ]
  },
  {
    id: 2,
    title: 'Healthcare Volunteer',
    description: 'Assist in medical camps and healthcare initiatives',
    fullDescription: 'Help us deliver healthcare to remote communities. Work alongside medical professionals in organizing camps, patient care, and health education.',
    image: 'https://via.placeholder.com/800x400?text=Healthcare+Volunteer',
    commitment: '6-10 hours/week',
    skills: 'Medical knowledge helpful',
    icon: '⚕️',
    whatYoulDo: [
      'Assist doctors and nurses in medical camps',
      'Organize patient registration and record keeping',
      'Help with patient counseling and health education',
      'Manage medical supplies and equipment',
      'Conduct awareness programs on health',
      'Support vaccination drives and checkups'
    ],
    idealCandidate: [
      'Compassionate towards patient care',
      'Detail-oriented and organized',
      'Ability to work in non-hospital settings',
      'Physical stamina for field work',
      'Communication skills',
      'Cultural sensitivity'
    ],
    requirements: [
      'Minimum 18 years old',
      'Medical background preferred but not required',
      'Health checkup certificate',
      'Police clearance',
      'Regular schedule availability'
    ],
    benefits: [
      'Healthcare experience and exposure',
      'Medical networking',
      'Certificate of volunteering',
      'Public health awareness',
      'Team support and guidance',
      'Career development opportunity'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Healthcare+1',
      'https://via.placeholder.com/400x300?text=Healthcare+2',
      'https://via.placeholder.com/400x300?text=Healthcare+3'
    ],
    testimonials: [
      {
        name: 'Dr. Neha Patel',
        role: 'Healthcare Volunteer Coordinator',
        quote: 'Our healthcare volunteers are the backbone of our camps. Their dedication saves lives and touches hearts.'
      },
      {
        name: 'Rajesh Kumar',
        role: 'Healthcare Camp Volunteer',
        quote: "I never knew patient interaction could be so rewarding. Every camp, I'm inspired by the gratitude of people."
      }
    ],
    timeline: [
      { phase: 'Week 1', description: 'Health & safety orientation and training' },
      { phase: 'Week 2', description: 'Shadowing in actual healthcare camps' },
      { phase: 'Week 3+', description: 'Active participation in healthcare delivery' }
    ],
    faqs: [
      {
        question: 'Do I need medical training?',
        answer: 'Helpful but not required. We provide orientation and training for all volunteers.'
      },
      {
        question: 'Is it safe to work in remote areas?',
        answer: 'Yes. We ensure volunteer safety with proper support, transportation, and security measures.'
      },
      {
        question: 'What if I have medical concerns?',
        answer: 'Speak with our health coordinator. We prioritize volunteer wellness and support.'
      }
    ]
  },
  {
    id: 3,
    title: 'Community Outreach',
    description: 'Engage with communities and raise awareness',
    fullDescription: 'Be the bridge between our organization and communities. Help neighborhoods understand our programs, mobilize support, and create lasting impact.',
    image: 'https://via.placeholder.com/800x400?text=Community+Outreach',
    commitment: '5-8 hours/week',
    skills: 'Communication, Networking',
    icon: '🤝',
    whatYoulDo: [
      'Organize community meetings and awareness sessions',
      'Conduct door-to-door engagement programs',
      'Create content and materials in local languages',
      'Facilitate community feedback and suggestions',
      'Support community mobilization for projects',
      'Build relationships with community leaders'
    ],
    idealCandidate: [
      'Excellent communication skills',
      'Community connection and trust',
      'Multilingual abilities',
      'Problem-solving mindset',
      'Cultural awareness',
      'Natural networker'
    ],
    requirements: [
      'Minimum 18 years old',
      'Good communication skills',
      'Community residency preferred',
      'Police clearance',
      'Flexible schedule'
    ],
    benefits: [
      'Community leadership experience',
      'Networking and relationships',
      'Certificate of volunteering',
      'Public speaking skills',
      'Community recognition',
      'Influential role in community'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Community+1',
      'https://via.placeholder.com/400x300?text=Community+2',
      'https://via.placeholder.com/400x300?text=Community+3'
    ],
    testimonials: [
      {
        name: 'Maria Santos',
        role: 'Community Outreach Volunteer',
        quote: 'Organizing community events and seeing neighbors come together for a cause has been my greatest joy.'
      }
    ],
    timeline: [
      { phase: 'Week 1', description: 'Community orientation and stakeholder meetings' },
      { phase: 'Week 2-3', description: 'Program familiarization and planning' },
      { phase: 'Week 4+', description: 'Community engagement and mobilization' }
    ],
    faqs: [
      {
        question: 'Do I need to be a community leader?',
        answer: 'Not necessarily. Your passion and good communication matter most. We support your growth.'
      },
      {
        question: 'Can I work in my own community?',
        answer: 'Absolutely! Local knowledge and connections are valuable assets.'
      },
      {
        question: 'What languages are needed?',
        answer: 'Local/regional languages help, but English proficiency is sufficient.'
      }
    ]
  },
  {
    id: 4,
    title: 'Environmental Volunteer',
    description: 'Join tree plantation and conservation efforts',
    fullDescription: 'Help us create green futures. Participate in tree planting drives, environmental conservation, and sustainability initiatives.',
    image: 'https://via.placeholder.com/800x400?text=Environment+Volunteer',
    commitment: 'Flexible schedule',
    skills: 'No specific skills needed',
    icon: '🌱',
    whatYoulDo: [
      'Participate in tree plantation drives',
      'Care for nurseries and seedlings',
      'Organize environmental awareness campaigns',
      'Clean and maintain public green spaces',
      'Conduct environmental education',
      'Monitor and document environmental impact'
    ],
    idealCandidate: [
      'Love for nature and environment',
      'Physical fitness for outdoor work',
      'Enthusiasm and energy',
      'Team player mentality',
      'Willingness to learn',
      'Environmental consciousness'
    ],
    requirements: [
      'Any age (with parental approval for minors)',
      'Basic physical fitness',
      'Police clearance',
      'Comfort with outdoor activities',
      'Flexible scheduling'
    ],
    benefits: [
      'Environmental impact and legacy',
      'Outdoor activity and fitness',
      'Certificate of volunteering',
      'Community connections',
      'Team bonding experiences',
      'Green warrior recognition'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Env+1',
      'https://via.placeholder.com/400x300?text=Env+2',
      'https://via.placeholder.com/400x300?text=Env+3'
    ],
    testimonials: [
      {
        name: 'Alex Green',
        role: 'Environmental Volunteer',
        quote: 'Planting trees and seeing the forest grow is the most satisfying environmental action I can take.'
      }
    ],
    timeline: [
      { phase: 'Pre-Event', description: 'Training and event briefing' },
      { phase: 'Event Day', description: 'Active participation in plantation and conservation' },
      { phase: 'Post-Event', description: 'Follow-up care and maintenance' }
    ],
    faqs: [
      {
        question: 'Can children participate?',
        answer: 'Yes! We love family participation. Parental supervision required for minors.'
      },
      {
        question: 'What if I\'m not fit?',
        answer: 'Various roles available. You can contribute based on your capability.'
      },
      {
        question: 'How long do trees survive?',
        answer: 'With proper care, 85%+ survival rate. We monitor and provide ongoing maintenance.'
      }
    ]
  },
  {
    id: 5,
    title: 'Administrative Support',
    description: 'Help with data entry and event organization',
    fullDescription: 'Support our behind-the-scenes operations. Help with administrative tasks, event coordination, and fundraising that keep our organization running.',
    image: 'https://via.placeholder.com/800x400?text=Admin+Support',
    commitment: '3-6 hours/week',
    skills: 'Organization, Office Skills',
    icon: '📋',
    whatYoulDo: [
      'Data entry and database management',
      'Event planning and coordination',
      'Document preparation and filing',
      'Correspondence and communication',
      'Fundraising campaign support',
      'Office operations assistance'
    ],
    idealCandidate: [
      'Attention to detail',
      'Organizational skills',
      'Computer proficiency',
      'Professional communication',
      'Time management',
      'Reliability and consistency'
    ],
    requirements: [
      'Minimum 18 years old',
      'Basic computer skills',
      'Police clearance',
      'Office work experience helpful',
      'Regular schedule availability'
    ],
    benefits: [
      'Office and administrative experience',
      'Skills development',
      'Certificate of volunteering',
      'Professional references',
      'Career networking',
      'Work environment exposure'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Admin+1',
      'https://via.placeholder.com/400x300?text=Admin+2',
      'https://via.placeholder.com/400x300?text=Admin+3'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Administrative Volunteer',
        quote: 'Managing event coordination for programs was great experience. It truly felt like making a difference.'
      }
    ],
    timeline: [
      { phase: 'Week 1', description: 'Office orientation and system training' },
      { phase: 'Week 2', description: 'Task assignment and work initiation' },
      { phase: 'Week 3+', description: 'Independent work with supervisor support' }
    ],
    faqs: [
      {
        question: 'Do I need office experience?',
        answer: 'Helpful but not required. We train and support administrative volunteers.'
      },
      {
        question: 'Can I work from home?',
        answer: 'Some tasks can be remote. Others require office presence. We\'re flexible!'
      },
      {
        question: 'What software skills are needed?',
        answer: 'Basic MS Office or Google Workspace. We teach specialized tools.'
      }
    ]
  },
  {
    id: 6,
    title: 'Content & Social Media',
    description: 'Create content and manage social media',
    fullDescription: 'Tell our stories. Use your creative skills in writing, photography, and social media to document and share our impact with the world.',
    image: 'https://via.placeholder.com/800x400?text=Content+Creation',
    commitment: '5-8 hours/week',
    skills: 'Writing, Photography, Social Media',
    icon: '📸',
    whatYoulDo: [
      'Create engaging social media content',
      'Write beneficiary stories and articles',
      'Photography and videography for programs',
      'Manage social media accounts',
      'Design graphics and visual content',
      'Document project updates and impact'
    ],
    idealCandidate: [
      'Creative and storytelling ability',
      'Social media savvy',
      'Photography/videography skills',
      'Attention to visual details',
      'Communication excellence',
      'Passion for social causes'
    ],
    requirements: [
      'Minimum 18 years old',
      'Portfolio or examples of work',
      'Police clearance',
      'Basic photography/writing skills',
      'Access to content creation tools'
    ],
    benefits: [
      'Portfolio building and experience',
      'Creative exposure and growth',
      'Certificate of volunteering',
      'Professional recognition',
      'Skill development in content creation',
      'Published work portfolio'
    ],
    images: [
      'https://via.placeholder.com/400x300?text=Content+1',
      'https://via.placeholder.com/400x300?text=Content+2',
      'https://via.placeholder.com/400x300?text=Content+3'
    ],
    testimonials: [
      {
        name: 'Emma photographer',
        role: 'Content Creator Volunteer',
        quote: 'Documenting real stories of impact through my photography has been the most meaningful work!'
      }
    ],
    timeline: [
      { phase: 'Week 1', description: 'Content guidelines and platform training' },
      { phase: 'Week 2', description: 'Story gathering and first content creation' },
      { phase: 'Week 3+', description: 'Regular content creation and publication' }
    ],
    faqs: [
      {
        question: 'Do I need professional equipment?',
        answer: 'No. Smartphone photography works! Professional quality achievable with the right approach.'
      },
      {
        question: 'Can I do this remotely?',
        answer: 'Partially. Some on-ground work needed for photography/video, but editing can be remote.'
      },
      {
        question: 'Will my work be credited?',
        answer: 'Absolutely! Your work is credited and showcased in our platforms.'
      }
    ]
  }
]

const currentVolunteer = computed(() => {
  const id = parseInt(route.params.id as string)
  return volunteersData.find(v => v.id === id)
})

const goBack = () => {
  router.push('/volunteer')
}
</script>

<template>
  <div v-if="currentVolunteer" class="volunteer-detail">
    <!-- Back Button -->
    <div class="back-button-container">
      <button @click="goBack" class="back-btn">← Back to Volunteer</button>
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img :src="currentVolunteer.image" :alt="currentVolunteer.title" class="hero-image">
      <div class="hero-overlay">
        <div class="hero-icon">{{ currentVolunteer.icon }}</div>
        <h1>{{ currentVolunteer.title }}</h1>
        <div class="requirement-badges">
          <span class="badge">{{ currentVolunteer.commitment }}</span>
          <span class="badge">{{ currentVolunteer.skills }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <!-- Description -->
      <div class="description-box">
        <p>{{ currentVolunteer.fullDescription }}</p>
      </div>

      <!-- What You'll Do -->
      <section class="section">
        <h2>What You'll Do</h2>
        <ul class="tasks-list">
          <li v-for="task in currentVolunteer.whatYoulDo" :key="task">
            <span class="task-icon">🎯</span>
            {{ task }}
          </li>
        </ul>
      </section>

      <!-- Ideal Candidate -->
      <section class="section">
        <h2>Ideal Candidate Profile</h2>
        <div class="traits-grid">
          <div v-for="trait in currentVolunteer.idealCandidate" :key="trait" class="trait-card">
            <span class="trait-icon">⭐</span>
            <p>{{ trait }}</p>
          </div>
        </div>
      </section>

      <!-- Requirements -->
      <section class="section">
        <h2>Requirements</h2>
        <div class="requirements-list">
          <div v-for="req in currentVolunteer.requirements" :key="req" class="requirement-item">
            <span class="req-icon">✓</span>
            <span>{{ req }}</span>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="section benefits-section">
        <h2>Benefits of Volunteering</h2>
        <div class="benefits-grid">
          <div v-for="benefit in currentVolunteer.benefits" :key="benefit" class="benefit-card">
            <span class="benefit-icon">💚</span>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section">
        <h2>Volunteer Journey</h2>
        <div class="timeline-vertical">
          <div v-for="(item, index) in currentVolunteer.timeline" :key="index" class="timeline-item">
            <div class="timeline-marker">{{ item.phase }}</div>
            <div class="timeline-content">{{ item.description }}</div>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section">
        <h2>Volunteers in Action</h2>
        <div class="gallery">
          <div v-for="(image, index) in currentVolunteer.images" :key="index" class="gallery-item">
            <img :src="image" :alt="`Volunteer ${index + 1}`">
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="section">
        <h2>Volunteer Testimonials</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in currentVolunteer.testimonials" :key="testimonial.name" class="testimonial-card">
            <h4>{{ testimonial.name }}</h4>
            <p class="role">{{ testimonial.role }}</p>
            <p class="quote">"{{ testimonial.quote }}"</p>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section">
        <h2>Frequently Asked Questions</h2>
        <div class="faqs">
          <div v-for="faq in currentVolunteer.faqs" :key="faq.question" class="faq-item">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our volunteer community and create lasting impact</p>
        <button class="apply-volunteer-btn">🤝 Apply Now</button>
      </section>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Volunteer Opportunity Not Found</h2>
    <button @click="goBack" class="back-btn">← Back to Volunteer</button>
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
  background: #11998e;
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
  background: #0d7a6f;
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
  margin: 0 0 15px 0;
  font-size: 2.5rem;
}

.requirement-badges {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.description-box {
  background: #f0fff9;
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #11998e;
  margin-bottom: 50px;
}

.description-box p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.section {
  margin-bottom: 50px;
}

.section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 3px solid #11998e;
  padding-bottom: 10px;
}

.tasks-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 15px;
}

.tasks-list li {
  padding: 15px 20px;
  background: white;
  border-left: 4px solid #11998e;
  border-radius: 5px;
  color: #555;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.task-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.traits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.trait-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 4px solid #11998e;
}

.trait-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}

.trait-card p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.requirements-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.requirement-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  align-items: center;
  border-left: 4px solid #11998e;
}

.req-icon {
  color: #11998e;
  font-weight: bold;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.benefits-section h2 {
  border-color: #11998e;
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
  text-align: center;
  border-top: 4px solid #11998e;
}

.benefit-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}

.benefit-card p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.timeline-vertical {
  position: relative;
  padding: 20px 0 20px 40px;
}

.timeline-vertical::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #11998e;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 40px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 5px;
  width: 14px;
  height: 14px;
  background: #11998e;
  border-radius: 50%;
  border: 3px solid white;
}

.timeline-marker {
  font-weight: 600;
  color: #11998e;
  margin-bottom: 5px;
  font-size: 1.05rem;
}

.timeline-content {
  color: #666;
  line-height: 1.6;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.testimonial-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #11998e;
}

.testimonial-card h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.role {
  margin: 0 0 15px 0;
  color: #11998e;
  font-size: 0.9rem;
  font-weight: 600;
}

.quote {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-style: italic;
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
  color: #11998e;
  font-size: 1.05rem;
}

.faq-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.cta-section {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
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

.apply-volunteer-btn {
  background: white;
  color: #11998e;
  border: none;
  padding: 15px 40px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.apply-volunteer-btn:hover {
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

  .requirement-badges {
    flex-direction: column;
  }

  .traits-grid,
  .benefits-grid,
  .requirements-list {
    grid-template-columns: 1fr;
  }
}
</style>
