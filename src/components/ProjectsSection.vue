<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const projects = [
  {
    slug: "clean-water",
    category: "Clean water",
    title: "Clean Water for Rural Families",
    description:
      "Installing safe water points and hygiene education so children and caregivers spend less time walking for water and more time learning, working, and staying healthy.",
    image: "/images/real1.jpeg",
    alt: "Children collecting clean water",
    location: "Community outreach",
    progress: 72,
    goal: "$8,500",
  },
  {
    slug: "education-support",
    category: "Education",
    title: "School Support for Vulnerable Children",
    description:
      "Providing school materials, tuition support, uniforms, and mentoring for children who need a steady path back into the classroom.",
    image: "/images/real1.jpeg",
    alt: "Child smiling in a classroom",
    location: "Student sponsorship",
    progress: 58,
    goal: "$6,200",
  },
  {
    slug: "healthy-food",
    category: "Healthy food",
    title: "Nutritious Meals for Growing Children",
    description:
      "Helping families access balanced food packages while connecting them with health checks, care follow-ups, and community support.",
    image: "/images/real1.jpeg",
    alt: "Child holding food in a community setting",
    location: "Family care",
    progress: 81,
    goal: "$4,900",
  },
  {
    slug: "healthcare-outreach",
    category: "Healthcare",
    title: "Basic Medical Care and Wellness Visits",
    description:
      "Supporting outreach days where families receive wellness checks, health guidance, and referrals before small conditions become serious problems.",
    image: "/images/real1.jpeg",
    alt: "Community health outreach with children and caregivers",
    location: "Mobile clinic",
    progress: 44,
    goal: "$7,400",
  },
  {
    slug: "emergency-relief",
    category: "Shelter",
    title: "Emergency Relief for Families in Crisis",
    description:
      "Delivering urgent care packages, clothing, temporary shelter support, and practical help for households facing difficult seasons.",
    image: "/images/real1.jpeg",
    alt: "Volunteers supporting families with relief items",
    location: "Relief response",
    progress: 66,
    goal: "$5,800",
  },
  {
    slug: "youth-mentorship",
    category: "Youth growth",
    title: "Mentorship and Skills for Young People",
    description:
      "Creating safe spaces where young people receive guidance, life skills, leadership training, and encouragement from trusted mentors.",
    image: "/images/real1.jpeg",
    alt: "Young people participating in a mentorship activity",
    location: "Youth program",
    progress: 39,
    goal: "$3,900",
  },
];

const impactStats = [
  {
    value: "1,200+",
    label: "children and family members reached through direct support",
  },
  {
    value: "18",
    label: "community outreach visits organized with local volunteers",
  },
  {
    value: "6",
    label: "active project areas focused on practical daily needs",
  },
];

const projectPrinciples = [
  {
    number: "01",
    title: "Listen first",
    text: "We identify needs through conversations with families, schools, faith leaders, and community volunteers.",
  },
  {
    number: "02",
    title: "Respond with practical help",
    text: "Each project is shaped around immediate support people can feel: food, water, education, health, shelter, and guidance.",
  },
  {
    number: "03",
    title: "Follow up with care",
    text: "We keep relationships active so support does not end at delivery day and families know where to turn next.",
  },
];

const galleryImages = [
  {
    title: "Community outreach",
    text: "Volunteers meeting families and identifying practical needs.",
    image: "/images/real1.jpeg",
    alt: "Volunteers supporting a community outreach activity",
  },
  {
    title: "Children support",
    text: "Care focused on education, nutrition, and daily wellbeing.",
    image: "/images/real1.jpeg",
    alt: "Children receiving support from the foundation",
  },
  {
    title: "Family relief",
    text: "Relief items and follow-up care for families in difficult seasons.",
    image: "/images/real1.jpeg",
    alt: "Family relief support in the community",
  },
  {
    title: "Local partnership",
    text: "Working with trusted community voices for better long-term care.",
    image: "/images/real1.jpeg",
    alt: "Community partners working together",
  },
];

