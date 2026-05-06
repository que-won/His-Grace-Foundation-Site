<script setup lang="ts">
import { computed } from 'vue'
import MissionSection from '../components/MissionSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import HelpSection from '../components/HelpSection.vue'
import WhyChooseUsSection from '../components/WhyChooseUsSection.vue'

type PageKind = 'about' | 'projects' | 'help' | 'volunteer' | 'give-away' | 'contact'

const props = defineProps<{
  title: string
  description: string
  kind: PageKind
}>()

const sectionComponent = computed(() => {
  switch (props.kind) {
    case 'about':
      return MissionSection
    case 'projects':
      return ProjectsSection
    case 'help':
      return HelpSection
    case 'volunteer':
      return WhyChooseUsSection
    default:
      return null
  }
})
</script>

<template>
  <main class="page">
    <!-- Hero Section -->
    <section class="page__hero">
      <div class="page__hero-inner">
        <RouterLink to="/" class="page__breadcrumb" aria-label="Return to home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Home</span>
        </RouterLink>
        <p class="page__eyebrow">His Grace Foundation</p>
        <h1 class="page__title">{{ title }}</h1>
        <p class="page__subtitle">{{ description }}</p>
      </div>
      <div class="page__hero-decoration"></div>
    </section>

    <!-- Dynamic Section Components -->
    <component :is="sectionComponent" v-if="sectionComponent" />

    <!-- Give Away Section -->
    <section v-else-if="kind === 'give-away'" class="page__custom page__give-away">
      <div class="page__custom-inner">
        <div class="page__section-header">
          <h2>Ways to Give Back</h2>
          <p>Simple yet impactful ways to share resources and support our community</p>
        </div>
        <div class="page__cards">
          <article class="page__card page__card--1">
            <div class="page__card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9h12M6 9l1.5-4.5h9l1.5 4.5M6 9v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9"/>
              </svg>
            </div>
            <h3>Clothing & Apparel</h3>
            <p>Collect and share quality clothing for families who need immediate support through dignity and care.</p>
            <router-link to="/donations" class="page__card-link">Learn More →</router-link>
          </article>
          <article class="page__card page__card--2">
            <div class="page__card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3>Food Packages</h3>
            <p>Prepare simple food bundles for neighbors facing urgent shortages and food insecurity.</p>
            <router-link to="/donations" class="page__card-link">Learn More →</router-link>
          </article>
          <article class="page__card page__card--3">
            <div class="page__card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 5h16M5 9h14M5 13h14"/>
              </svg>
            </div>
            <h3>School Supplies</h3>
            <p>Donate notebooks, bags, and learning materials to children eager to pursue their education.</p>
            <router-link to="/donations" class="page__card-link">Learn More →</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section v-else-if="kind === 'contact'" class="page__custom page__contact-section">
      <div class="page__custom-inner">
        <div class="page__section-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Reach out for partnerships, volunteering, or any support requests.</p>
        </div>
        <div class="page__contact">
          <article class="page__contact-card page__contact-card--phone">
            <div class="page__contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <a href="tel:+12673850667" class="page__contact-link">+1 (267) 385-0667</a>
            <p>Available Monday - Friday, 9 AM - 5 PM EST</p>
          </article>
          <article class="page__contact-card page__contact-card--email">
            <div class="page__contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3>Email</h3>
            <a href="mailto:info@hisgracefoundation.org" class="page__contact-link">info@hisgracefoundation.org</a>
            <p>We respond to emails within 24 hours</p>
          </article>
          <article class="page__contact-card page__contact-card--visit">
            <div class="page__contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Reach out for partnership opportunities, volunteering inquiries, or donation details.</p>
            <router-link to="/" class="page__contact-action">Back to Home</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="page__cta">
      <div class="page__cta-inner">
        <h2>Ready to Make a Difference?</h2>
        <p>Join us in building a better future for those in need</p>
        <div class="page__cta-actions">
          <router-link to="/donations" class="page__cta-btn page__cta-btn--primary">Donate Now</router-link>
          <router-link to="/volunteer" class="page__cta-btn page__cta-btn--secondary">Volunteer</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

/* ============ HERO SECTION ============ */
.page__hero {
  position: relative;
  padding: 6rem 1.5rem 4rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0e6ff 100%);
  overflow: hidden;
}

.page__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(142, 10, 199, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(125, 43, 224, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.page__hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1160px;
  margin: 0 auto;
  animation: slideInDown 0.6s ease-out;
}

.page__breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  color: #7d2be0;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.page__breadcrumb:hover {
  background: rgba(125, 43, 224, 0.1);
  transform: translateX(-4px);
}

.page__breadcrumb svg {
  transition: transform 0.3s ease;
}

.page__breadcrumb:hover svg {
  transform: translateX(-2px);
}

