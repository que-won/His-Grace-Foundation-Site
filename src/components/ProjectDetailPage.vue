<script setup>
import { computed } from "vue";

const projects = {
  "clean-water": {
    category: "Clean water",
    title: "Clean Water for Rural Families",
    summary:
      "Installing safe water points and hygiene education so children and caregivers spend less time walking for water and more time learning, working, and staying healthy.",
    image: "/images/real1.jpeg",
    alt: "Children collecting clean water",
    location: "Community outreach",
    progress: 72,
    goal: "$8,500",
    raised: "$6,120",
    beneficiaries: "320+ families",
    duration: "Ongoing",
    objectives: [
      "Improve access to safe water for families in underserved communities.",
      "Reduce water-related illness through basic hygiene education.",
      "Support children by reducing time spent searching for water.",
    ],
  },
  "education-support": {
    category: "Education",
    title: "School Support for Vulnerable Children",
    summary:
      "Providing school materials, tuition support, uniforms, and mentoring for children who need a steady path back into the classroom.",
    image: "/images/real1.jpeg",
    alt: "Child smiling in a classroom",
    location: "Student sponsorship",
    progress: 58,
    goal: "$6,200",
    raised: "$3,596",
    beneficiaries: "180+ students",
    duration: "School year",
    objectives: [
      "Provide school supplies, uniforms, and learning support.",
      "Help vulnerable children remain enrolled through the school year.",
      "Offer mentoring and encouragement for long-term growth.",
    ],
  },
  "healthy-food": {
    category: "Healthy food",
    title: "Nutritious Meals for Growing Children",
    summary:
      "Helping families access balanced food packages while connecting them with health checks, care follow-ups, and community support.",
    image: "/images/real1.jpeg",
    alt: "Child holding food in a community setting",
    location: "Family care",
    progress: 81,
    goal: "$4,900",
    raised: "$3,969",
    beneficiaries: "240+ children",
    duration: "Monthly support",
    objectives: [
      "Deliver food packages to families facing hardship.",
      "Support child nutrition with practical, consistent care.",
      "Connect families with follow-up support where needed.",
    ],
  },
  "healthcare-outreach": {
    category: "Healthcare",
    title: "Basic Medical Care and Wellness Visits",
    summary:
      "Supporting outreach days where families receive wellness checks, health guidance, and referrals before small conditions become serious problems.",
    image: "/images/real1.jpeg",
    alt: "Community health outreach with children and caregivers",
    location: "Mobile clinic",
    progress: 44,
    goal: "$7,400",
    raised: "$3,256",
    beneficiaries: "500+ people",
    duration: "Quarterly outreach",
    objectives: [
      "Provide basic wellness checks and health education.",
      "Connect families to referrals and follow-up support.",
      "Reduce preventable health risks through early response.",
    ],
  },
  "emergency-relief": {
    category: "Shelter",
    title: "Emergency Relief for Families in Crisis",
    summary:
      "Delivering urgent care packages, clothing, temporary shelter support, and practical help for households facing difficult seasons.",
    image: "/images/real1.jpeg",
    alt: "Volunteers supporting families with relief items",
    location: "Relief response",
    progress: 66,
    goal: "$5,800",
    raised: "$3,828",
    beneficiaries: "95+ households",
    duration: "Rapid response",
    objectives: [
      "Respond quickly when families face urgent hardship.",
      "Provide relief items, clothing, and basic household support.",
      "Follow up so families are not left alone after the crisis.",
    ],
  },
  "youth-mentorship": {
    category: "Youth growth",
    title: "Mentorship and Skills for Young People",
    summary:
      "Creating safe spaces where young people receive guidance, life skills, leadership training, and encouragement from trusted mentors.",
    image: "/images/real1.jpeg",
    alt: "Young people participating in a mentorship activity",
    location: "Youth program",
    progress: 39,
    goal: "$3,900",
    raised: "$1,521",
    beneficiaries: "120+ young people",
    duration: "Weekly sessions",
    objectives: [
      "Offer mentorship, life skills, and leadership guidance.",
      "Create safe spaces for young people to learn and grow.",
      "Encourage confidence, responsibility, and community service.",
    ],
  },
};

const fallbackSlug = "clean-water";
const slug = computed(() => {
  const path = window.location.pathname.split("/").filter(Boolean);
  return path[path.length - 1] || fallbackSlug;
});

const project = computed(() => projects[slug.value] || projects[fallbackSlug]);

const detailStats = computed(() => [
  { label: "Raised", value: project.value.raised },
  { label: "Goal", value: project.value.goal },
  { label: "Reached", value: project.value.beneficiaries },
  { label: "Timeline", value: project.value.duration },
]);

const relatedProjects = computed(() =>
  Object.entries(projects)
    .filter(([key]) => key !== slug.value)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...value })),
);
</script>

