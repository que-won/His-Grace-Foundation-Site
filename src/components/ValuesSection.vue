<script setup lang="ts">
interface Value {
  title: string
  description: string
  icon: string
}

const values: Value[] = [
  {
    title: 'Service Beyond Self',
    description: 'We are committed to serving others with dedication and compassion, putting community needs first.',
    icon: '❤️'
  },
  {
    title: 'Sustainability',
    description: 'Our programs are designed for long-term impact, ensuring lasting change for future generations.',
    icon: '🌱'
  },
  {
    title: 'Empowerment',
    description: 'We empower communities to take control of their futures and drive their own development.',
    icon: '💪'
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all our actions and decisions.',
    icon: '⭐'
  },
  {
    title: 'Accountability',
    description: 'We are responsible for every resource and committed to the communities we serve.',
    icon: '✓'
  },
  {
    title: 'Transparency',
    description: 'We openly communicate our progress, challenges, and the impact of our work.',
    icon: '🔍'
  }
]
</script>

<template>
  <section class="values-section">
    <div class="container">
      <div class="section-title">
        <h2>Our Core Values</h2>
        <p>Six pillars that guide everything we do at His Grace Foundation</p>
      </div>

      <div class="values-grid">
        <div v-for="(value, index) in values" :key="index" class="value-card">
          <div class="value-icon">{{ value.icon }}</div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  padding: 4rem 0;
  color: white;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title h2 {
  color: white;
  margin-bottom: 1rem;
}

.section-title p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.value-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.value-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.value-card p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .value-card {
    padding: 1.75rem;
  }

  .value-icon {
    font-size: 2.5rem;
  }

  .value-card h3 {
    font-size: 1.25rem;
  }

  .value-card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .value-card {
    padding: 1.5rem;
  }
}
</style>
