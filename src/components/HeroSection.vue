<script setup lang="ts">
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="container hero-container">
        <h1 class="hero-title">Help Children in Africa</h1>
        <p class="hero-subtitle">Every action matters. Join us in creating lasting change through education, healthcare, and essential resources.</p>
        <div class="hero-buttons">
          <button class="primary-btn">Learn More About Our Mission</button>
          <button class="secondary-btn">Make a Donation</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.pexels.com/photos/5900159/pexels-photo-5900159.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover;
  opacity: 0.25;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-container {
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 0.8s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.primary-btn {
  background: var(--accent);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.primary-btn:hover {
  background: var(--accent-light);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(14, 165, 165, 0.4);
}

.secondary-btn {
  background: white;
  color: var(--primary);
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: transparent;
  color: white;
  transform: translateY(-3px);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 500px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-buttons {
    gap: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 400px;
  }

  .hero-title {
    font-size: 1.875rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}
</style>