<template>
  <main class="project-detail">
    <section class="project-detail__hero" aria-labelledby="project-detail-title">
      <div class="project-detail__hero-copy">
        <a class="project-detail__back" href="/projects">Back to projects</a>
        <p class="project-detail__eyebrow">{{ project.category }}</p>
        <h1 id="project-detail-title">{{ project.title }}</h1>
        <p>{{ project.summary }}</p>
        <div class="project-detail__actions">
          <a href="/donations">
            <span>Support this project</span>
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
          <a href="/contact">Ask a question</a>
        </div>
      </div>

      <div class="project-detail__hero-media">
        <img :src="project.image" :alt="project.alt" />
        <span>{{ project.location }}</span>
      </div>
    </section>

    <section class="project-detail__stats" aria-label="Project progress summary">
      <article v-for="stat in detailStats" :key="stat.label">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </article>
    </section>

    <section class="project-detail__content">
      <div class="project-detail__story">
        <p class="project-detail__eyebrow">Project overview</p>
        <h2>Why this project matters</h2>
        <p>
          This project is part of His Grace Foundation's commitment to respond
          with practical care where families need support most. Each activity is
          planned with community voices, delivered with dignity, and followed up
          so the support continues beyond one visit.
        </p>
        <p>
          Your gift helps move the work from intention to action. Whether the
          need is water, school support, food, health outreach, relief, or
          mentorship, the goal is to give families a stronger path forward.
        </p>
      </div>

      <div class="project-detail__progress">
        <div>
          <p class="project-detail__eyebrow">Funding progress</p>
          <strong>{{ project.progress }}%</strong>
        </div>
        <span class="project-detail__track">
          <span
            class="project-detail__bar"
            :style="{ width: `${project.progress}%` }"
          ></span>
        </span>
        <p>{{ project.raised }} raised of {{ project.goal }} goal.</p>
      </div>
    </section>

    <section class="project-detail__objectives" aria-labelledby="objectives-title">
      <div>
        <p class="project-detail__eyebrow">Key objectives</p>
        <h2 id="objectives-title">What this project is working to achieve</h2>
      </div>

      <div class="project-detail__objective-list">
        <article
          v-for="(objective, index) in project.objectives"
          :key="objective"
        >
          <span>{{ String(index + 1).padStart(2, "0") }}</span>
          <p>{{ objective }}</p>
        </article>
      </div>
    </section>

    <section class="project-detail__gallery" aria-label="Project photos">
      <img :src="project.image" :alt="project.alt" />
      <img src="/images/real1.jpeg" alt="Community support activity" />
      <img src="/images/real1.jpeg" alt="Families receiving practical care" />
    </section>

    <section class="project-detail__related" aria-labelledby="related-title">
      <div class="project-detail__related-header">
        <p class="project-detail__eyebrow">More projects</p>
        <h2 id="related-title">Explore other ways to help</h2>
      </div>

      <div class="project-detail__related-grid">
        <article v-for="item in relatedProjects" :key="item.slug">
          <img :src="item.image" :alt="item.alt" />
          <div>
            <p>{{ item.category }}</p>
            <h3>{{ item.title }}</h3>
            <a :href="`/projects/${item.slug}`">View details</a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-detail {
  background: linear-gradient(180deg, #fff 0%, #fff8ef 100%);
  color: #202020;
}

.project-detail__hero,
.project-detail__stats,
.project-detail__content,
.project-detail__objectives,
.project-detail__gallery,
.project-detail__related {
  max-width: 1160px;
  margin: 0 auto;
}

.project-detail__hero {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(320px, 0.78fr);
  gap: 1.2rem;
  align-items: stretch;
  padding: 4.5rem 1.5rem 1.5rem;
}

.project-detail__hero-copy {
  display: grid;
  align-content: center;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  background: #1f1f1f;
  color: #fff;
  border-radius: 0.5rem;
}

.project-detail__back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin-bottom: 1.25rem;
  padding: 0.6rem 1.2rem;
  color: #f0b62a;
  font-size: 0.88rem;
  font-weight: 900;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid transparent;
  background: rgba(240, 182, 42, 0.1);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.project-detail__back::before {
  content: '← ';
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.project-detail__back:hover,
.project-detail__back:focus-visible {
  color: #fff;
  background: #f0b62a;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(240, 182, 42, 0.3);
}

.project-detail__back:focus-visible {
  outline: 2px solid #f0b62a;
  outline-offset: 2px;
}

.project-detail__eyebrow {
  margin: 0 0 0.7rem;
  color: #ff5d23;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-detail__hero-copy .project-detail__eyebrow {
  color: #f0b62a;
}

.project-detail h1 {
  margin: 0;
  max-width: 11ch;
  font-size: clamp(3rem, 7vw, 5.4rem);
  line-height: 0.95;
  letter-spacing: 0;
  font-weight: 900;
}

.project-detail__hero-copy > p:last-of-type {
  max-width: 42rem;
  margin: 1.25rem 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.02rem;
  line-height: 1.75;
}

.project-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.project-detail__actions a,
.project-detail__related a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  min-height: 2.85rem;
  padding: 0.78rem 1rem;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.project-detail__actions a:first-child,
.project-detail__related a {
  background: #ff5d23;
  color: #fff;
}

.project-detail__actions a:last-child {
  background: #fff;
  color: #202020;
}

.project-detail__actions a:hover,
.project-detail__related a:hover {
  transform: translateX(0.18rem);
  background: #f0b62a;
  color: #202020;
}

.project-detail__actions svg {
  width: 1rem;
  height: 1rem;
}

.project-detail__hero-media {
  position: relative;
  min-height: 34rem;
  overflow: hidden;
  background: #1f1f1f;
  border-radius: 0.5rem;
  box-shadow: 0 22px 54px rgba(18, 29, 27, 0.16);
}

.project-detail__hero-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.58));
}