const projectsPerPage = 3;
const currentPage = ref(0);
const selectedCategory = ref("All");
const filters = computed(() => [
  "All",
  ...new Set(projects.map((project) => project.category)),
]);
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects;
  }

  return projects.filter((project) => project.category === selectedCategory.value);
});
const pageCount = computed(() =>
  Math.max(1, Math.ceil(filteredProjects.value.length / projectsPerPage)),
);
const visibleProjects = computed(() => {
  const start = currentPage.value * projectsPerPage;
  return filteredProjects.value.slice(start, start + projectsPerPage);
});

const chooseFilter = (filter) => {
  selectedCategory.value = filter;
  currentPage.value = 0;
};

const goToPage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  currentPage.value =
    currentPage.value === 0 ? pageCount.value - 1 : currentPage.value - 1;
};

const nextPage = () => {
  currentPage.value =
    currentPage.value === pageCount.value - 1 ? 0 : currentPage.value + 1;
};
</script>

<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="projects-section__inner">
      <div class="projects-section__banner">
        <div class="projects-section__banner-media">
          <img src="/images/real1.jpeg" alt="Children and families supported by His Grace Foundation" />
          <div class="projects-section__banner-stat">
            <strong>6</strong>
            <span>active care projects</span>
          </div>
        </div>
      </div>

      <div class="projects-section__header">
        <div>
          <p class="projects-section__eyebrow">Our projects</p>
          <h2 id="projects-title">Practical support that reaches real families</h2>
          <router-link class="projects-section__header-link" to="/donations" aria-label="Support His Grace Foundation projects">
            <span>Support a project</span>
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
          </router-link>
        </div>
        <p>
          Each project is built around daily needs: clean water, school access,
          healthy meals, basic care, and steady guidance for children and
          families.
        </p>
      </div>

      <div class="projects-section__intro">
        <div class="projects-section__intro-copy">
          <p class="projects-section__eyebrow">Project impact</p>
          <h3>Every project is designed to answer a clear community need.</h3>
          <p>
            His Grace Foundation focuses on work that can be seen, measured,
            and followed up with care. From a child returning to school to a
            family receiving food support, each activity is connected to a
            larger goal of restoring dignity and opportunity.
          </p>
        </div>

        <div class="projects-section__stats" aria-label="Project impact highlights">
          <article
            v-for="stat in impactStats"
            :key="stat.value"
            class="projects-section__stat-card"
          >
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>

      <div class="projects-section__filters" aria-label="Filter projects">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="projects-section__filter"
          :class="{ 'projects-section__filter--active': selectedCategory === filter }"
          :aria-pressed="selectedCategory === filter"
          @click="chooseFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>

      <TransitionGroup
        name="project-card"
        tag="div"
        class="projects-section__grid"
      >
        <article
          v-for="project in visibleProjects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-card__media">
            <img :src="project.image" :alt="project.alt" />
            <span class="project-card__badge">{{ project.category }}</span>
          </div>

          <div class="project-card__copy">
            <div>
              <p class="project-card__eyebrow">{{ project.location }}</p>
              <h3>{{ project.title }}</h3>
              <p class="project-card__description">{{ project.description }}</p>
            </div>

            <div class="project-card__progress" aria-label="Project progress">
              <div class="project-card__progress-meta">
                <span>{{ project.progress }}% funded</span>
                <span>Goal {{ project.goal }}</span>
              </div>
              <span class="project-card__track">
                <span
                  class="project-card__bar"
                  :style="{ width: `${project.progress}%` }"
                ></span>
              </span>
            </div>

            <router-link class="project-card__link" :to="`/projects/${project.slug}`" :aria-label="`Read more about ${project.title}`">
              <span>View details</span>
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
            </router-link>
          </div>
        </article>
      </TransitionGroup>

      <div class="projects-section__pagination" aria-label="Projects pagination">
        <button type="button" class="projects-section__arrow" @click="previousPage" aria-label="Previous projects">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </svg>
        </button>

        <button
          v-for="page in pageCount"
          :key="page"
          type="button"
          class="projects-section__dot"
          :class="{ 'projects-section__dot--active': currentPage === page - 1 }"
          :aria-label="`Show project page ${page}`"
          :aria-current="currentPage === page - 1 ? 'page' : undefined"
          @click="goToPage(page - 1)"
        ></button>

        <button type="button" class="projects-section__arrow" @click="nextPage" aria-label="Next projects">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      <div class="projects-section__process">
        <div class="projects-section__process-feature">
          <div class="projects-section__process-copy">
            <p class="projects-section__eyebrow">How we work</p>
            <h3>Simple, accountable, and rooted in the community.</h3>
            <p>
              Projects are planned with care so donations are connected to real
              needs and families receive support with respect. We keep the work
              practical, transparent, and focused on long-term hope.
            </p>
          </div>

          <div class="projects-section__process-image">
            <img src="/images/real1.jpeg" alt="His Grace Foundation volunteers working with families" />
            <span>Care with follow-up</span>
          </div>
        </div>

        <div class="projects-section__principles">
          <article
            v-for="principle in projectPrinciples"
            :key="principle.number"
            class="projects-section__principle"
          >
            <span>{{ principle.number }}</span>
            <div>
              <h4>{{ principle.title }}</h4>
              <p>{{ principle.text }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="projects-section__gallery" aria-label="Project photos">
        <div class="projects-section__gallery-header">
          <p class="projects-section__eyebrow">In pictures</p>
          <h3>Moments from the work we continue to build.</h3>
        </div>

        <div class="projects-section__gallery-grid">
          <article
            v-for="item in galleryImages"
            :key="item.title"
            class="projects-section__gallery-card"
          >
            <img :src="item.image" :alt="item.alt" />
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 0 1.5rem 5rem;
  background:
    linear-gradient(180deg, #fff 0%, #fff8ef 100%);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 0 1rem 3rem;
  }
}