.page__eyebrow {
  margin: 0 0 1rem;
  color: #8e0ac7;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.page__title {
  margin: 0 0 1rem;
  color: #1f2428;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 900;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.page__subtitle {
  max-width: 55ch;
  margin: 0;
  color: #5f6d75;
  font-size: 1.1rem;
  line-height: 1.7;
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.page__hero-decoration {
  position: absolute;
  top: -100px;
  right: -50px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(142, 10, 199, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s ease-in-out infinite;
}

/* ============ SECTIONS ============ */
.page__custom {
  padding: 5rem 1.5rem;
  background: #fff;
}

.page__custom-inner {
  max-width: 1160px;
  margin: 0 auto;
}

.page__section-header {
  text-align: center;
  margin-bottom: 3.5rem;
  animation: fadeInUp 0.6s ease-out;
}

.page__section-header h2 {
  margin: 0 0 1rem;
  color: #1f2428;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
}

.page__section-header p {
  margin: 0;
  color: #5f6d75;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ============ CARDS ============ */
.page__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.page__card {
  padding: 2rem;
  background: #fff;
  border: 1px solid #e8ecef;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s ease-out backwards;
  position: relative;
  overflow: hidden;
}

.page__card--1 {
  animation-delay: 0.1s;
}

.page__card--2 {
  animation-delay: 0.2s;
}

.page__card--3 {
  animation-delay: 0.3s;
}

.page__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8e0ac7 0%, #7d2be0 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.page__card:hover::before {
  transform: scaleX(1);
}

.page__card:hover {
  transform: translateY(-8px);
  border-color: #7d2be0;
  box-shadow: 0 16px 40px rgba(125, 43, 224, 0.15);
}

.page__card-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0e6ff 0%, #faf5ff 100%);
  border-radius: 12px;
  color: #7d2be0;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.page__card:hover .page__card-icon {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  transform: scale(1.1) rotate(5deg);
}

.page__card h3 {
  margin: 0 0 0.75rem;
  color: #1f2428;
  font-size: 1.35rem;
  font-weight: 700;
}

.page__card p {
  margin: 0 0 1.5rem;
  color: #5f6d75;
  line-height: 1.7;
  flex-grow: 1;
}

.page__card-link {
  display: inline-flex;
  align-items: center;
  color: #7d2be0;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  gap: 0.5rem;
}

.page__card-link:hover {
  gap: 1rem;
  color: #8e0ac7;
}

/* ============ CONTACT SECTION ============ */
.page__contact-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #f0e6ff 100%);
}

.page__contact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.page__contact-card {
  padding: 2.5rem;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8ecef;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s ease-out backwards;
}

.page__contact-card--phone {
  animation-delay: 0.1s;
}

.page__contact-card--email {
  animation-delay: 0.2s;
}

.page__contact-card--visit {
  animation-delay: 0.3s;
}

.page__contact-card:hover {
  transform: translateY(-10px);
  border-color: #7d2be0;
  box-shadow: 0 20px 48px rgba(125, 43, 224, 0.2);
}

.page__contact-icon {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0e6ff 0%, #faf5ff 100%);
  border-radius: 14px;
  color: #7d2be0;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.page__contact-card:hover .page__contact-icon {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  transform: scale(1.15);
}

.page__contact-card h3 {
  margin: 0 0 1rem;
  color: #1f2428;
  font-size: 1.25rem;
  font-weight: 700;
}

.page__contact-link {
  display: block;
  color: #7d2be0;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.page__contact-link:hover {
  color: #8e0ac7;
  transform: scale(1.05);
}

.page__contact-card p {
  margin: 0;
  color: #5f6d75;
  font-size: 0.95rem;
  line-height: 1.6;
}

.page__contact-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.3);
}

.page__contact-action:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.4);
}

/* ============ CTA SECTION ============ */
.page__cta {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="rgba(255,255,255,0.05)"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>') repeat;
  opacity: 0.3;
}

.page__cta-inner {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.page__cta h2 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  animation: fadeInDown 0.6s ease-out;
}

.page__cta p {
  margin: 0 0 2.5rem;
  font-size: 1.1rem;
  opacity: 0.95;
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.page__cta-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.page__cta-btn {
  padding: 1rem 2.5rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  cursor: pointer;
}

.page__cta-btn--primary {
  background: #fff;
  color: #7d2be0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.page__cta-btn--primary:hover {
  background: #f0e6ff;
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

.page__cta-btn--secondary {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.page__cta-btn--secondary:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
}

/* ============ ANIMATIONS ============ */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
}

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
  .page__hero {
    padding: 4rem 1.5rem 3rem;
  }

  .page__cards,
  .page__contact {
    grid-template-columns: 1fr;
  }

  .page__cta-actions {
    flex-direction: column;
  }

  .page__cta-btn {
    width: 100%;
  }

  .page__hero-decoration {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }
}

@media (max-width: 640px) {
  .page__hero {
    padding: 3rem 1rem 2rem;
  }

  .page__title {
    font-size: 2rem;
  }

  .page__custom {
    padding: 3rem 1rem;
  }

  .page__cta {
    padding: 3rem 1rem;
  }

  .page__cta h2 {
    font-size: 1.75rem;
  }

  .page__card,
  .page__contact-card {
    padding: 1.5rem;
  }
}
</style>
