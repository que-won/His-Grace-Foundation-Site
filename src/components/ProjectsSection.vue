<template>
  <section id="projects" class="projects-section">
    <div class="projects-section__inner">
      <div class="projects-section__grid">
        <article class="project-card">
          <div class="project-card__copy">
            <p class="project-card__eyebrow">Clean water</p>
            <h3>Donation for Clean Water to the...</h3>
            <a href="#contact">Read more <span aria-hidden="true">›</span></a>
          </div>
          <div class="project-card__media">
            <img
              src="../../public/images/real1.jpeg"
              alt="Children collecting clean water"
            />
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__copy">
            <p class="project-card__eyebrow">Educations</p>
            <h3>Donating to support education...</h3>
            <a href="#contact">Read more <span aria-hidden="true">›</span></a>
          </div>
          <div class="project-card__media">
            <img
              src="../../public/images/real1.jpeg"
              alt="Child smiling in a classroom"
            />
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__copy">
            <p class="project-card__eyebrow">Healthy Food</p>
            <h3>Donation for Healthly Food to...</h3>
            <a href="#contact">Read more <span aria-hidden="true">›</span></a>
          </div>
          <div class="project-card__media">
            <img
              src="../../public/images/real1.jpeg"
              alt="Child holding food in a community setting"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4.5rem 1.5rem 0;
  background: #fff;
}

.projects-section__inner {
  max-width: 1160px;
  margin: 0 auto;
}

.projects-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(140px, 0.85fr);
  min-height: 18rem;
  overflow: hidden;
  background: #1f1f1f;
  box-shadow: 0 12px 24px rgba(18, 29, 27, 0.08);
}

.project-card__copy {
  display: grid;
  align-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.15rem 1.05rem;
  color: #fff;
}

.project-card__eyebrow {
  margin: 0;
  color: #f0b62a;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
}

.project-card__copy h3 {
  margin: 0;
  max-width: 8.5ch;
  font-size: 1.6rem;
  line-height: 1.08;
  letter-spacing: 0;
  font-weight: 800;
}

.project-card__copy a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  width: fit-content;
  padding: 0.78rem 1rem;
  background: #ff5d23;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
}

.project-card__media {
  min-height: 100%;
}

.project-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .projects-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .projects-section {
    padding: 3rem 1rem 0;
  }

  .project-card {
    grid-template-columns: 1fr;
  }

  .project-card__copy h3 {
    max-width: 100%;
    font-size: 1.4rem;
  }

  .project-card__media {
    min-height: 14rem;
  }
}
</style>