.projects-section__inner {
  max-width: 1160px;
  margin: 0 auto;
}

.projects-section__banner {
  display: block;
  height: clamp(18rem, 42vw, 31rem);
  overflow: hidden;
  margin-bottom: 4rem;
  background: #1f1f1f;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 24px 56px rgba(18, 29, 27, 0.14);
}

@media (max-width: 768px) {
  .projects-section__banner {
    height: clamp(12rem, 60vw, 18rem);
    margin-bottom: 2rem;
    border-radius: 8px;
  }
}

.projects-section__banner-media {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.projects-section__banner-media::before {
  position: absolute;
  inset: 0;
  z-index: 1;
  content: "";
  background: linear-gradient(90deg, rgba(31, 31, 31, 0.28), rgba(31, 31, 31, 0));
}

.projects-section__banner-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: bannerFloat 9s ease-in-out infinite alternate;
}

.projects-section__banner-stat {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 2;
  display: grid;
  gap: 0.1rem;
  min-width: 8.5rem;
  padding: 1rem;
  background: #fff;
  color: #202020;
  border-left: 0.35rem solid #f0b62a;
  box-shadow: 0 18px 34px rgba(18, 29, 27, 0.2);
}

@media (max-width: 768px) {
  .projects-section__banner-stat {
    right: 0.85rem;
    bottom: 0.85rem;
    min-width: 7.5rem;
    padding: 0.8rem;
  }
}

.projects-section__banner-stat strong {
  font-size: 2.35rem;
  line-height: 1;
  font-weight: 900;
}

.projects-section__banner-stat span {
  color: #626262;
  font-size: 0.78rem;
  font-weight: 900;
  line-height: 1.25;
  text-transform: uppercase;
}

.projects-section__header {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.75fr);
  gap: 2rem;
  align-items: end;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .projects-section__header {
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: start;
    margin-bottom: 1.5rem;
  }
}

.projects-section__eyebrow {
  margin: 0 0 0.65rem;
  color: #ff5d23;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.projects-section__header h2 {
  margin: 0;
  color: #202020;
  font-size: clamp(2rem, 4vw, 3.35rem);
  line-height: 1.02;
  letter-spacing: 0;
  font-weight: 900;
}

@media (max-width: 768px) {
  .projects-section__header h2 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}

.projects-section__header-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  min-height: 3rem;
  margin-top: 1.15rem;
  padding: 0.85rem 2rem;
  background: #ff5d23;
  color: #fff;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 0.94rem;
  font-weight: 900;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.projects-section__header-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.projects-section__header-link:hover {
  transform: translateY(-3px);
  background: #d84315;
  box-shadow: 0 8px 20px rgba(255, 93, 35, 0.3);
}

.projects-section__header-link:hover::before {
  transform: scaleX(1);
}