.project-detail__hero-media img,
.project-detail__gallery img,
.project-detail__related img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-detail__hero-media span {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  padding: 0.5rem 0.75rem;
  background: #f0b62a;
  color: #202020;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.project-detail__stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 0 1.5rem;
}

.project-detail__stats article {
  display: grid;
  gap: 0.35rem;
  padding: 1.2rem;
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.08);
}

.project-detail__stats strong {
  color: #202020;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
  line-height: 1;
  font-weight: 900;
}

.project-detail__stats span {
  color: #626262;
  font-size: 0.82rem;
  font-weight: 900;
  text-transform: uppercase;
}

.project-detail__content,
.project-detail__objectives {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.72fr);
  gap: 1.15rem;
  padding: 4rem 1.5rem 0;
}

.project-detail__story,
.project-detail__progress,
.project-detail__objective-list article,
.project-detail__related article {
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.08);
}

.project-detail__story,
.project-detail__progress {
  padding: 1.5rem;
}

.project-detail h2 {
  margin: 0;
  color: #202020;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.05;
  letter-spacing: 0;
  font-weight: 900;
}

.project-detail__story p:not(.project-detail__eyebrow),
.project-detail__progress p,
.project-detail__objective-list p {
  margin: 1rem 0 0;
  color: #626262;
  font-size: 1rem;
  line-height: 1.75;
}

.project-detail__progress {
  display: grid;
  align-content: center;
  gap: 1rem;
}

.project-detail__progress strong {
  color: #ff5d23;
  font-size: 4rem;
  line-height: 1;
  font-weight: 900;
}

.project-detail__track {
  display: block;
  height: 0.75rem;
  overflow: hidden;
  background: #f0ece5;
  border-radius: 999px;
}

.project-detail__bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #ff5d23, #f0b62a);
  border-radius: inherit;
}

.project-detail__objective-list {
  display: grid;
  gap: 0.85rem;
}

.project-detail__objective-list article {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1.1rem;
}

.project-detail__objective-list span {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  background: #ff5d23;
  color: #fff;
  border-radius: 50%;
  font-size: 0.78rem;
  font-weight: 900;
}

.project-detail__objective-list p {
  margin: 0;
}

.project-detail__gallery {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 0.85fr;
  grid-auto-rows: 18rem;
  gap: 1rem;
  padding: 4rem 1.5rem 0;
}

.project-detail__gallery img {
  min-height: 18rem;
  border-radius: 0.45rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.08);
}

.project-detail__gallery img:first-child {
  grid-row: span 2;
}

.project-detail__related {
  padding: 4rem 1.5rem 5rem;
}

.project-detail__related-header {
  margin-bottom: 1.2rem;
}

.project-detail__related-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.project-detail__related article {
  overflow: hidden;
}

.project-detail__related img {
  height: 13rem;
}

.project-detail__related article div {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}

.project-detail__related p {
  margin: 0;
  color: #ff5d23;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.project-detail__related h3 {
  margin: 0;
  color: #202020;
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 900;
}

@media (max-width: 900px) {
  .project-detail__hero,
  .project-detail__content,
  .project-detail__objectives,
  .project-detail__related-grid {
    grid-template-columns: 1fr;
  }

  .project-detail__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-detail__hero-media {
    min-height: 24rem;
  }

  .project-detail__gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: 16rem;
  }

  .project-detail__gallery img:first-child {
    grid-row: span 1;
  }
}

@media (max-width: 640px) {
  .project-detail__hero {
    padding: 3rem 1rem 1rem;
  }

  .project-detail__stats,
  .project-detail__content,
  .project-detail__objectives,
  .project-detail__gallery,
  .project-detail__related {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .project-detail h1 {
    max-width: 100%;
    font-size: 2.7rem;
  }

  .project-detail__hero-copy {
    padding: 1.35rem;
  }

  .project-detail__stats {
    grid-template-columns: 1fr;
  }

  .project-detail__objective-list article {
    grid-template-columns: 1fr;
  }
}
</style>
