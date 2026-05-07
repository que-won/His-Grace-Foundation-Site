<script setup>
const activities = [
  {
    icon: "water",
    title: "Clean Water Access",
    text: "We support safe water initiatives that reduce preventable illness and help families spend less time searching for basic needs.",
    image: "/images/real1.jpeg",
    alt: "Children and families accessing clean water support",
  },
  {
    icon: "book",
    title: "Education Support",
    text: "We help children stay in school through learning materials, school fees support, uniforms, mentoring, and encouragement.",
    image: "/images/real1.jpeg",
    alt: "Child receiving education support",
  },
  {
    icon: "heart",
    title: "Food and Family Care",
    text: "We provide food relief and family support for households facing hardship, with care that protects dignity and hope.",
    image: "/images/real1.jpeg",
    alt: "Family receiving food and care support",
  },
  {
    icon: "health",
    title: "Health Outreach",
    text: "We connect communities with basic wellness checks, health guidance, referrals, and practical support for vulnerable families.",
    image: "/images/real1.jpeg",
    alt: "Community health outreach activity",
  },
];
</script>

<template>
  <section id="activities" class="activities-section" aria-labelledby="activities-title">
    <div class="activities-section__inner">
      <div class="activities-section__header">
        <div>
          <p class="activities-section__eyebrow">Our core activities</p>
          <h2 id="activities-title">Focused initiatives creating lasting change across Africa</h2>
        </div>
        <p>
          We focus on practical initiatives that strengthen families, protect
          children, and create lasting positive change in underserved
          communities across Africa.
        </p>
      </div>

      <div class="activities-section__feature">
        <div class="activities-section__feature-media">
          <img src="/images/real1.jpeg" alt="His Grace Foundation community support work" />
          <div class="activities-section__feature-badge">
            <strong>Community first</strong>
            <span>Care that reaches daily life</span>
          </div>
        </div>

        <div class="activities-section__feature-copy">
          <p class="activities-section__eyebrow">What guides the work</p>
          <h3>We meet urgent needs while helping families move toward stability.</h3>
          <p>
            Every activity is shaped by real conversations with communities.
            The goal is simple: respond with compassion, organize support well,
            and keep showing up after the first visit.
          </p>
          <a href="/projects" aria-label="View His Grace Foundation projects">
            <span>View projects</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div class="activities-section__grid">
        <article
          v-for="activity in activities"
          :key="activity.title"
          class="activity-card"
        >
          <div class="activity-card__media">
            <img :src="activity.image" :alt="activity.alt" />
          </div>

          <div class="activity-card__copy">
            <span class="activity-card__icon" aria-hidden="true">
              <svg
                v-if="activity.icon === 'water'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2.5s6 6.3 6 11.2A6 6 0 0 1 6 13.7c0-4.9 6-11.2 6-11.2Z" />
              </svg>
              <svg
                v-else-if="activity.icon === 'book'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
              </svg>
              <svg
                v-else-if="activity.icon === 'heart'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
              <svg
                v-else
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </span>
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.activities-section {
  padding: clamp(3rem, 5vw, 5rem) 1.5rem;
  background: #fff;
}

.activities-section__inner {
  max-width: 1160px;
  margin: 0 auto;
}

.activities-section__header {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.72fr);
  gap: 2rem;
  align-items: end;
  margin-bottom: 2rem;
}

.activities-section__eyebrow {
  margin: 0 0 0.65rem;
  color: #ff5d23;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.activities-section__header h2 {
  margin: 0;
  color: #202020;
  font-size: clamp(2rem, 4vw, 3.35rem);
  line-height: 1.03;
  letter-spacing: 0;
  font-weight: 900;
}

.activities-section__header p {
  margin: 0;
  color: #626262;
  font-size: 1rem;
  line-height: 1.75;
}

.activities-section__feature {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.75fr);
  gap: 1.15rem;
  margin-bottom: 1.15rem;
}

.activities-section__feature-media {
  position: relative;
  min-height: 24rem;
  overflow: hidden;
  background: #1f1f1f;
  border-radius: 0.45rem;
  box-shadow: 0 18px 42px rgba(18, 29, 27, 0.12);
}

.activities-section__feature-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.55));
}

.activities-section__feature-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 480ms ease;
}