.projects-section__header-link:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.projects-section__header-link svg {
  width: 1rem;
  height: 1rem;
}

.projects-section__header p:last-child {
  margin: 0;
  color: #626262;
  font-size: 1rem;
  line-height: 1.75;
}

.projects-section__intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
  gap: 1.15rem;
  align-items: stretch;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .projects-section__intro {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }
}

.projects-section__intro-copy {
  padding: 1.5rem;
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 14px 30px rgba(18, 29, 27, 0.06);
}

.projects-section__intro-copy h3,
.projects-section__process-copy h3 {
  margin: 0;
  color: #202020;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 900;
}

.projects-section__intro-copy p:last-child,
.projects-section__process-copy p:last-child {
  margin: 0.85rem 0 0;
  color: #626262;
  font-size: 0.98rem;
  line-height: 1.75;
}

.projects-section__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1024px) {
  .projects-section__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-section__stats {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
}

.projects-section__stat-card {
  display: grid;
  align-content: space-between;
  min-height: 12rem;
  padding: 1.25rem;
  background: #1f1f1f;
  color: #fff;
  border-radius: 0.45rem;
  box-shadow: 0 16px 34px rgba(18, 29, 27, 0.1);
}

@media (max-width: 768px) {
  .projects-section__stat-card {
    min-height: 10rem;
    padding: 1rem;
  }
}

.projects-section__stat-card:nth-child(2) {
  background: #ff5d23;
}

.projects-section__stat-card:nth-child(3) {
  background: #f0b62a;
  color: #202020;
}

.projects-section__stat-card strong {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  font-weight: 900;
}

.projects-section__stat-card span {
  color: currentColor;
  font-size: 0.88rem;
  font-weight: 800;
  line-height: 1.45;
}

.projects-section__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0 0 1.5rem;
}

@media (max-width: 768px) {
  .projects-section__filters {
    gap: 0.5rem;
    margin: 0 0 1.2rem;
  }
}

.projects-section__filter {
  min-height: 2.65rem;
  padding: 0.65rem 1rem;
  border: 1px solid rgba(31, 31, 31, 0.1);
  background: #fff;
  color: #4d4d4d;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 900;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

@media (max-width: 768px) {
  .projects-section__filter {
    min-height: 2.4rem;
    padding: 0.55rem 0.9rem;
    font-size: 0.8rem;
  }
}

.projects-section__filter:hover,
.projects-section__filter:focus-visible {
  transform: translateY(-2px);
  border-color: #ff5d23;
  color: #ff5d23;
  background: rgba(255, 93, 35, 0.05);
  box-shadow: 0 4px 12px rgba(255, 93, 35, 0.15);
}

.projects-section__filter:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.projects-section__filter--active {
  background: #ff5d23;
  color: #fff;
  border-color: #ff5d23;
  box-shadow: 0 4px 12px rgba(255, 93, 35, 0.25);
}

.projects-section__filter--active {
  background: #ff5d23;
  border-color: #ff5d23;
  color: #fff;
  box-shadow: 0 12px 24px rgba(255, 93, 35, 0.2);
}

.projects-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
  min-height: 35rem;
}

@media (max-width: 1024px) {
  .projects-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .projects-section__grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    min-height: auto;
  }
}

.project-card {
  display: grid;
  grid-template-rows: 15.5rem 1fr;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 18px 40px rgba(18, 29, 27, 0.1);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-rows: 12rem 1fr;
  }
}

.project-card:hover {
  transform: translateY(-0.35rem);
  border-color: rgba(255, 93, 35, 0.28);
  box-shadow: 0 24px 54px rgba(18, 29, 27, 0.15);
}

.project-card__media {
  position: relative;
  overflow: hidden;
  min-height: 15.5rem;
  background: #1f1f1f;
}

.project-card__media::after {
  position: absolute;
  inset: auto 0 0;
  height: 45%;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.58));
}

.project-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease;
}

.project-card:hover .project-card__media img {
  transform: scale(1.06);
}

.project-card__badge {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  padding: 0.48rem 0.72rem;
  background: #f0b62a;
  color: #202020;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.project-card__copy {
  display: grid;
  gap: 1.3rem;
  padding: 1.35rem;
  color: #202020;
}

