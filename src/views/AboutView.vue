<script setup lang="ts">
import { ref } from 'vue'

const homelessnessExpanded = ref(false)

const toggleHomelessness = () => {
  homelessnessExpanded.value = !homelessnessExpanded.value
}
</script>

<template>
  <main class="about-page">
    <section class="about-page__hero">
      <div class="about-page__inner">
        <section class="about-page__homelessness">
          <div class="about-page__homelessness-media">
            <img
              class="about-page__homelessness-photo about-page__homelessness-photo--top"
              src="../../public/images/real1.jpeg"
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
              Welcome to Haven of Hope, where compassion meets action. Our
              mission is to provide a sanctuary for children, families, and
              individuals facing the challenges of homelessness.
            </p>

            <div
              id="homelessness-more"
              class="about-page__more-copy"
              :class="{ 'is-expanded': homelessnessExpanded }"
            >
              <p>
                Through our comprehensive programs, we offer shelter,
                essential services, and a community of care that fosters
                resilience and self-sufficiency. At Haven of Hope, we are
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
              {{ homelessnessExpanded ? 'Read Less' : 'Read More' }}
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
              need.
            </p>
            <RouterLink class="about-page__purpose-link" to="/contact">
              Contact Us
            </RouterLink>
          </div>
        </div>

        <div class="about-page__divider"></div>

        <section class="about-page__needs">
          <div class="about-page__needs-grid">
            <article class="about-need-card">
              <h2>Housing</h2>
              <p>
                We provide temporary and permanent housing for families and
                individuals facing homelessness.
              </p>
              <div class="about-need-card__icon" aria-hidden="true">⌂</div>
            </article>

            <article class="about-need-card">
              <h2>Food</h2>
              <p>
                Nutritious and delicious meals are served daily in our shelters
                to ensure no one goes hungry.
              </p>
              <div class="about-need-card__icon" aria-hidden="true">◔</div>
            </article>

            <article class="about-need-card">
              <h2>Clothing</h2>
              <p>
                We offer a range of clothing options to help individuals have
                appropriate clothing for various needs.
              </p>
              <div class="about-need-card__icon" aria-hidden="true">⌂</div>
            </article>

            <article class="about-need-card">
              <h2>Employment</h2>
              <p>
                We connect individuals with employment opportunities,
                empowering them to build a sustainable future.
              </p>
              <div class="about-need-card__icon" aria-hidden="true">▭</div>
            </article>
          </div>
        </section>

        <div class="about-page__divider"></div>

        <section class="about-page__action">
          <div class="about-page__action-head">
            <h2>Take Action</h2>
            <p>
              There are several ways you can get involved with His Grace
              Foundation. Below are a few of the most popular ways.
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
          <h2>Connect with us on Instagram</h2>
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

.about-page__hero {
  padding: 2.5rem 1.5rem 4rem;
}

.about-page__inner {
  max-width: 1160px;
  margin: 0 auto;
}

.about-page__homelessness {
  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1.1fr);
  gap: 2.5rem;
  align-items: center;
}

.about-page__homelessness-media {
  position: relative;
  min-height: 28rem;
}

.about-page__homelessness-photo {
  display: block;
  object-fit: cover;
  box-shadow: 0 16px 30px rgba(17, 24, 39, 0.12);
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
  border: 8px solid #fff;
}

.about-page__homelessness-copy {
  padding: 0 0.5rem;
}

.about-page__eyebrow {
  margin: 0 0 0.55rem;
  color: #f2b42d;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.about-page__homelessness-copy h1,
.about-page__purpose h1 {
  margin: 0;
  color: #1f2428;
  font-size: clamp(2.3rem, 4vw, 3.75rem);
  line-height: 1.05;
}

.about-page__homelessness-copy h1 span {
  color: #0f8d63;
}

.about-page__homelessness-copy p,
.about-page__purpose p {
  margin: 1rem 0 0;
  color: #4e5962;
  line-height: 1.75;
  font-size: 0.98rem;
}

.about-page__more-copy {
  display: grid;
  gap: 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.about-page__more-copy.is-expanded {
  max-height: 16rem;
}

.about-page__more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  padding: 0.85rem 1.15rem;
  border-radius: 10px;
  border: 1px solid #0f8d63;
  background: #fff;
  color: #0f8d63;
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;
}

.about-page__divider {
  width: 100%;
  height: 1px;
  margin: 3rem 0;
  background: #efdfdf;
}

.about-page__top {
  display: grid;
  grid-template-columns: minmax(300px, 0.95fr) minmax(320px, 1.05fr);
  gap: 2rem;
  align-items: center;
}

.about-page__image img {
  display: block;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 16px 30px rgba(17, 24, 39, 0.12);
  object-fit: cover;
}

.about-page__purpose {
  padding: 0 0.5rem;
}

.about-page__purpose-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  padding: 0.85rem 1.15rem;
  border-radius: 10px;
  border: 1px solid #0f8d63;
  color: #0f8d63;
  text-decoration: none;
  font-weight: 800;
}

.about-page__action {
  display: grid;
  gap: 1.6rem;
}

.about-page__action-head {
  display: grid;
  gap: 0.5rem;
}

.about-page__action-head h2,
.about-page__social h2 {
  margin: 0;
  color: #1f2428;
  font-size: clamp(1.6rem, 2.4vw, 2.25rem);
  line-height: 1.1;
}

.about-page__action-head p {
  max-width: 56ch;
  margin: 0;
  color: #4e5962;
  line-height: 1.7;
}

.about-page__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
}

.about-action-card {
  padding: 1.25rem;
  border: 1px solid #eadcc7;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 18px rgba(17, 24, 39, 0.04);
}

.about-action-card__eyebrow {
  margin: 0 0 0.75rem;
  color: #f2b42d;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.about-action-card p {
  margin: 0;
  color: #4e5962;
  line-height: 1.7;
}

.about-action-card a {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  background: #f2b42d;
  color: #1f2428;
  font-weight: 800;
  text-decoration: none;
}

.about-page__needs {
  display: grid;
}

.about-page__needs-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border: 1px solid #e8ecef;
}

.about-need-card {
  min-height: 16rem;
  padding: 1.5rem 1.25rem;
  border-right: 1px solid #e8ecef;
}

.about-need-card:last-child {
  border-right: 0;
}

.about-need-card h2 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
  color: #1f2428;
}

.about-need-card p {
  margin: 0;
  color: #5b6670;
  line-height: 1.65;
}

.about-need-card__icon {
  margin-top: 1.5rem;
  color: #0f8d63;
  font-size: 2rem;
  font-weight: 800;
}

.about-page__social {
  display: grid;
  gap: 1.25rem;
}

.about-page__social h2 {
  text-align: center;
}

.about-page__gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.about-page__gallery img {
  display: block;
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.08);
}

@media (max-width: 900px) {
  .about-page__homelessness,
  .about-page__top,
  .about-page__cards,
  .about-page__gallery,
  .about-page__needs-grid {
    grid-template-columns: 1fr;
  }

  .about-page__homelessness-media {
    min-height: 22rem;
  }

  .about-page__homelessness-photo--top {
    left: 0;
  }

  .about-page__homelessness-photo--bottom {
    left: 3rem;
  }

  .about-page__gallery img {
    height: 14rem;
  }
}

@media (max-width: 640px) {
  .about-page__hero {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .about-page__divider {
    margin: 2rem 0;
  }

  .about-need-card {
    border-right: 0;
    border-bottom: 1px solid #e8ecef;
  }

  .about-need-card:last-child {
    border-bottom: 0;
  }
}
</style>
