<script setup lang="ts">
</script>

<template>
  <section id="mission" class="mission-section">
    <div class="container">
      <div class="mission-content">
        <div class="mission-text">
          <h2>Every Action Matters</h2>
          <p>At His Grace Foundation, we believe that meaningful change comes through dedicated action and community empowerment. Our mission is to provide essential resources and educational opportunities to underserved communities across Africa.</p>

          <div class="mission-highlights">
            <div class="highlight">
              <span class="highlight-icon">🎓</span>
              <div>
                <h4>Quality Education</h4>
                <p>Ensuring access to quality education for children in remote areas</p>
              </div>
            </div>

            <div class="highlight">
              <span class="highlight-icon">🏥</span>
              <div>
                <h4>Healthcare Access</h4>
                <p>Providing medical facilities and health resources to communities</p>
              </div>
            </div>

            <div class="highlight">
              <span class="highlight-icon">💧</span>
              <div>
                <h4>Clean Water</h4>
                <p>Bringing clean, safe water to villages and communities</p>
              </div>
            </div>
          </div>

          <button class="mission-btn">Join Our Mission</button>
        </div>

        <div class="mission-image">
          <img src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community impact" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  padding: 4rem 0;
  background: white;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-text h2 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.mission-text p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.mission-highlights {
  margin-bottom: 2.5rem;
}

.highlight {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.highlight:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(5px);
}

.highlight-icon {
  font-size: 2.5rem;
  min-width: 60px;
  text-align: center;
}

.highlight h4 {
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.highlight p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-light);
}

.mission-btn {
  background: var(--accent);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
}

.mission-btn:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 165, 0.3);
}

.mission-image {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.mission-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.mission-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .mission-content {
    gap: 2rem;
  }

  .mission-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .mission-content {
    grid-template-columns: 1fr;
  }

  .mission-text h2 {
    font-size: 2rem;
  }

  .mission-image {
    height: 300px;
  }

  .highlight {
    gap: 1rem;
    padding: 1rem;
  }

  .highlight-icon {
    font-size: 2rem;
    min-width: 50px;
  }
}

@media (max-width: 480px) {
  .mission-section {
    padding: 2rem 0;
  }

  .mission-text p {
    font-size: 1rem;
  }

  .highlight {
    margin-bottom: 1.5rem;
  }

  .mission-image {
    height: 250px;
  }
}
</style>