@media (max-width: 768px) {
  .project-card__copy {
    gap: 1rem;
    padding: 1rem;
  }
}

.project-card__eyebrow {
  margin: 0 0 0.55rem;
  color: #ff5d23;
  font-size: 0.92rem;
  font-style: italic;
  font-weight: 800;
}

.project-card__copy h3 {
  margin: 0;
  color: #1f1f1f;
  font-size: 1.55rem;
  line-height: 1.12;
  letter-spacing: 0;
  font-weight: 900;
}

@media (max-width: 768px) {
  .project-card__copy h3 {
    font-size: 1.25rem;
  }
}

.project-card__description {
  margin: 0.8rem 0 0;
  color: #626262;
  font-size: 0.96rem;
  line-height: 1.65;
}

.project-card__progress {
  display: grid;
  gap: 0.58rem;
}

.project-card__progress-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: #4d4d4d;
  font-size: 0.82rem;
  font-weight: 800;
}

.project-card__track {
  display: block;
  height: 0.58rem;
  overflow: hidden;
  background: #f0ece5;
  border-radius: 999px;
}

.project-card__bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #ff5d23, #f0b62a);
  border-radius: inherit;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  min-height: 2.35rem;
  padding: 0.55rem 1.15rem;
  background: #1f1f1f;
  color: #fff;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 0.82rem;
  font-weight: 900;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .project-card__link {
    min-height: 2.25rem;
    padding: 0.5rem 1rem;
    font-size: 0.78rem;
    width: 100%;
    justify-content: center;
  }
}

.project-card__link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff5d23;
  transform: translateX(-100%);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: -1;
}

.project-card__link svg {
  width: 1rem;
  height: 1rem;
  position: relative;
  z-index: 1;
}

.project-card__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(31, 31, 31, 0.25);
}

.project-card__link:hover::before {
  transform: translateX(0);
}

.project-card__link:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.projects-section__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.8rem;
}

@media (max-width: 768px) {
  .projects-section__pagination {
    gap: 0.5rem;
    margin-top: 1.2rem;
  }
}

.projects-section__arrow,
.projects-section__dot {
  display: inline-grid;
  place-items: center;
  border: 0;
  cursor: pointer;
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.projects-section__arrow {
  width: 2.75rem;
  height: 2.75rem;
  background: #1f1f1f;
  color: #fff;
  border-radius: 8px;
  border: 2px solid transparent;
  font: inherit;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.projects-section__arrow svg {
  width: 1.1rem;
  height: 1.1rem;
}

.projects-section__arrow:hover,
.projects-section__arrow:focus-visible {
  transform: translateY(-2px);
  background: #ff5d23;
  box-shadow: 0 8px 20px rgba(255, 93, 35, 0.25);
}

.projects-section__arrow:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.projects-section__dot {
  width: 0.75rem;
  height: 0.75rem;
  padding: 0;
  background: #d7cec1;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.projects-section__dot:hover,
.projects-section__dot:focus-visible {
  transform: scale(1.2);
  background: #ff5d23;
  border-color: #ff5d23;
  box-shadow: 0 4px 12px rgba(255, 93, 35, 0.2);
}

.projects-section__dot:focus-visible {
  outline: 2px solid #ff5d23;
  outline-offset: 2px;
}

.projects-section__dot--active {
  width: 2rem;
  background: #ff5d23;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(255, 93, 35, 0.3);
}

.projects-section__process {
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(360px, 1fr);
  gap: 1.15rem;
  align-items: stretch;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(31, 31, 31, 0.08);
}

.projects-section__process-feature {
  display: grid;
  gap: 1rem;
}

.projects-section__process-copy {
  padding: 0 1.5rem 0 0;
}

.projects-section__process-image {
  position: relative;
  min-height: 17rem;
  overflow: hidden;
  border-radius: 0.45rem;
  box-shadow: 0 18px 38px rgba(18, 29, 27, 0.12);
}

.projects-section__process-image::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.62));
}

.projects-section__process-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease;
}

.projects-section__process-image:hover img {
  transform: scale(1.05);
}

