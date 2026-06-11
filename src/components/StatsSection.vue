<script setup>
const helpOptions = [
  {
    icon: "media",
    title: "Education Advancement",
    text: "Support scholarships, grants, and skill-building workshops that increase access to educational resources and opportunities for underserved youth.",
    href: "/help",
    action: "Support education",
  },
  {
    icon: "mobilization",
    title: "Health & Wellness",
    text: "Help organize health fairs, mental health resources, and partnerships with healthcare providers to improve community wellness.",
    href: "/volunteer",
    action: "Support health",
  },
  {
    icon: "projection",
    title: "Economic Development",
    text: "Enable job training programs and small business mentorship that foster economic stability and self-sufficiency.",
    href: "/projects",
    action: "Support economy",
  },
  {
    icon: "support",
    title: "Community Engagement",
    text: "Strengthen community bonds by supporting volunteer programs and service projects that drive lasting change.",
    href: "#donation-impact",
    action: "Get involved",
  },
];

const donationTiers = [
  {
    amount: "$25",
    title: "Educational Support",
    text: "Provides school supplies and learning materials for underserved students.",
    href: "/contact",
  },
  {
    amount: "$50",
    title: "Health & Wellness",
    text: "Supports community health fairs and wellness screening programs.",
    href: "/contact",
  },
  {
    amount: "$100",
    title: "Skill Building",
    text: "Funds workshops and training programs for economic empowerment and skill development.",
    href: "/contact",
  },
  {
    amount: "$250",
    title: "Community Engagement",
    text: "Supports volunteer programs and community service initiatives for lasting impact.",
    href: "/contact",
  },
];

const trustPoints = [
  "Donations advance our four strategic goals for community empowerment.",
  "Support is organized with transparency, dignity, and accountability.",
  "Every gift fosters dignity, resilience, and hope in underprivileged communities.",
];
</script>

<template>
  <main class="donations-page">
    <section class="donations-hero" aria-labelledby="donations-title">
      <div class="donations-hero__inner">
        <p class="donations-page__eyebrow">His Grace Foundation</p>
        <h1 id="donations-title">Support Our Mission</h1>
        <p>
          Your donations empower underprivileged communities through our four strategic goals: education, health, economic development, and community engagement.
        </p>
        <div class="donations-hero__actions">
          <a href="#donation-impact">
            <span>Choose amount</span>
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
          <a href="/contact">Contact us</a>
        </div>
      </div>
    </section>

    <section id="donation-help" class="donations-help" aria-labelledby="help-title">
      <div class="donations-help__copy">
        <p class="donations-page__eyebrow">Four Ways to Make an Impact</p>
        <h2 id="help-title">How Can You Help?</h2>
        <p>
          Your support helps us move faster, reach further, and serve more
          families with education, care, food relief, health outreach, and
          practical assistance.
        </p>

        <div class="donations-help__grid">
          <a
            v-for="option in helpOptions"
            :key="option.title"
            :href="option.href"
            class="donations-help__card"
          >
            <span class="donations-help__icon" aria-hidden="true">
              <svg
                v-if="option.icon === 'media'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="m10 9 5 3-5 3V9Z" />
              </svg>
              <svg
                v-else-if="option.icon === 'mobilization'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <svg
                v-else-if="option.icon === 'projection'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
                <circle cx="12" cy="12" r="9" />
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
                <path d="M12 21s8-4.7 8-11a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 6.3 10 11 10 11Z" />
              </svg>
            </span>
            <h3>{{ option.title }}</h3>
            <p>{{ option.text }}</p>
            <strong>{{ option.action }}</strong>
          </a>
        </div>
      </div>

      <div class="donations-help__media">
        <img src="/images/real1.jpeg" alt="Child supported by His Grace Foundation donations" />
        <a href="#donation-impact" aria-label="View donation impact options">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        </a>
      </div>
    </section>

    <section id="donation-impact" class="donations-impact" aria-labelledby="impact-title">
      <div class="donations-impact__header">
        <p class="donations-page__eyebrow">Giving impact</p>
        <h2 id="impact-title">Choose a gift that matches the care you want to give.</h2>
      </div>

      <div class="donations-impact__grid">
        <article
          v-for="tier in donationTiers"
          :key="tier.amount"
          class="donations-impact__card"
        >
          <strong>{{ tier.amount }}</strong>
          <h3>{{ tier.title }}</h3>
          <p>{{ tier.text }}</p>
          <a :href="tier.href" :aria-label="`Donate ${tier.amount} for ${tier.title}`">
            <span>Donate</span>
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
        </article>
      </div>
    </section>

    <section id="donation-accountability" class="donations-trust" aria-label="Donation accountability">
      <div class="donations-trust__media">
        <img src="/images/real1.jpeg" alt="His Grace Foundation volunteers serving families" />
      </div>

      <div class="donations-trust__copy">
        <p class="donations-page__eyebrow">Give with confidence</p>
        <h2>Your gift is handled with care, purpose, and accountability.</h2>
        <p>
          Donations help us respond to real needs while building steady
          relationships with families and communities. We focus on practical
          help that people can feel immediately and support that keeps moving
          beyond one visit.
        </p>

        <ul>
          <li v-for="point in trustPoints" :key="point">{{ point }}</li>
        </ul>

        <div class="donations-trust__actions">
          <a href="/contact">Talk to our team</a>
          <a href="/projects">See active projects</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.donations-page {
  background: #fff;
  color: #1e2430;
}

