<script setup lang="ts">
import { ref } from 'vue'

const homelessnessExpanded = ref(false)

const toggleHomelessness = () => {
  homelessnessExpanded.value = !homelessnessExpanded.value
}
</script>

<template>
  <main class="about-page">
    <!-- Breadcrumb Navigation -->
    <RouterLink to="/" class="about-page__breadcrumb" aria-label="Return to home">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Home</span>
    </RouterLink>

    <section class="about-page__hero">
      <div class="about-page__inner">
        <section class="about-page__homelessness">
          <div class="about-page__homelessness-media">
            <img
              class="about-page__homelessness-photo about-page__homelessness-photo--top"
              src="/images/real1.jpeg"
              alt="Black and white portrait scene"
            />
            <img
              class="about-page__homelessness-photo about-page__homelessness-photo--bottom"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Portrait of a man in winter clothing"
            />
          </div>

          <div class="about-page__homelessness-copy">
            <p class="about-page__eyebrow">About Us</p>
            <h1>
              Supporting Individuals <span>Facing Homelessness</span>
            </h1>
            <p>
              Welcome to His Grace Foundation, where compassion meets action. Our
              mission is to provide a sanctuary for children, families, and
              individuals facing the challenges of homelessness and hardship.
            </p>

            <div
              id="homelessness-more"
              class="about-page__more-copy"
              :class="{ 'is-expanded': homelessnessExpanded }"
            >
              <p>
                Through our comprehensive programs, we offer shelter,
                essential services, and a community of care that fosters
                resilience and self-sufficiency. At His Grace Foundation, we are
                committed to creating lasting change and empowering those in
                need to achieve a brighter, more stable future.
              </p>
              <p>
                Our team works alongside local partners to provide practical
                support that meets people where they are. That includes help
                with housing, food, clothing, job readiness, and community
                connection so the path forward feels possible, steady, and
                human.
              </p>
            </div>

            <button
              class="about-page__more"
              type="button"
              :aria-expanded="homelessnessExpanded"
              :aria-controls="'homelessness-more'"
              @click="toggleHomelessness"
            >
              <span>{{ homelessnessExpanded ? 'Read Less' : 'Read More' }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </section>

        <div class="about-page__divider"></div>

        <div class="about-page__top">
          <div class="about-page__image">
            <img
              src="https://images.pexels.com/photos/8617558/pexels-photo-8617558.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Teacher with a child in a learning environment"
            />
          </div>

          <div class="about-page__purpose">
            <p class="about-page__eyebrow">Our Purpose</p>
            <h1>Building a world where every child can thrive</h1>
            <p>
              His Grace Foundation was created to support children and families
              through education, care, and practical community action. We want
              to remove barriers, open doors, and help people move forward with
              dignity.
            </p>
            <p>
              We focus on helping underserved communities access learning,
              resources, and encouragement that lasts beyond a single moment of
              need. Every child deserves an opportunity to reach their full potential.
            </p>
            <RouterLink class="about-page__purpose-link" to="/contact">
              Get Involved
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>
        </div>

        <div class="about-page__divider"></div>

        <section class="about-page__needs">
          <div class="about-page__needs-header">
            <h2>How We Support</h2>
            <p>We address core needs with compassion and practical solutions</p>
          </div>
          <div class="about-page__needs-grid">
            <article class="about-need-card about-need-card--housing">
              <div class="about-need-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Housing</h3>
              <p>
                We provide temporary and permanent housing for families and
                individuals facing homelessness and transitional needs.
              </p>
            </article>

            <article class="about-need-card about-need-card--food">
              <div class="about-need-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2c1.1 0 2 .9 2 2 0 2.3-1.5 4.5-2 6-.5-1.5-2-3.7-2-6 0-1.1.9-2 2-2z"/><path d="M7 14c-1.66 0-3 1.34-3 3 0 2 1 4 5 6.7.6.4 1.4.4 2 0C13 21 14 19 14 17c0-1.66-1.34-3-3-3s-4 0-4 0z"/>
                </svg>
              </div>
              <h3>Food & Nutrition</h3>
              <p>
                Nutritious and delicious meals are served to ensure no one goes hungry.
                We prioritize both nutrition and dignity.
              </p>
            </article>

            <article class="about-need-card about-need-card--clothing">
              <div class="about-need-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 4h12v2l-1 2v6l1 2v2H6v-2l1-2V8l-1-2V4z"/><path d="M7 16l-1 4h12l-1-4"/>
                </svg>
              </div>
              <h3>Clothing & Essentials</h3>
              <p>
                We offer quality clothing and essential items to help individuals 
                have appropriate clothing for various needs and seasons.
              </p>
            </article>

            <article class="about-need-card about-need-card--employment">
              <div class="about-need-card__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3>Employment & Skills</h3>
              <p>
                We connect individuals with employment opportunities and skills training,
                empowering them to build a sustainable future.
              </p>
            </article>
          </div>
        </section>

        <div class="about-page__divider"></div>

        <section class="about-page__action">
          <div class="about-page__action-head">
            <h2>Take Action Today</h2>
            <p>
              There are several ways you can get involved with His Grace Foundation. 
              Below are the most popular ways to make a direct impact.
            </p>
          </div>

          <div class="about-page__cards">
            <article class="about-action-card">
              <p class="about-action-card__eyebrow">Volunteer your time</p>
              <p>
                Join us on an upcoming trip or contact us to learn more about
                volunteer opportunities in your area.
              </p>
              <RouterLink to="/contact">Contact Us</RouterLink>
            </article>

            <article class="about-action-card">
              <p class="about-action-card__eyebrow">Give / Donate</p>
              <p>
                Money helps fund trips, supplies, and programs for children and
                families who need consistent support.
              </p>
              <RouterLink to="/donations">Donate Today</RouterLink>
            </article>

            <article class="about-action-card">
              <p class="about-action-card__eyebrow">Spread the word</p>
              <p>
                We’re always looking for partners and advocates who can help
                bring awareness to children in need.
              </p>
              <RouterLink to="/volunteer">Join Us</RouterLink>
            </article>
          </div>
        </section>

        <div class="about-page__divider"></div>

        <section class="about-page__social">
          <div class="about-page__social-header">
            <h2>See Our Impact</h2>
            <p>Follow us on Instagram to see real stories and the difference we're making daily</p>
          </div>
          <div class="about-page__gallery">
            <img
              src="https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Instagram gallery image one"
            />
            <img
              src="https://images.pexels.com/photos/8617511/pexels-photo-8617511.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Instagram gallery image two"
            />
            <img
              src="https://images.pexels.com/photos/8078383/pexels-photo-8078383.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Instagram gallery image three"
            />
            <img
              src="https://images.pexels.com/photos/6646956/pexels-photo-6646956.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Instagram gallery image four"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  background: #fff;
}

