<script setup>
const helpOptions = [
  {
    icon: "media",
    title: "Media",
    text: "Share stories, campaign updates, and community needs so more people can see the work and join the mission.",
    href: "/help",
    action: "Share a story",
  },
  {
    icon: "mobilization",
    title: "Mobilization",
    text: "Help organize local giving drives, volunteer teams, outreach visits, and community response efforts.",
    href: "/volunteer",
    action: "Join volunteers",
  },
  {
    icon: "projection",
    title: "Projection",
    text: "Support planning for future programs so donations reach the right people with better timing and accountability.",
    href: "/projects",
    action: "View projects",
  },
  {
    icon: "support",
    title: "Support",
    text: "Give financially, donate useful items, or connect us with partners who can help families receive practical care.",
    href: "#donation-impact",
    action: "Choose gift",
  },
];

const donationTiers = [
  {
    amount: "$25",
    title: "School basics",
    text: "Provides learning materials for children who need support to stay in class.",
    href: "/contact",
  },
  {
    amount: "$50",
    title: "Family food care",
    text: "Helps provide nutritious food support for a household facing hardship.",
    href: "/contact",
  },
  {
    amount: "$100",
    title: "Health outreach",
    text: "Supports basic wellness checks, referrals, and care follow-up.",
    href: "/contact",
  },
  {
    amount: "$250",
    title: "Community response",
    text: "Moves a larger outreach project forward with water, education, or relief support.",
    href: "/contact",
  },
];

const trustPoints = [
  "Donations are directed toward active community needs.",
  "Support is organized with dignity, respect, and follow-up care.",
  "Every gift helps us respond faster and plan more responsibly.",
];
</script>

<template>
  <main class="donations-page">
    <section class="donations-hero" aria-labelledby="donations-title">
      <div class="donations-hero__inner">
        <p class="donations-page__eyebrow">His Grace Foundation</p>
        <h1 id="donations-title">Donations</h1>
        <p>
          Support the work with gifts that help us respond to urgent needs and
          long-term care.
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
        <p class="donations-page__eyebrow">Help for cause</p>
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
</style>