.projects-section__process-image span {
  position: absolute;
  left: 1rem;
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

.projects-section__principles {
  display: grid;
  gap: 0.85rem;
}

.projects-section__principle {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  padding: 1.2rem;
  background: #fff;
  border: 1px solid rgba(31, 31, 31, 0.08);
  border-radius: 0.45rem;
  box-shadow: 0 12px 24px rgba(18, 29, 27, 0.06);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.projects-section__principle:hover {
  transform: translateY(-0.18rem);
  border-color: rgba(255, 93, 35, 0.28);
  box-shadow: 0 18px 34px rgba(18, 29, 27, 0.1);
}

.projects-section__principle > span {
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  background: #fff8ef;
  color: #ff5d23;
  border-radius: 50%;
  font-size: 0.82rem;
  font-weight: 900;
}

.projects-section__principle h4 {
  margin: 0;
  color: #202020;
  font-size: 1.08rem;
  line-height: 1.25;
  font-weight: 900;
}

.projects-section__principle p {
  margin: 0.45rem 0 0;
  color: #626262;
  font-size: 0.94rem;
  line-height: 1.65;
}

.projects-section__gallery {
  margin-top: 3rem;
}

.projects-section__gallery-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.projects-section__gallery-header h3 {
  max-width: 24rem;
  margin: 0;
  color: #202020;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 900;
}

.projects-section__gallery-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 0.9fr;
  grid-auto-rows: 16rem;
  gap: 1rem;
}

.projects-section__gallery-card {
  position: relative;
  overflow: hidden;
  min-height: 16rem;
  background: #1f1f1f;
  border-radius: 0.45rem;
  box-shadow: 0 16px 34px rgba(18, 29, 27, 0.1);
}

.projects-section__gallery-card:first-child {
  grid-row: span 2;
}

.projects-section__gallery-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.92;
  transition:
    transform 420ms ease,
    opacity 180ms ease;
}

.projects-section__gallery-card:hover img {
  transform: scale(1.06);
  opacity: 1;
}

.projects-section__gallery-card::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, rgba(31, 31, 31, 0.05), rgba(31, 31, 31, 0.72));
}

.projects-section__gallery-card div {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
  color: #fff;
}

.projects-section__gallery-card h4 {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.2;
  font-weight: 900;
}

.projects-section__gallery-card p {
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

.project-card-enter-active,
.project-card-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.project-card-enter-from,
.project-card-leave-to {
  opacity: 0;
  transform: translateY(0.75rem);
}

@keyframes bannerFloat {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
}

@media (max-width: 1024px) {
  .projects-section__header,
  .projects-section__intro,
  .projects-section__process {
    grid-template-columns: 1fr;
  }

  .projects-section__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }

  .projects-section__process-copy {
    padding: 0;
  }

  .projects-section__gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 14rem;
  }

  .projects-section__gallery-card:first-child {
    grid-row: span 1;
  }

  .projects-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: auto;
    gap: 1rem;
  }

  .project-card {
    grid-template-columns: 1fr;
    grid-template-rows: 14rem 1fr;
    min-height: auto;
  }

  .project-card__media {
    min-height: 14rem;
  }

  .project-card__copy {
    padding: 1.2rem;
  }

  .project-card__copy h3 {
    font-size: 1.45rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 0 1.2rem 3rem;
  }

  .projects-section__header h2 {
    font-size: clamp(1.75rem, 5vw, 2.25rem);
  }

  .projects-section__banner {
    height: 18rem;
    margin-bottom: 2.5rem;
  }

  .projects-section__stats {
    grid-template-columns: 1fr 1fr;
  }

  .projects-section__grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    grid-template-columns: 1fr;
    grid-template-rows: 13rem 1fr;
  }

  .project-card__media {
    min-height: 13rem;
  }

  .project-card__copy h3 {
    font-size: 1.35rem;
  }

  .projects-section__gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 13rem;
  }
}

