<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface StatItem {
  number: string
  label: string
  icon: string
}

const stats = ref<StatItem[]>([
  { number: '700+', label: 'Volunteers Worldwide', icon: '👥' },
  { number: '106', label: 'Active Projects', icon: '🎯' },
  { number: '13', label: 'Countries Served', icon: '🌍' },
  { number: '10.2M', label: 'Total Donations', icon: '💰' }
])

const displayNumbers = ref<string[]>(['0', '0', '0', '0'])

const animateNumbers = () => {
  stats.value.forEach((stat, index) => {
    const finalValue = parseInt(stat.number.replace(/[^0-9]/g, ''))
    let current = 0
    const increment = finalValue / 50

    const interval = setInterval(() => {
      current += increment
      if (current >= finalValue) {
        displayNumbers.value[index] = stat.number
        clearInterval(interval)
      } else {
        displayNumbers.value[index] = Math.floor(current).toString()
      }
    }, 30)
  })
}

onMounted(() => {
  setTimeout(animateNumbers, 300)
})
</script>

<template>
  <section id="about" class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-card">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-number">{{ displayNumbers[index] }}+</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  background: var(--bg-light);
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-light);
  font-weight: 500;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    padding: 1.75rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-icon {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }
}
</style>