/* ============ BREADCRUMB ============ */
.about-page__breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0 0 1.5rem;
  padding: 0.5rem 1rem;
  color: #7d2be0;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.about-page__breadcrumb:hover {
  background: rgba(125, 43, 224, 0.1);
  transform: translateX(-4px);
}

.about-page__breadcrumb svg {
  transition: transform 0.3s ease;
}

.about-page__breadcrumb:hover svg {
  transform: translateX(-2px);
}

/* ============ HERO SECTION ============ */
.about-page__hero {
  padding: 3rem 1.5rem 4rem;
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
}

.about-page__inner {
  max-width: 1160px;
  margin: 0 auto;
}

/* ============ HOMELESSNESS SECTION ============ */
.about-page__homelessness {
  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1.1fr);
  gap: 3rem;
  align-items: center;
  animation: fadeInUp 0.6s ease-out;
}

.about-page__homelessness-media {
  position: relative;
  min-height: 28rem;
  animation: slideInLeft 0.7s ease-out;
}

.about-page__homelessness-photo {
  display: block;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(17, 24, 39, 0.15);
  transition: all 0.5s ease;
}

.about-page__homelessness-photo--top {
  width: 58%;
  height: 13rem;
  position: absolute;
  top: 0;
  left: 3rem;
  filter: grayscale(1);
}

.about-page__homelessness-photo--bottom {
  width: 48%;
  height: 16rem;
  position: absolute;
  left: 7rem;
  top: 8rem;
  border: 6px solid #fff;
  box-shadow: 0 20px 40px rgba(17, 24, 39, 0.2);
}

.about-page__homelessness-media:hover .about-page__homelessness-photo--bottom {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(125, 43, 224, 0.2);
}