.donations-page__eyebrow {
  margin: 0 0 0.75rem;
  color: #5f6f82;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.donations-hero {
  padding: 3.5rem 1.5rem 3rem;
  background: #fafafa;
  border-bottom: 1px solid #eee;
}

.donations-hero__inner,
.donations-help,
.donations-impact,
.donations-trust {
  max-width: 1160px;
  margin: 0 auto;
}

.donations-hero h1 {
  margin: 0;
  color: #172033;
  font-size: clamp(3.5rem, 7vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: 0;
  font-weight: 900;
}

.donations-hero__inner > p {
  max-width: 30rem;
  margin: 1.45rem 0 0;
  color: #4f5f73;
  font-size: 1.1rem;
  line-height: 1.75;
}

.donations-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.6rem;
}

.donations-hero__actions a,
.donations-trust__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.82rem 1.1rem;
  border-radius: 999px;
  font-size: 0.94rem;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.donations-hero__actions a:first-child,
.donations-trust__actions a:first-child {
  background: #7b21e8;
  color: #fff;
}

.donations-hero__actions a:last-child,
.donations-trust__actions a:last-child {
  background: #fff;
  color: #7b21e8;
  border: 1px solid rgba(123, 33, 232, 0.18);
}

.donations-hero__actions a:hover,
.donations-trust__actions a:hover {
  transform: translateY(-0.14rem);
}

.donations-hero__actions svg {
  width: 1rem;
  height: 1rem;
}

.donations-help {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.82fr);
  overflow: hidden;
  margin-top: 5rem;
  background: linear-gradient(135deg, #7b21e8 0%, #b000d8 100%);
  box-shadow: 0 24px 58px rgba(89, 18, 170, 0.2);
}

.donations-help__copy {
  display: grid;
  align-content: center;
  padding: clamp(2rem, 4vw, 3.25rem);
  color: #fff;
}

.donations-help__copy .donations-page__eyebrow {
  color: rgba(0, 0, 0, 0.78);
}

.donations-help h2 {
  margin: 0;
  color: #fff;
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  line-height: 1;
  letter-spacing: 0;
  font-weight: 900;
}

.donations-help__copy > p {
  max-width: 30rem;
  margin: 1.25rem 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.02rem;
  line-height: 1.75;
}

.donations-help__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  margin-top: 2rem;
}

.donations-help__card {
  display: grid;
  gap: 0.65rem;
  min-height: 10.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background 180ms ease;
}

.donations-help__card:hover {
  transform: translateY(-0.25rem);
  background: rgba(255, 255, 255, 0.26);
}

.donations-help__icon {
  display: grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.donations-help__icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.donations-help__card h3 {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;
}

.donations-help__card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.82rem;
  line-height: 1.55;
}

