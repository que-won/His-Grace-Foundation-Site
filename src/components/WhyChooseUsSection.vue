<template>
  <section id="why-us" class="why-us">
    <div class="why-us__inner">
      <div id="volunteer" class="why-us__anchor" aria-hidden="true"></div>
      <div class="why-us__copy">
        <p class="why-us__eyebrow">Why People Choose Us</p>
        <h2>One of the most popular charitable projects</h2>

        <div class="why-us__grid">
          <article class="why-us__item">
            <span class="why-us__icon" aria-hidden="true">👥</span>
            <div>
              <h3>Charity Network</h3>
              <p>The first $25,000 we raise will go 100% to the donation.</p>
            </div>
          </article>

          <article class="why-us__item">
            <span class="why-us__icon" aria-hidden="true">🧩</span>
            <div>
              <h3>Solve Problems</h3>
              <p>Get your questions answered by our staff, fellow users.</p>
            </div>
          </article>

          <article class="why-us__item">
            <span class="why-us__icon" aria-hidden="true">🎓</span>
            <div>
              <h3>Kids Education</h3>
              <p>16,000 students and professionals from the global world.</p>
            </div>
          </article>

          <article class="why-us__item">
            <span class="why-us__icon" aria-hidden="true">🤝</span>
            <div>
              <h3>Helping Hand</h3>
              <p>300 moderated sessions, 450 hours of technical training.</p>
            </div>
          </article>
        </div>
      </div>

      <div class="why-us__media">
        <img
          src="../../public/images/real1.jpeg"
          alt="Child holding up colorful painted hands"
        />
        <div class="why-us__bar" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us {
  padding: clamp(2.5rem, 5vw, 4.5rem) 1.5rem 0;
  background: #fff;
}

@media (max-width: 768px) {
  .why-us {
    padding: clamp(2rem, 4vw, 3rem) 1rem 0;
  }
}

.why-us__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  align-items: stretch;
  gap: 2rem;
  max-width: 1180px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
  box-shadow: 0 14px 36px rgba(19, 31, 29, 0.08);
  position: relative;
}

@media (max-width: 768px) {
  .why-us__inner {
    grid-template-columns: 1fr;
    gap: 1rem;
    border-radius: 8px;
  }
}

.why-us__anchor {
  position: absolute;
  inset: 0 auto auto 0;
  width: 0;
  height: 0;
}

.why-us__copy {
  padding: 3.2rem 2.8rem 2.2rem;
}

@media (max-width: 768px) {
  .why-us__copy {
    padding: 2rem 1.5rem;
  }
}

.why-us__eyebrow {
  margin: 0 0 0.6rem;
  color: #17352d;
  font-size: 0.95rem;
  font-weight: 800;
}

.why-us__copy h2 {
  margin: 0;
  max-width: 30ch;
  font-size: clamp(2rem, 2.8vw, 2.9rem);
  line-height: 1.05;
  letter-spacing: 0;
  color: #0f1f1d;
}

@media (max-width: 768px) {
  .why-us__copy h2 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    max-width: 100%;
  }
}

.why-us__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem 1.1rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .why-us__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
}

.why-us__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: start;
}

.why-us__icon {
  display: grid;
  place-items: center;
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: #f5f8fb;
  font-size: 1.3rem;
  box-shadow: inset 0 0 0 1px #e7edf2;
}

.why-us__item h3 {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 800;
  color: #2a2f33;
  text-transform: uppercase;
}

.why-us__item p {
  margin: 0;
  color: #6c7880;
  font-size: 0.92rem;
  line-height: 1.45;
}

.why-us__media {
  position: relative;
  min-height: 28rem;
}

@media (max-width: 768px) {
  .why-us__media {
    min-height: 20rem;
  }
}

.why-us__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.why-us__bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.55rem;
  background: linear-gradient(90deg, #2d6fb7 0%, #0f5fb1 70%, #c7d7ea 70%, #c7d7ea 100%);
}

@media (max-width: 1024px) {
  .why-us__inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .why-us__copy {
    padding: 2.5rem 2rem 1.75rem;
  }

  .why-us__copy h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
  }

  .why-us__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem 1rem;
  }

  .why-us__media {
    min-height: 22rem;
  }
}

@media (max-width: 768px) {
  .why-us {
    padding: 2.5rem 1.25rem 0;
  }

  .why-us__inner {
    grid-template-columns: 1fr;
    gap: 1.35rem;
    border-radius: 10px;
  }

  .why-us__copy {
    padding: 2rem 1.5rem 1.5rem;
  }

  .why-us__eyebrow {
    font-size: 0.92rem;
    margin-bottom: 0.5rem;
  }

  .why-us__copy h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    max-width: 100%;
  }

  .why-us__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.75rem;
  }

  .why-us__item {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.85rem;
  }

  .why-us__icon {
    width: 2.8rem;
    font-size: 1.2rem;
  }

  .why-us__item h3 {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .why-us__item p {
    font-size: 0.88rem;
  }

  .why-us__media {
    min-height: 20rem;
    order: -1;
  }
}

@media (max-width: 640px) {
  .why-us {
    padding: 2rem 1rem 0;
  }

  .why-us__inner {
    gap: 1.2rem;
    border-radius: 8px;
  }

  .why-us__copy {
    padding: 1.75rem 1.25rem 1.25rem;
  }

  .why-us__eyebrow {
    font-size: 0.88rem;
    margin-bottom: 0.45rem;
  }

  .why-us__copy h2 {
    font-size: 1.6rem;
    line-height: 1.1;
  }

  .why-us__grid {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-top: 1.5rem;
  }

  .why-us__item {
    gap: 0.8rem;
  }

  .why-us__icon {
    width: 2.6rem;
    font-size: 1.1rem;
    min-width: 2.6rem;
  }

  .why-us__item h3 {
    font-size: 0.78rem;
    margin-bottom: 0.25rem;
  }

  .why-us__item p {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .why-us__media {
    min-height: 18rem;
  }

  .why-us__bar {
    height: 0.4rem;
  }
}

@media (max-width: 480px) {
  .why-us {
    padding: 1.75rem 0.9rem 0;
  }

  .why-us__inner {
    gap: 1.1rem;
    border-radius: 6px;
  }

  .why-us__copy {
    padding: 1.5rem 1.1rem 1.1rem;
  }

  .why-us__eyebrow {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .why-us__copy h2 {
    font-size: 1.5rem;
  }

  .why-us__grid {
    gap: 0.85rem;
    margin-top: 1.3rem;
  }

  .why-us__item {
    gap: 0.75rem;
  }

  .why-us__icon {
    width: 2.4rem;
    font-size: 1rem;
    flex-shrink: 0;
  }

  .why-us__item h3 {
    font-size: 0.75rem;
    margin-bottom: 0.2rem;
  }

  .why-us__item p {
    font-size: 0.82rem;
  }

  .why-us__media {
    min-height: 16rem;
  }
}
</style>