.about-page__homelessness-copy {
  padding: 0 0.5rem;
  animation: slideInRight 0.7s ease-out;
}

.about-page__eyebrow {
  margin: 0 0 1rem;
  color: #8e0ac7;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.about-page__homelessness-copy h1,
.about-page__purpose h1 {
  margin: 0 0 1.2rem;
  color: #1f2428;
  font-size: clamp(2.3rem, 4vw, 3.75rem);
  line-height: 1.1;
  font-weight: 900;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.about-page__homelessness-copy h1 span {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-page__homelessness-copy p,
.about-page__purpose p {
  margin: 1rem 0 0;
  color: #4e5962;
  line-height: 1.8;
  font-size: 0.98rem;
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.about-page__more-copy {
  display: grid;
  gap: 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
}

.about-page__more-copy.is-expanded {
  max-height: 20rem;
  opacity: 1;
}

.about-page__more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  border: 2px solid #8e0ac7;
  background: linear-gradient(135deg, rgba(142, 10, 199, 0.08) 0%, rgba(125, 43, 224, 0.05) 100%);
  color: #7d2be0;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.about-page__more:hover {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.3);
}

.about-page__more svg {
  transition: transform 0.3s ease;
}

.about-page__more.is-expanded svg,
.about-page__more:hover svg {
  transform: rotate(180deg);
}

/* ============ DIVIDER ============ */
.about-page__divider {
  width: 100%;
  height: 1px;
  margin: 4rem 0;
  background: linear-gradient(90deg, transparent 0%, #e0e0e0 50%, transparent 100%);
}

/* ============ PURPOSE SECTION ============ */
.about-page__top {
  display: grid;
  grid-template-columns: minmax(300px, 0.95fr) minmax(320px, 1.05fr);
  gap: 3rem;
  align-items: center;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.about-page__image img {
  display: block;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 48px rgba(17, 24, 39, 0.15);
  object-fit: cover;
  transition: all 0.5s ease;
}

.about-page__image:hover img {
  transform: scale(1.02);
  box-shadow: 0 24px 56px rgba(125, 43, 224, 0.2);
}

.about-page__purpose {
  padding: 0 0.5rem;
  animation: slideInRight 0.7s ease-out 0.2s backwards;
}

.about-page__purpose-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
  padding: 0.85rem 1.8rem;
  border-radius: 10px;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 6px 16px rgba(125, 43, 224, 0.3);
  border: 2px solid transparent;
}

.about-page__purpose-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(125, 43, 224, 0.4);
}

.about-page__purpose-link svg {
  transition: transform 0.3s ease;
}

.about-page__purpose-link:hover svg {
  transform: translateX(3px);
}

/* ============ NEEDS SECTION ============ */
.about-page__needs {
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.about-page__needs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-page__needs-header h2 {
  margin: 0 0 0.8rem;
  color: #1f2428;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  line-height: 1.2;
}

.about-page__needs-header p {
  margin: 0;
  color: #5f6d75;
  font-size: 1.05rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.about-page__needs-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

.about-need-card {
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #fafbff 0%, #f5f0ff 100%);
  border: 1px solid #e8e4f3;
  border-radius: 14px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
}

.about-need-card--housing {
  animation-delay: 0.1s;
}

.about-need-card--food {
  animation-delay: 0.2s;
}

.about-need-card--clothing {
  animation-delay: 0.3s;
}

.about-need-card--employment {
  animation-delay: 0.4s;
}

.about-need-card::before {
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

.about-need-card:hover::before {
  transform: scaleX(1);
}

.about-need-card:hover {
  transform: translateY(-8px);
  border-color: #7d2be0;
  box-shadow: 0 16px 40px rgba(125, 43, 224, 0.15);
  background: linear-gradient(135deg, #fff 0%, #f8f0ff 100%);
}

.about-need-card__icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  border-radius: 12px;
  color: #fff;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.about-need-card:hover .about-need-card__icon {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.3);
}

.about-need-card h3 {
  margin: 0 0 0.8rem;
  font-size: 1.25rem;
  color: #1f2428;
  font-weight: 800;
}

.about-need-card p {
  margin: 0;
  color: #5b6670;
  line-height: 1.75;
  font-size: 0.95rem;
}

/* ============ ACTION SECTION ============ */
.about-page__action {
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.about-page__action-head {
  text-align: center;
  margin-bottom: 3.5rem;
}

.about-page__action-head h2 {
  margin: 0 0 1rem;
  color: #1f2428;
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.2;
  font-weight: 900;
}

.about-page__action-head p {
  margin: 0;
  color: #5f6d75;
  font-size: 1.05rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.about-page__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.about-action-card {
  padding: 2rem;
  border: 1px solid #e8ecef;
  background: linear-gradient(135deg, #fff 0%, #f9f5ff 100%);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(17, 24, 39, 0.05);
  animation: fadeInUp 0.6s ease-out backwards;
}

.about-action-card:nth-child(1) {
  animation-delay: 0.1s;
}

.about-action-card:nth-child(2) {
  animation-delay: 0.2s;
}

.about-action-card:nth-child(3) {
  animation-delay: 0.3s;
}

.about-action-card:hover {
  transform: translateY(-10px);
  border-color: #7d2be0;
  box-shadow: 0 16px 40px rgba(125, 43, 224, 0.15);
}

.about-action-card__icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0e6ff 0%, #faf5ff 100%);
  border-radius: 12px;
  color: #7d2be0;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.about-action-card:hover .about-action-card__icon {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  transform: scale(1.15);
}

.about-action-card__eyebrow {
  margin: 0 0 0.75rem;
  color: #8e0ac7;
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.about-action-card p {
  margin: 0 0 1.5rem;
  color: #4e5962;
  line-height: 1.75;
  font-size: 0.95rem;
}

.about-action-card p:last-child {
  margin-bottom: 0;
}

.about-action-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.25);
}

.about-action-card__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.35);
  gap: 1rem;
}

.about-action-card__link svg {
  transition: transform 0.3s ease;
}

.about-action-card__link:hover svg {
  transform: translateX(3px);
}

/* ============ SOCIAL SECTION ============ */
.about-page__social {
  animation: fadeInUp 0.6s ease-out 0.5s backwards;
}

.about-page__social-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-page__social-header h2 {
  margin: 0 0 0.8rem;
  color: #1f2428;
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.2;
  font-weight: 900;
}

.about-page__social-header p {
  margin: 0;
  color: #5f6d75;
  font-size: 1.05rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.about-page__gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.about-page__gallery img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.1);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  animation: fadeInUp 0.6s ease-out backwards;
}

.about-page__gallery img:nth-child(1) {
  animation-delay: 0.1s;
}

.about-page__gallery img:nth-child(2) {
  animation-delay: 0.2s;
}

.about-page__gallery img:nth-child(3) {
  animation-delay: 0.3s;
}

.about-page__gallery img:nth-child(4) {
  animation-delay: 0.4s;
}

.about-page__gallery img:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 16px 40px rgba(125, 43, 224, 0.2);
}

/* ============ ANIMATIONS ============ */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .about-page__homelessness,
  .about-page__top,
  .about-page__needs-grid,
  .about-page__gallery {
    grid-template-columns: 1fr;
  }

  .about-page__homelessness-media {
    min-height: 22rem;
  }

  .about-page__homelessness-photo--top {
    left: 0;
  }

  .about-page__homelessness-photo--bottom {
    left: 2rem;
  }

  .about-page__gallery img {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .about-page__breadcrumb {
    margin-left: 1rem;
  }

  .about-page__hero {
    padding: 2rem 1rem 3rem;
  }

  .about-page__homelessness,
  .about-page__top {
    gap: 2rem;
  }

  .about-page__divider {
    margin: 3rem 0;
  }

  .about-page__cards,
  .about-page__gallery {
    grid-template-columns: 1fr;
  }

  .about-page__gallery img {
    height: 240px;
  }
}

@media (max-width: 640px) {
  .about-page__hero {
    padding: 1.5rem 1rem 2.5rem;
  }

  .about-page__homelessness-photo--bottom {
    left: 1rem;
  }

  .about-page__needs-grid {
    gap: 1.5rem;
  }

  .about-page__divider {
    margin: 2.5rem 0;
  }

  .about-page__action-head h2,
  .about-page__social-header h2 {
    font-size: 1.75rem;
  }
}
</style>