.donations-help__card strong {
  align-self: end;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.donations-help__media {
  position: relative;
  min-height: 29rem;
  overflow: hidden;
  background: #1f1f1f;
}

.donations-help__media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: rgba(0, 0, 0, 0.12);
}

.donations-help__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition:
    filter 240ms ease,
    transform 520ms ease;
}

.donations-help:hover .donations-help__media img {
  filter: grayscale(0.2);
  transform: scale(1.04);
}

.donations-help__media a {
  position: absolute;
  inset: 50% auto auto 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  padding: 0;
  border: 0;
  background: rgba(31, 31, 31, 0.78);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  transform: translate(-50%, -50%);
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.donations-help__media a:hover {
  background: #7b21e8;
  transform: translate(-50%, -50%) scale(1.06);
}

.donations-help__media svg {
  width: 1.45rem;
  height: 1.45rem;
  margin-left: 0.2rem;
}

.donations-impact {
  padding: 5rem 0 0;
}

.donations-impact__header {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(280px, 0.55fr);
  gap: 2rem;
  align-items: end;
  margin-bottom: 1.25rem;
}

.donations-impact__header h2,
.donations-trust__copy h2 {
  margin: 0;
  color: #172033;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: 0;
  font-weight: 900;
}

.donations-impact__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.donations-impact__card {
  display: grid;
  align-content: space-between;
  gap: 1rem;
  min-height: 19rem;
  padding: 1.25rem;
  background: #fff;
  border: 1px solid rgba(23, 32, 51, 0.08);
  box-shadow: 0 14px 32px rgba(23, 32, 51, 0.08);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.donations-impact__card:hover {
  transform: translateY(-0.3rem);
  border-color: rgba(123, 33, 232, 0.28);
  box-shadow: 0 22px 46px rgba(23, 32, 51, 0.12);
}

.donations-impact__card strong {
  color: #7b21e8;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: 900;
}

.donations-impact__card h3 {
  margin: 0;
  color: #172033;
  font-size: 1.18rem;
  line-height: 1.2;
  font-weight: 900;
}

.donations-impact__card p {
  margin: 0;
  color: #5f6f82;
  font-size: 0.94rem;
  line-height: 1.65;
}

.donations-impact__card a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: fit-content;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  background: #172033;
  color: #fff;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background 180ms ease;
}

.donations-impact__card a:hover {
  transform: translateX(0.18rem);
  background: #7b21e8;
}

.donations-impact__card a svg {
  width: 1rem;
  height: 1rem;
}

.donations-trust {
  display: grid;
  grid-template-columns: minmax(320px, 0.78fr) minmax(0, 0.9fr);
  gap: 1.2rem;
  align-items: stretch;
  padding: 5rem 0;
}

.donations-trust__media {
  min-height: 24rem;
  overflow: hidden;
  background: #172033;
}

.donations-trust__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.donations-trust__copy {
  display: grid;
  align-content: center;
  padding: 2rem;
  background: #fafafa;
  border: 1px solid #eee;
}

.donations-trust__copy p:not(.donations-page__eyebrow) {
  margin: 1rem 0 0;
  color: #5f6f82;
  font-size: 1rem;
  line-height: 1.75;
}

.donations-trust__copy ul {
  display: grid;
  gap: 0.75rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
}

.donations-trust__copy li {
  position: relative;
  padding-left: 1.7rem;
  color: #172033;
  font-weight: 800;
  line-height: 1.55;
}

.donations-trust__copy li::before {
  position: absolute;
  left: 0;
  top: 0.25rem;
  width: 0.8rem;
  height: 0.8rem;
  content: "";
  background: #7b21e8;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25rem rgba(123, 33, 232, 0.12);
}

.donations-trust__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

@media (max-width: 1100px) {
  .donations-help__grid,
  .donations-impact__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .donations-help,
  .donations-impact__header,
  .donations-trust {
    grid-template-columns: 1fr;
  }

  .donations-trust {
    padding-bottom: 3.5rem;
  }
}

@media (max-width: 640px) {
  .donations-hero {
    padding: 2.5rem 1rem;
  }

  .donations-help,
  .donations-impact,
  .donations-trust {
    width: calc(100% - 2rem);
  }

  .donations-help {
    margin-top: 3.5rem;
  }

  .donations-help__copy,
  .donations-trust__copy {
    padding: 1.25rem;
  }

  .donations-help__grid,
  .donations-impact__grid {
    grid-template-columns: 1fr;
  }

  .donations-help__media,
  .donations-trust__media {
    min-height: 18rem;
  }

  .donations-help__media button {
    width: 4.1rem;
    height: 4.1rem;
  }

  .donations-impact {
    padding-top: 3.5rem;
  }
}
@media (max-width: 1024px) {
  .stats-section__grid,
  .stats-grid,
  [class*="stats-grid"],
  [class*="StatsGrid"],
  section > div:last-child {
    gap: 0.75rem;
  }

  .stat-card,
  .stats-card,
  .stats-section__card,
  [class*="stat-card"],
  [class*="StatCard"],
  article {
    min-height: auto;
    padding: 1rem;
    border-radius: 0.55rem;
  }
}

@media (max-width: 768px) {
  .stats-section,
  section {
    padding-block: 2rem;
  }

  .stats-section {
    padding-inline: 0.85rem;
  }

  .stats-section__grid,
  .stats-section__cards,
  .stats-section__list,
  .stats-grid,
  .stats-cards,
  .impact-grid,
  .impact-cards,
  [class*="stats-grid"],
  [class*="stats-card"],
  [class*="stats-list"],
  [class*="StatsGrid"],
  [class*="impact-grid"],
  [class*="impact-card"],
  section > div:last-child {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .stats-section__grid > *,
  .stats-section__cards > *,
  .stats-section__list > *,
  .stats-grid > *,
  .stats-cards > *,
  .impact-grid > *,
  .impact-cards > *,
  [class*="stats-grid"] > *,
  [class*="stats-card"] > *,
  [class*="stats-list"] > *,
  [class*="impact-grid"] > *,
  [class*="impact-card"] > *,
  section > div:last-child > *,
  .stat-card,
  .stats-card,
  .stats-section__card,
  [class*="stat-card"],
  [class*="StatCard"],
  [class*="stat-item"],
  [class*="StatItem"],
  [class*="impact-card"],
  [class*="ImpactCard"],
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.8rem;
    min-height: 0;
    height: auto;
    padding: 0.8rem 0.9rem;
    border-radius: 0.45rem;
  }

  .stats-section__grid > * :is(strong, span:first-child),
  .stats-section__cards > * :is(strong, span:first-child),
  .stats-section__list > * :is(strong, span:first-child),
  .stats-grid > * :is(strong, span:first-child),
  .stats-cards > * :is(strong, span:first-child),
  .impact-grid > * :is(strong, span:first-child),
  .impact-cards > * :is(strong, span:first-child),
  [class*="stats-grid"] > * :is(strong, span:first-child),
  [class*="impact-grid"] > * :is(strong, span:first-child),
  .stat-card h2,
  .stat-card h3,
  .stat-card strong,
  .stats-card h2,
  .stats-card h3,
  .stats-card strong,
  .stats-section__card h2,
  .stats-section__card h3,
  .stats-section__card strong,
  [class*="stat-card"] h2,
  [class*="stat-card"] h3,
  [class*="stat-card"] strong,
  [class*="StatCard"] h2,
  [class*="StatCard"] h3,
  [class*="StatCard"] strong,
  [class*="impact-card"] h2,
  [class*="impact-card"] h3,
  [class*="impact-card"] strong,
  article h2,
  article h3,
  article strong {
    margin: 0;
    font-size: clamp(1.35rem, 6vw, 1.9rem);
    line-height: 1;
  }

  .stats-section__grid > * :is(p, small, span:last-child),
  .stats-section__cards > * :is(p, small, span:last-child),
  .stats-section__list > * :is(p, small, span:last-child),
  .stats-grid > * :is(p, small, span:last-child),
  .stats-cards > * :is(p, small, span:last-child),
  .impact-grid > * :is(p, small, span:last-child),
  .impact-cards > * :is(p, small, span:last-child),
  [class*="stats-grid"] > * :is(p, small, span:last-child),
  [class*="impact-grid"] > * :is(p, small, span:last-child),
  .stat-card p,
  .stat-card small,
  .stats-card p,
  .stats-card small,
  .stats-section__card p,
  .stats-section__card small,
  [class*="stat-card"] p,
  [class*="stat-card"] small,
  [class*="StatCard"] p,
  [class*="StatCard"] small,
  [class*="impact-card"] p,
  [class*="impact-card"] small,
  article p,
  article small {
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.35;
  }
}

@media (max-width: 480px) {
  .stat-card,
  .stats-card,
  .stats-section__card,
  [class*="stat-card"],
  [class*="StatCard"],
  article {
    min-height: 4.25rem;
    padding: 0.7rem 0.8rem;
    column-gap: 0.65rem;
  }

  .stat-card h2,
  .stat-card h3,
  .stats-card h2,
  .stats-card h3,
  .stats-section__card h2,
  .stats-section__card h3,
  [class*="stat-card"] h2,
  [class*="stat-card"] h3,
  [class*="StatCard"] h2,
  [class*="StatCard"] h3,
  article h2,
  article h3 {
    font-size: clamp(1.2rem, 6vw, 1.65rem);
  }

  .stat-card p,
  .stats-card p,
  .stats-section__card p,
  [class*="stat-card"] p,
  [class*="StatCard"] p,
  article p {
    font-size: 0.72rem;
  }
}

@media (max-width: 768px) {
  :deep(.stat-card),
  :deep(.stats-card),
  :deep(.impact-card),
  :deep([class*="stat-card"]),
  :deep([class*="StatCard"]),
  :deep([class*="impact-card"]),
  :deep([class*="ImpactCard"]) {
    display: grid !important;
    grid-template-columns: auto 1fr !important;
    align-items: center !important;
    gap: 0.65rem !important;
    min-height: 0 !important;
    height: auto !important;
    max-height: none !important;
    padding: 0.75rem 0.85rem !important;
    border-radius: 0.45rem !important;
  }

  :deep(.stat-card > *),
  :deep(.stats-card > *),
  :deep(.impact-card > *),
  :deep([class*="stat-card"] > *),
  :deep([class*="StatCard"] > *),
  :deep([class*="impact-card"] > *),
  :deep([class*="ImpactCard"] > *) {
    margin: 0 !important;
  }

  :deep(.stat-card h2),
  :deep(.stat-card h3),
  :deep(.stat-card strong),
  :deep(.stats-card h2),
  :deep(.stats-card h3),
  :deep(.stats-card strong),
  :deep(.impact-card h2),
  :deep(.impact-card h3),
  :deep(.impact-card strong),
  :deep([class*="stat-card"] h2),
  :deep([class*="stat-card"] h3),
  :deep([class*="stat-card"] strong),
  :deep([class*="StatCard"] h2),
  :deep([class*="StatCard"] h3),
  :deep([class*="StatCard"] strong),
  :deep([class*="impact-card"] h2),
  :deep([class*="impact-card"] h3),
  :deep([class*="impact-card"] strong),
  :deep([class*="ImpactCard"] h2),
  :deep([class*="ImpactCard"] h3),
  :deep([class*="ImpactCard"] strong) {
    font-size: clamp(1.25rem, 6vw, 1.65rem) !important;
    line-height: 1 !important;
  }

  :deep(.stat-card p),
  :deep(.stat-card small),
  :deep(.stat-card span),
  :deep(.stats-card p),
  :deep(.stats-card small),
  :deep(.stats-card span),
  :deep(.impact-card p),
  :deep(.impact-card small),
  :deep(.impact-card span),
  :deep([class*="stat-card"] p),
  :deep([class*="stat-card"] small),
  :deep([class*="stat-card"] span),
  :deep([class*="StatCard"] p),
  :deep([class*="StatCard"] small),
  :deep([class*="StatCard"] span),
  :deep([class*="impact-card"] p),
  :deep([class*="impact-card"] small),
  :deep([class*="impact-card"] span),
  :deep([class*="ImpactCard"] p),
  :deep([class*="ImpactCard"] small),
  :deep([class*="ImpactCard"] span) {
    font-size: 0.72rem !important;
    line-height: 1.25 !important;
  }
}
</style>
