<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">Make a Difference Today</h2>
        <p class="cta-description">
          Your contribution, no matter how small, creates lasting change in the lives of 
          vulnerable communities. Join us in building a better future.
        </p>

        <div class="cta-actions">
          <router-link to="/donations" class="cta-btn cta-btn--primary">
            Donate Now
          </router-link>
          <router-link to="/volunteer" class="cta-btn cta-btn--secondary">
            Become a Volunteer
          </router-link>
        </div>

        <div class="cta-stats">
          <div class="cta-stat-item">
            <span class="cta-stat-number">50,000+</span>
            <span class="cta-stat-label">Lives Impacted</span>
          </div>
          <div class="cta-stat-item">
            <span class="cta-stat-number">1,200+</span>
            <span class="cta-stat-label">Active Volunteers</span>
          </div>
          <div class="cta-stat-item">
            <span class="cta-stat-number">25+</span>
            <span class="cta-stat-label">Projects Running</span>
          </div>
        </div>
      </div>

      <div class="cta-visual">
        <div class="cta-circle cta-circle--1"></div>
        <div class="cta-circle cta-circle--2"></div>
        <div class="cta-circle cta-circle--3"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-section {
  padding: clamp(3rem, 5vw, 5rem) 1.5rem;
  background: linear-gradient(135deg, #7d2be0 0%, #8e0ac7 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="rgba(255,255,255,0.05)"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>') repeat;
  opacity: 0.5;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.cta-content {
  color: #fff;
  animation: slideInLeft 0.8s ease-out;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 2.5rem 0;
  opacity: 0.95;
  max-width: 500px;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 1rem 2.2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.cta-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.cta-btn:hover::before {
  transform: scaleX(1);
}

.cta-btn--primary {
  background: #fff;
  color: #7d2be0;
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
}

.cta-btn--primary:hover {
  transform: translateY(-4px);
  background: #f0e6ff;
  box-shadow: 0 12px 28px rgba(255, 255, 255, 0.4);
}

.cta-btn--secondary {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.cta-btn--secondary:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
}

.cta-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.cta-stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fadeInUp 0.8s ease-out backwards;
}

.cta-stat-item:nth-child(1) {
  animation-delay: 0.2s;
}

.cta-stat-item:nth-child(2) {
  animation-delay: 0.3s;
}

.cta-stat-item:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
}

.cta-stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.cta-visual {
  position: relative;
  height: 400px;
  animation: slideInRight 0.8s ease-out;
}

.cta-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.cta-circle--1 {
  width: 200px;
  height: 200px;
  top: -50px;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.cta-circle--2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite 0.5s backwards;
}

.cta-circle--3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 20%;
  animation: float 6s ease-in-out infinite 1s backwards;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .cta-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta-title {
    font-size: 2.2rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .cta-visual {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 2.5rem 1.25rem;
  }

  .cta-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .cta-content {
    text-align: center;
  }

  .cta-title {
    font-size: clamp(1.75rem, 4vw, 2.1rem);
    margin-bottom: 1.2rem;
  }

  .cta-description {
    font-size: 0.95rem;
    margin-bottom: 1.8rem;
    max-width: 100%;
  }

  .cta-actions {
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .cta-btn {
    width: 100%;
    padding: 0.95rem 1.8rem;
    font-size: 0.95rem;
  }

  .cta-stats {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .cta-stat-number {
    font-size: 1.6rem;
  }

  .cta-stat-label {
    font-size: 0.88rem;
  }

  .cta-visual {
    display: none;
  }
}

@media (max-width: 640px) {
  .cta-section {
    padding: 2rem 1rem;
  }

  .cta-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .cta-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .cta-actions {
    margin-bottom: 1.8rem;
    gap: 0.9rem;
  }

  .cta-btn {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }

  .cta-stats {
    gap: 1rem;
  }

  .cta-stat-item {
    gap: 0.4rem;
  }

  .cta-stat-number {
    font-size: 1.45rem;
  }

  .cta-stat-label {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: 1.75rem 0.9rem;
  }

  .cta-title {
    font-size: 1.6rem;
    margin-bottom: 0.85rem;
  }

  .cta-description {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  .cta-actions {
    margin-bottom: 1.5rem;
    gap: 0.8rem;
  }

  .cta-btn {
    padding: 0.85rem 1.3rem;
    font-size: 0.85rem;
  }

  .cta-stats {
    gap: 0.9rem;
  }

  .cta-stat-number {
    font-size: 1.35rem;
  }

  .cta-stat-label {
    font-size: 0.8rem;
  }
}
</style>
