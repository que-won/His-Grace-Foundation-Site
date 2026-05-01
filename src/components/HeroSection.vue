<template>
  <section id="home" class="hero-section">
    <div class="hero-stage">
      <div class="hero-copy">
        <p class="hero-eyebrow">Lorem ipsum dolor sit amet</p>
        <h1>Only by Helping Each Other We Can Make World Better</h1>
        <p class="hero-description">
          Sed ullamcorper nibh in nunc eleifend, non semper magna egestas purus
          viverra. Curabitur congue dolor sit amet id interdum et.
        </p>

        <div class="hero-actions">
          <button class="hero-btn hero-btn--primary" type="button">Donate</button>
          <button class="hero-btn hero-btn--ghost" type="button">Read More</button>
        </div>
      </div>

      <aside class="hero-card" aria-label="Donation summary">
        <span class="hero-card__tag">Education</span>
        <h2>Help Children Get out of Poverty &amp; have a Future</h2>
        <p>
          We provide support, schooling, and safe spaces for children and
          families who need help building a stronger tomorrow.
        </p>

        <div class="hero-progress">
          <div class="hero-progress__head">
            <span>65% Funded</span>
            <span>$330,000 raised</span>
          </div>
          <div class="hero-progress__track" aria-hidden="true">
            <div class="hero-progress__fill"></div>
          </div>
        </div>

        <div class="hero-payment">
          <button type="button">Pay</button>
          <button type="button">Pay</button>
        </div>
      </aside>
    </div>

    <div class="hero-stats">
      <div class="hero-stat">
        <strong>20M</strong>
        <span>Number of Supporters</span>
      </div>
      <div class="hero-stat">
        <strong>15K+</strong>
        <span>Volunteers Worldwide</span>
      </div>
      <div class="hero-stat">
        <strong>98%</strong>
        <span>Completed Projects</span>
      </div>
      <div class="hero-mission">
        <p>Our Goal is to Help Poor People</p>
        <button type="button">Become Volunteer</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 0 0 2rem;
  overflow: hidden;
}

.hero-stage {
  position: relative;
  min-height: 34rem;
  padding: 4.25rem 3rem 5rem;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.8fr);
  align-items: center;
  gap: 2.5rem;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(6, 32, 26, 0.9) 0%, rgba(6, 32, 26, 0.66) 44%, rgba(6, 32, 26, 0.18) 100%),
    url('../../public/images/real1.jpeg') center left / cover no-repeat;
}

.hero-stage::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 33%, rgba(255, 255, 255, 0.08) 0 6%, transparent 6.4%),
    radial-gradient(circle at 23% 24%, rgba(255, 215, 134, 0.2) 0 2.1%, transparent 2.4%),
    linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, transparent 32%);
  pointer-events: none;
}

.hero-copy,
.hero-card {
  position: relative;
  z-index: 1;
}

.hero-copy {
  max-width: 38rem;
}

.hero-eyebrow {
  margin: 0 0 0.85rem;
  color: #8e0ac7;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0;
  max-width: 11ch;
  font-size: clamp(2.7rem, 4.8vw, 4.35rem);
  line-height: 0.96;
  letter-spacing: 0;
  font-weight: 800;
}

.hero-description {
  max-width: 42ch;
  margin: 1rem 0 0;
  font-size: 0.96rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

.hero-actions {
  display: flex;
  gap: 0.9rem;
  margin-top: 1.5rem;
}

.hero-btn {
  border: 0;
  border-radius: 8px;
  padding: 0.95rem 1.35rem;
  min-width: 7.5rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.hero-btn--primary {
  background: #8e0ac7;
  color: #fff;
  box-shadow: 0 12px 20px rgba(22, 168, 95, 0.24);
}

.hero-btn--ghost {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.hero-card {
  justify-self: end;
  width: min(100%, 25.5rem);
  padding: 1.45rem 1.45rem 1.25rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.98);
  color: #183128;
  box-shadow: 0 18px 34px rgba(15, 29, 27, 0.24);
}

.hero-card__tag {
  display: inline-flex;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  background: #8e0ac7;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}

.hero-card h2 {
  margin: 0.85rem 0 0.65rem;
  font-size: 1.55rem;
  line-height: 1.15;
  letter-spacing: 0;
}

.hero-card p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #5a7268;
}

.hero-progress {
  margin-top: 1.1rem;
}

.hero-progress__head {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: #35564c;
}

.hero-progress__track {
  height: 0.68rem;
  border-radius: 999px;
  background: #e1ece5;
  overflow: hidden;
}

.hero-progress__fill {
  width: 65%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #8e0ac7, #8e0ac7);
}

.hero-payment {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  margin-top: 1rem;
}

.hero-payment button {
  padding: 0.82rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #d8e3dd;
  background: #fff;
  color: #17352d;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(12rem, 0.9fr);
  margin: -1.75rem 10.75rem 0;
  background: #fff;
  box-shadow: 0 16px 30px rgba(15, 31, 29, 0.12);
  position: relative;
  z-index: 2;
}

.hero-stat,
.hero-mission {
  padding: 1.15rem 1.25rem;
}

.hero-stat {
  border-right: 1px solid #e8ece8;
}

.hero-stat strong {
  display: block;
  margin-bottom: 0.35rem;
  color: #8e0ac7;
  font-size: 1.95rem;
  line-height: 1;
}

.hero-stat span {
  font-size: 0.82rem;
  color: #5d7267;
}

.hero-mission {
  display: grid;
  align-content: center;
  gap: 0.55rem;
  background: #8e0ac7;
  color: #fff;
}

.hero-mission p {
  margin: 0;
  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-mission button {
  justify-self: start;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .hero-stage {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 3.5rem 1.5rem 4rem;
  }

  .hero-card {
    justify-self: start;
  }

  .hero-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-mission {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .hero-stage {
    padding: 2.75rem 1rem 3.25rem;
  }

  .hero-copy h1 {
    max-width: 100%;
    font-size: 2.35rem;
  }

  .hero-actions {
    flex-wrap: wrap;
  }

  .hero-card {
    width: 100%;
    padding: 1.2rem;
  }

  .hero-card h2 {
    font-size: 1.3rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    margin: -1rem 1rem 0;
  }

  .hero-stat {
    border-right: 0;
    border-bottom: 1px solid #e8ece8;
  }
}
</style>