.activities-section__feature:hover .activities-section__feature-media img {
  transform: scale(1.05);
}

.activities-section__feature-badge {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 1;
  display: grid;
  gap: 0.2rem;
  max-width: 13rem;
  padding: 1rem;
  background: #fff;
  color: #202020;
  border-left: 0.35rem solid #f0b62a;
  box-shadow: 0 16px 34px rgba(18, 29, 27, 0.18);
}

.activities-section__feature-badge strong {
  font-size: 1rem;
  font-weight: 900;
}

.activities-section__feature-badge span {
  color: #626262;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.35;
}

.activities-section__feature-copy {
  display: grid;
  align-content: center;
  padding: clamp(1.35rem, 3vw, 2rem);
  background: #1f1f1f;
  color: #fff;
  border-radius: 0.45rem;
}

.activities-section__feature-copy h3 {
  margin: 0;
  color: #fff;
  font-size: clamp(1.75rem, 3vw, 2.55rem);
  line-height: 1.05;
  letter-spacing: 0;
  font-weight: 900;
}

.activities-section__feature-copy p:last-of-type {
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.98rem;
  line-height: 1.75;
}

.activities-section__feature-copy a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  min-height: 3rem;
  margin-top: 1.2rem;
  padding: 0.85rem 1.1rem;
  background: #ff5d23;
  color: #fff;
  border-radius: 8px;
  font-size: 0.94rem;
  font-weight: 900;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.activities-section__feature-copy a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

.activities-section__feature-copy a:hover,
.activities-section__feature-copy a:focus-visible {
  transform: translateY(-2px);
  background: #d84315;
  box-shadow: 0 8px 20px rgba(255, 93, 35, 0.3);
}

.activities-section__feature-copy a:hover::before {
  transform: translateY(0);
}

.activities-section__feature-copy a:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.activities-section__feature-copy svg {
  width: 1rem;
  height: 1rem;
}

.activities-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.15rem;
}

.activity-card {
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.08);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;
}

.activity-card:hover {
  transform: translateY(-0.3rem);
  border-color: rgba(255, 93, 35, 0.3);
  box-shadow: 0 20px 42px rgba(18, 29, 27, 0.12);
}

.activity-card__media {
  height: 11rem;
  overflow: hidden;
  background: #1f1f1f;
}

.activity-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease;
}

.activity-card:hover .activity-card__media img {
  transform: scale(1.06);
}

.activity-card__copy {
  display: grid;
  gap: 0.75rem;
  padding: 1.15rem;
}

.activity-card__icon {
  display: grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  margin-top: -2.6rem;
  background: #ff5d23;
  color: #fff;
  border: 0.22rem solid #fff;
  border-radius: 50%;
  box-shadow: 0 10px 22px rgba(255, 93, 35, 0.22);
}

.activity-card__icon svg {
  width: 1.3rem;
  height: 1.3rem;
}

.activity-card h3 {
  margin: 0;
  color: #202020;
  font-size: 1.12rem;
  line-height: 1.2;
  font-weight: 900;
}

