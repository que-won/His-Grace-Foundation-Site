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
    <section class="page__hero">
      <div class="page__hero-inner">
        <p class="page__eyebrow">His Grace Foundation</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </section>

    <component :is="sectionComponent" v-if="sectionComponent" />

    <section v-else-if="kind === 'give-away'" class="page__custom">
      <div class="page__custom-inner">
        <div class="page__cards">
          <article>
            <h2>Clothing</h2>
            <p>Collect and share clothing for families who need immediate support.</p>
          </article>
          <article>
            <h2>Food Packages</h2>
            <p>Prepare simple food bundles for neighbors facing urgent shortages.</p>
          </article>
          <article>
            <h2>School Supplies</h2>
            <p>Donate notebooks, bags, and learning materials to children in need.</p>
          </article>
        </div>
      </div>
    </section>

    <section v-else-if="kind === 'contact'" class="page__custom">
      <div class="page__custom-inner page__contact">
        <article>
          <h2>Phone</h2>
          <a href="tel:+12673850667">+1 (267) 385-0667</a>
        </article>
        <article>
          <h2>Email</h2>
          <a href="mailto:info@hisgracefoundation.org">info@hisgracefoundation.org</a>
        </article>
        <article>
          <h2>Visit</h2>
          <p>Reach out for partnership, volunteering, or donation details.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page__hero {
  padding: 4rem 1.5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
}

.page__hero-inner {
  max-width: 1160px;
  margin: 0 auto;
}

.page__eyebrow {
  margin: 0 0 0.5rem;
  color: #7d2be0;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.page__hero h1 {
  margin: 0;
  color: #1f2428;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.05;
}

.page__hero p {
  max-width: 44ch;
  margin: 1rem 0 0;
  color: #5f6d75;
  line-height: 1.6;
}

.page__custom {
  padding: 0 1.5rem 4rem;
}

.page__custom-inner {
  max-width: 1160px;
  margin: 0 auto;
}

.page__cards,
.page__contact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.page__cards article,
.page__contact article {
  padding: 1.25rem;
  border: 1px solid #e8ecef;
  background: #fff;
  border-radius: 12px;
}

.page__cards h2,
.page__contact h2 {
  margin: 0 0 0.5rem;
  color: #1f2428;
  font-size: 1rem;
}

.page__cards p,
.page__contact p,
.page__contact a {
  margin: 0;
  color: #5f6d75;
  text-decoration: none;
}

@media (max-width: 900px) {
  .page__cards,
  .page__contact {
    grid-template-columns: 1fr;
  }
}
</style>