@media (max-width: 640px) {
  .projects-section {
    padding: 0 1rem 3.5rem;
  }

  .projects-section__banner {
    height: 15rem;
    margin-bottom: 2rem;
  }

  .projects-section__banner-stat {
    right: 0.9rem;
    bottom: 0.9rem;
    min-width: 6.5rem;
  }

  .projects-section__header {
    gap: 1rem;
    margin-bottom: 1.35rem;
  }

  .projects-section__header h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  .projects-section__header p:last-child {
    font-size: 0.9rem;
  }

  .projects-section__intro {
    margin-bottom: 1.25rem;
    gap: 0.9rem;
  }

  .projects-section__intro-copy {
    padding: 1.2rem;
  }

  .projects-section__intro-copy h3 {
    font-size: 1.35rem;
  }

  .projects-section__stats {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .projects-section__stat-card {
    min-height: 7.5rem;
    padding: 1rem;
  }

  .projects-section__stat-card strong {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  .projects-section__stat-card span {
    font-size: 0.8rem;
  }

  .projects-section__filters {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    gap: 0.6rem;
    padding-bottom: 0.5rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .projects-section__filters::-webkit-scrollbar {
    display: none;
  }

  .projects-section__filter {
    flex: 0 0 auto;
    padding: 0.6rem 0.95rem;
    font-size: 0.85rem;
    min-height: 2.5rem;
  }

  .projects-section__grid {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .projects-section__grid {
    min-height: auto;
  }

  .project-card {
    grid-template-columns: 1fr;
    grid-template-rows: 12rem 1fr;
  }

  .project-card__media {
    min-height: 12rem;
  }

  .project-card__copy {
    padding: 1rem;
    gap: 1.1rem;
  }

  .project-card__copy h3 {
    font-size: 1.2rem;
    line-height: 1.15;
  }

  .project-card__description {
    font-size: 0.88rem;
    margin-top: 0.5rem;
  }

  .project-card__link {
    padding: 0.7rem 1.25rem;
    font-size: 0.85rem;
    min-height: 2.5rem;
  }

  .project-card__progress-meta {
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.78rem;
  }

  .projects-section__process {
    margin-top: 2rem;
    padding-top: 2rem;
    gap: 1.5rem;
  }

  .projects-section__process-copy h3 {
    font-size: 1.35rem;
  }

  .projects-section__process-image {
    min-height: 12rem;
  }

  .projects-section__principle {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1rem;
  }

  .projects-section__principle > span {
    width: 2.75rem;
    height: 2.75rem;
    font-size: 0.8rem;
  }

  .projects-section__principle h4 {
    font-size: 1rem;
  }

  .projects-section__principle p {
    font-size: 0.88rem;
  }

  .projects-section__gallery {
    margin-top: 2rem;
  }

  .projects-section__gallery-header {
    display: block;
    margin-bottom: 1rem;
  }

  .projects-section__gallery-header h3 {
    font-size: clamp(1.35rem, 5vw, 1.75rem);
  }

  .projects-section__gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 12rem;
    gap: 0.8rem;
  }

  .projects-section__pagination {
    gap: 0.6rem;
    margin-top: 1.5rem;
  }

  .projects-section__arrow {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 0.9rem;
  }

  .projects-section__dot {
    width: 0.65rem;
    height: 0.65rem;
  }

  .projects-section__dot--active {
    width: 1.5rem;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 0 0.8rem 3rem;
  }

  .projects-section__banner {
    height: 13rem;
    margin-bottom: 1.5rem;
  }

  .projects-section__header h2 {
    font-size: clamp(1.35rem, 7vw, 1.75rem);
  }

  .projects-section__intro-copy h3 {
    font-size: 1.2rem;
  }

  .projects-section__filter {
    padding: 0.55rem 0.85rem;
    font-size: 0.8rem;
  }

  .project-card__media {
    min-height: 10.5rem;
  }

  .project-card__copy {
    padding: 0.9rem;
  }

  .project-card__copy h3 {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }

  .project-card__description {
    font-size: 0.82rem;
  }

  .project-card__link {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
}
@media (max-width: 768px) {
  :deep(.project-card a),
  :deep(.project-card button),
  :deep([class*="project-card"] a),
  :deep([class*="ProjectCard"] a),
  :deep([class*="project-card"] button),
  :deep([class*="ProjectCard"] button) {
    width: fit-content !important;
    min-width: 0 !important;
    min-height: 2.45rem !important;
    margin-inline: auto !important;
    padding: 0.65rem 1.05rem !important;
    border-radius: 0.45rem !important;
    font-size: 0.82rem !important;
    line-height: 1 !important;
  }
}
</style>