.activity-card p {
  margin: 0;
  color: #626262;
  font-size: 0.92rem;
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .activities-section__header,
  .activities-section__feature {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .activities-section__header {
    margin-bottom: 1.2rem;
  }

  .activities-section__feature-media {
    min-height: 22rem;
  }

  .activities-section__feature-copy {
    padding: 2rem;
  }

  .activities-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .activities-section {
    padding: 2.5rem 1.25rem;
  }

  .activities-section__header {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .activities-section__header h2 {
    font-size: clamp(1.65rem, 5vw, 2.3rem);
  }

  .activities-section__header p {
    font-size: 0.93rem;
  }

  .activities-section__feature {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .activities-section__feature-media {
    min-height: 19rem;
  }

  .activities-section__feature-badge {
    right: 1rem;
    bottom: 1rem;
    max-width: 11.5rem;
    padding: 0.9rem;
  }

  .activities-section__feature-copy {
    padding: 1.5rem;
  }

  .activities-section__feature-copy h3 {
    font-size: clamp(1.45rem, 4vw, 2.1rem);
  }

  .activities-section__feature-copy p:last-of-type {
    font-size: 0.93rem;
    margin-top: 0.8rem;
  }

  .activities-section__feature-copy a {
    margin-top: 1rem;
    padding: 0.8rem 1.15rem;
    font-size: 0.9rem;
    min-height: 2.7rem;
  }

  .activities-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .activity-card {
    border-radius: 8px;
  }

  .activity-card__media {
    height: 10.5rem;
  }

  .activity-card__copy {
    padding: 1rem;
    gap: 0.65rem;
  }

  .activity-card__icon {
    width: 2.7rem;
    height: 2.7rem;
    margin-top: -2.35rem;
  }

  .activity-card__icon svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .activity-card h3 {
    font-size: 1.08rem;
    margin-top: 0.3rem;
  }

  .activity-card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .activities-section {
    padding: 2rem 1rem;
  }

  .activities-section__eyebrow {
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
  }

  .activities-section__header {
    margin-bottom: 1.2rem;
  }

  .activities-section__header h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    line-height: 1.15;
  }

  .activities-section__header p {
    font-size: 0.88rem;
    line-height: 1.6;
  }

  .activities-section__feature-media {
    min-height: 16.5rem;
  }

  .activities-section__feature-badge {
    right: 0.8rem;
    bottom: 0.8rem;
    max-width: 10.5rem;
    padding: 0.85rem;
  }

  .activities-section__feature-badge strong {
    font-size: 0.92rem;
  }

  .activities-section__feature-badge span {
    font-size: 0.76rem;
  }

  .activities-section__feature-copy {
    padding: 1.2rem;
  }

  .activities-section__feature-copy h3 {
    font-size: clamp(1.35rem, 5vw, 1.8rem);
    margin-bottom: 0.2rem;
  }

  .activities-section__feature-copy p:last-of-type {
    font-size: 0.85rem;
  }

  .activities-section__feature-copy a {
    margin-top: 0.9rem;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    min-height: 2.5rem;
  }

  .activities-section__grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .activity-card {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 10px 24px rgba(18, 29, 27, 0.08);
  }

  .activity-card__media {
    height: 11rem;
    order: 1;
  }

  .activity-card__copy {
    padding: 1rem;
    order: 2;
  }

  .activity-card__icon {
    width: 2.6rem;
    height: 2.6rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .activity-card__icon svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  .activity-card h3 {
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
  }

  .activity-card p {
    font-size: 0.87rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .activities-section {
    padding: 1.75rem 0.85rem;
  }

  .activities-section__eyebrow {
    font-size: 0.7rem;
  }

  .activities-section__header h2 {
    font-size: clamp(1.35rem, 7vw, 1.75rem);
  }

  .activities-section__header p {
    font-size: 0.82rem;
  }

  .activities-section__feature-media {
    min-height: 14rem;
  }

  .activities-section__feature-badge {
    right: 0.75rem;
    bottom: 0.75rem;
    max-width: 9.5rem;
    padding: 0.8rem;
  }

  .activities-section__feature-copy {
    padding: 1rem;
  }

  .activities-section__feature-copy h3 {
    font-size: clamp(1.2rem, 6vw, 1.5rem);
  }

  .activities-section__feature-copy p:last-of-type {
    font-size: 0.82rem;
    margin-top: 0.7rem;
  }

  .activities-section__feature-copy a {
    font-size: 0.8rem;
    padding: 0.65rem 0.95rem;
    min-height: 2.4rem;
    margin-top: 0.8rem;
  }

  .activity-card {
    border-radius: 6px;
  }

  .activity-card__media {
    height: 9.5rem;
  }

  .activity-card__copy {
    padding: 0.9rem;
    gap: 0.5rem;
  }

  .activity-card__icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  .activity-card__icon svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  .activity-card h3 {
    font-size: 1rem;
  }

  .activity-card p {
    font-size: 0.82rem;
  }
}
</style>

  .activity-card {
    border-radius: 0.35rem;
  }

  .activity-card__media {
    height: 9rem;
  }

  .activity-card__icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: -2.1rem;
  }

  .activity-card__icon svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  .activity-card h3 {
    font-size: 1rem;
  }

  .activity-card p {
    font-size: 0.85rem;
  }

  .activity-card__copy {
    padding: 0.9rem;
    gap: 0.65rem;
  }
}
</style>
