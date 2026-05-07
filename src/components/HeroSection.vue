<template>
  <section id="home" class="hero-section">
    <div class="hero-stage">
      <div class="hero-copy">
        <h1 class="hero-copy__title">Only by Helping Each Other We Can Make World Better</h1>
        <p class="hero-description">
          Sed ullamcorper nibh in nunc eleifend, non semper magna egestas purus
          viverra. Curabitur congue dolor sit amet id interdum et.
        </p>

        <div class="hero-actions">
          <router-link class="hero-btn hero-btn--primary" to="/donations" aria-label="Navigate to donations page">
            <span class="btn-text">Donate Now</span>
          </router-link>
          <router-link class="hero-btn hero-btn--ghost" to="/about" aria-label="Read more about His Grace Foundation">
            <span class="btn-text">Read More</span>
          </router-link>
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
            <span>$30,000 raised</span>
          </div>
          <div class="hero-progress__track" aria-hidden="true">
            <div class="hero-progress__fill"></div>
          </div>
        </div>

        <div class="hero-payment">
          <router-link class="hero-payment__btn" to="/donations" aria-label="Donate to education support">Donate</router-link>
          <router-link class="hero-payment__btn" to="/donations" aria-label="Make a custom donation">Contribute</router-link>
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
        <router-link class="hero-mission__btn" to="/volunteer" aria-label="Become a volunteer with His Grace Foundation">Become Volunteer</router-link>
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

@media (max-width: 768px) {
  .hero-stage {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 2.5rem 1.5rem 3rem;
    gap: 1.5rem;
  }
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
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-copy__title {
  margin: 0;
  padding-top: 2.5rem;
  padding-left: 2.25rem;
  max-width: 111ch;
  font-size: clamp(2.7rem, 4.8vw, 4.35rem);
  line-height: 0.96;
  letter-spacing: 0;
  font-weight: 800;
  animation: slideInLeft 0.8s ease-out 0.1s backwards;
  word-spacing: 0.1em;
}

@media (max-width: 768px) {
  .hero-copy__title {
    padding-top: 1rem;
    padding-left: 0;
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }
}

.hero-description {
  max-width: 42ch;
  margin: 1rem 0 0;
  padding-left: 2.25rem;
  font-size: 0.96rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
}

@media (max-width: 768px) {
  .hero-description {
    padding-left: 0;
    font-size: 0.9rem;
    max-width: 100%;
  }
}

.hero-actions {
  padding-left: 2.25rem;
  display: flex;
  gap: 0.9rem;
  margin-top: 1.5rem;
  animation: slideInLeft 0.8s ease-out 0.2s backwards;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-actions {
    padding-left: 0;
    flex-direction: column;
    gap: 0.8rem;
  }
}

.hero-btn {
  border: 0;
  border-radius: 10px;
  padding: 0.95rem 1.8rem;
  min-width: 7.5rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .hero-btn {
    flex: 1;
    min-width: auto;
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }
}

.btn-text {
  position: relative;
  z-index: 2;
}

.hero-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

.hero-btn:hover::before {
  transform: scaleX(1);
}

.hero-btn--primary {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  box-shadow: 0 12px 24px rgba(142, 10, 199, 0.3);
}

.hero-btn--primary:hover {
  background: linear-gradient(135deg, #7d2be0 0%, #6a1fb8 100%);
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(142, 10, 199, 0.4);
}

.hero-btn--ghost {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.hero-btn--ghost:hover {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  border-color: transparent;
  color: #fff;
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(125, 43, 224, 0.4);
}

.hero-card {
  justify-self: end;
  width: min(100%, 25.5rem);
  padding: 1.45rem 1.45rem 1.25rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.98);
  color: #183128;
  box-shadow: 0 18px 40px rgba(15, 29, 27, 0.24);
  animation: slideInRight 0.8s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (max-width: 768px) {
  .hero-card {
    justify-self: auto;
    width: 100%;
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(142, 10, 199, 0.2);
}

.hero-card__tag {
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-card h2 {
  margin: 0.85rem 0 0.65rem;
  font-size: 1.55rem;
  line-height: 1.15;
  letter-spacing: 0;
}

@media (max-width: 768px) {
  .hero-card h2 {
    font-size: 1.3rem;
    margin: 0.65rem 0 0.5rem;
  }
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
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.08);
}

.hero-progress__fill {
  width: 65%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #8e0ac7, #7d2be0);
  animation: progressFill 1.5s ease-out;
  box-shadow: 0 0 10px rgba(142, 10, 199, 0.4);
}

@keyframes progressFill {
  from {
    width: 0;
  }
  to {
    width: 65%;
  }
}

.hero-payment {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  margin-top: 1rem;
}

.hero-payment__btn {
  padding: 0.82rem 0.9rem;
  border-radius: 10px;
  border: 2px solid #d8e3dd;
  background: #fff;
  color: #17352d;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-payment__btn:hover {
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(142, 10, 199, 0.4);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(12rem, 0.9fr);
  margin: -1.75rem 10.75rem 0;
  background: linear-gradient(135deg, #fff 0%, #f8f3ff 100%);
  box-shadow: 0 16px 40px rgba(15, 31, 29, 0.12);
  position: relative;
  z-index: 2;
  animation: slideUp 0.8s ease-out 0.3s backwards;
  border-radius: 0 0 12px 12px;
}

@media (max-width: 1024px) {
  .hero-stats {
    margin: -1.75rem 3rem 0;
    grid-template-columns: repeat(2, 1fr) minmax(12rem, 1fr);
    border-radius: 12px;
  }
}

@media (max-width: 768px) {
  .hero-stats {
    margin: 2rem -1.5rem 0;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    background: linear-gradient(135deg, #fff 0%, #f8f3ff 100%);
    box-shadow: 0 8px 20px rgba(15, 31, 29, 0.08);
    border-radius: 12px;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-stat,
.hero-mission {
  padding: 1.15rem 1.25rem;
  transition: all 0.3s ease;
}

.hero-stat {
  border-right: 1px solid #e8ece8;
}

@media (max-width: 768px) {
  .hero-stat,
  .hero-mission {
    padding: 0.85rem 1rem;
  }

  .hero-stat {
    border-right: none;
    border-bottom: 1px solid #e8ece8;
  }

  .hero-stat:nth-child(2n) {
    border-right: none;
  }

  .hero-stat:nth-child(n+3) {
    border-bottom: none;
  }
}

.hero-stat:hover {
  background: rgba(142, 10, 199, 0.05);
}

.hero-stat strong {
  display: block;
  margin-bottom: 0.35rem;
  color: #8e0ac7;
  font-size: 1.95rem;
  line-height: 1;
  animation: countUp 1.5s ease-out 0.3s;
}

@media (max-width: 768px) {
  .hero-stat strong {
    font-size: 1.45rem;
    margin-bottom: 0.25rem;
  }
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-stat span {
  font-size: 0.82rem;
  color: #5d7267;
}

.hero-mission {
  display: grid;
  align-content: center;
  gap: 0.55rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (max-width: 768px) {
  .hero-mission {
    grid-column: 1 / -1;
    gap: 0.45rem;
  }
}

.hero-mission:hover {
  transform: translateY(-3px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.15);
}

.hero-mission p {
  margin: 0;
  font-size: 1.04rem;
  font-weight: 700;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .hero-mission p {
    font-size: 0.9rem;
  }
}

.hero-mission__btn {
  justify-self: start;
  padding: 0.6rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-mission__btn:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Tablet (landscape) */
@media (max-width: 1024px) {
  .hero-stage {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 3rem 2rem 4rem;
    gap: 2rem;
  }

  .hero-copy {
    max-width: 100%;
  }

  .hero-copy__title {
    padding-left: 0;
    padding-top: 1.5rem;
    font-size: clamp(2rem, 5vw, 3.2rem);
  }

  .hero-description {
    padding-left: 0;
    font-size: 0.95rem;
  }

  .hero-actions {
    padding-left: 0;
    gap: 0.75rem;
  }

  .hero-btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  .hero-card {
    justify-self: start;
    width: 100%;
    max-width: 100%;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    margin: -1.5rem 2rem 0;
    border-radius: 12px;
  }

  .hero-stat {
    border-right: 0;
    border-bottom: 1px solid #e8ece8;
  }

  .hero-stat:nth-child(2n) {
    border-right: 1px solid #e8ece8;
  }

  .hero-mission {
    grid-column: 1 / -1;
  }
}

/* Tablet (portrait) */
@media (max-width: 768px) {
  .hero-stage {
    padding: 2.5rem 1.5rem 3.5rem;
    background-position: center;
  }

  .hero-copy__title {
    font-size: clamp(1.75rem, 6vw, 2.8rem);
    line-height: 1.1;
  }

  .hero-description {
    font-size: 0.9rem;
    max-width: 100%;
  }

  .hero-actions {
    gap: 0.75rem;
  }

  .hero-btn {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  .hero-card {
    padding: 1.25rem;
    border-radius: 10px;
  }

  .hero-card h2 {
    font-size: 1.4rem;
    margin: 0.75rem 0 0.5rem;
  }

  .hero-card p {
    font-size: 0.88rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    margin: -1.25rem 1.5rem 0;
    border-radius: 10px;
  }

  .hero-stat {
    border-right: 0;
    border-bottom: 1px solid #e8ece8;
    padding: 1rem 1.15rem;
  }

  .hero-stat:last-child {
    border-bottom: 0;
  }

  .hero-stat strong {
    font-size: 1.75rem;
  }

  .hero-stat span {
    font-size: 0.8rem;
  }
}

/* Mobile (large) */
@media (max-width: 640px) {
  .hero-section {
    padding: 0 0 2rem;
  }

  .hero-stage {
    padding: 1.5rem 1rem 3.5rem;
    min-height: auto;
    background-position: 60% center;
    gap: 1.5rem;
  }

  .hero-stage::after {
    opacity: 0.4;
  }

  .hero-copy__title {
    padding-top: 0.75rem;
    padding-left: 0;
    font-size: clamp(1.5rem, 7vw, 2.2rem);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .hero-description {
    padding-left: 0;
    font-size: 0.85rem;
    line-height: 1.5;
    margin-top: 0.8rem;
  }

  .hero-actions {
    padding-left: 0;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.2rem;
  }

  .hero-btn {
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    font-size: 0.9rem;
    min-width: auto;
    min-height: 2.8rem;
  }

  .hero-card {
    width: 100%;
    max-width: 100%;
    padding: 1.2rem 1.1rem;
    border-radius: 10px;
    box-shadow: 0 12px 28px rgba(15, 29, 27, 0.2);
    margin-top: 0.5rem;
  }

  .hero-card__tag {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }

  .hero-card h2 {
    font-size: 1.3rem;
    margin: 0.75rem 0 0.5rem;
    line-height: 1.2;
  }

  .hero-card p {
    font-size: 0.86rem;
    line-height: 1.5;
  }

  .hero-progress {
    margin-top: 1rem;
  }

  .hero-progress__head {
    font-size: 0.75rem;
    gap: 0.6rem;
  }

  .hero-progress__track {
    height: 0.65rem;
    border-radius: 999px;
  }

  .hero-payment {
    gap: 0.75rem;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .hero-payment__btn {
    padding: 0.8rem 1rem;
    font-size: 0.86rem;
    border-radius: 8px;
    min-height: 2.6rem;
  }

  .hero-stats {
    grid-template-columns: 1fr 1fr;
    margin: -1.2rem 1rem 0;
    border-radius: 10px;
    box-shadow: 0 12px 32px rgba(15, 31, 29, 0.15);
    padding: 0;
    gap: 0;
  }

  .hero-stat {
    padding: 1rem;
    border-right: 1px solid #e8ece8;
    border-bottom: 1px solid #e8ece8;
  }

  .hero-stat:nth-child(2n) {
    border-right: 0;
  }

  .hero-stat:nth-last-child(1),
  .hero-stat:nth-last-child(2) {
    border-bottom: 0;
  }

  .hero-stat strong {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }

  .hero-stat span {
    font-size: 0.76rem;
  }

  .hero-mission {
    grid-column: 1 / -1;
    padding: 1.2rem;
    gap: 0.6rem;
    border-radius: 0 0 10px 10px;
  }

  .hero-mission p {
    font-size: 0.98rem;
  }

  .hero-mission__btn {
    padding: 0.65rem 1.1rem;
    font-size: 0.85rem;
    border-radius: 6px;
    min-height: 2.4rem;
  }
}

/* Mobile (small) */
@media (max-width: 480px) {
  .hero-stage {
    padding: 1.75rem 0.75rem 2.25rem;
  }

  .hero-copy__title {
    font-size: clamp(1.4rem, 6vw, 2rem);
    line-height: 1.1;
  }

  .hero-description {
    font-size: 0.82rem;
    margin-top: 0.6rem;
  }

  .hero-actions {
    margin-top: 1rem;
    gap: 0.6rem;
  }

  .hero-btn {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }

  .hero-card {
    padding: 1rem 0.9rem;
  }

  .hero-card h2 {
    font-size: 1.15rem;
    margin: 0.6rem 0 0.4rem;
  }

  .hero-card p {
    font-size: 0.82rem;
  }

  .hero-stats {
    margin: -0.9rem 0.75rem 0;
  }

  .hero-stat {
    padding: 0.9rem 0.85rem;
  }

  .hero-stat strong {
    font-size: 1.5rem;
  }

  .hero-stat span {
    font-size: 0.75rem;
  }

  .hero-mission {
    padding: 0.95rem 0.85rem;
  }

  .hero-mission p {
    font-size: 0.9rem;
  }

  .hero-mission__btn {
    padding: 0.55rem 0.95rem;
    font-size: 0.8rem;
  }
}
@media (max-width: 768px) {
  .hero-section,
  .hero,
  section {
    min-height: auto;
    padding: clamp(5.5rem, 16vw, 7rem) 1.25rem 2.5rem;
    overflow: hidden;
  }

  .hero-section__inner,
  .hero__inner,
  section > div:first-child {
    width: min(100%, 42rem);
    margin-inline: auto;
  }

  .hero-section__content,
  .hero__content,
  section > div:first-child {
    display: grid;
    gap: 1.2rem;
  }

  .hero-section h1,
  .hero h1,
  section h1 {
    max-width: 11ch;
    margin-bottom: 0;
    font-size: clamp(2.4rem, 11vw, 4rem);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .hero-section p,
  .hero p,
  section p {
    max-width: 34rem;
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .hero-section a,
  .hero-section button,
  .hero a,
  .hero button,
  section a,
  section button {
    min-height: 2.9rem;
  }

  .hero-section__actions,
  .hero__actions,
  section nav,
  section form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .hero-section img,
  .hero img,
  section img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
}

@media (max-width: 520px) {
  .hero-section,
  .hero,
  section {
    padding: 5rem 1rem 2rem;
  }

  .hero-section h1,
  .hero h1,
  section h1 {
    max-width: 10ch;
    font-size: clamp(2.05rem, 12vw, 3rem);
  }

  .hero-section p,
  .hero p,
  section p {
    font-size: 0.92rem;
  }

  .hero-section__actions,
  .hero__actions,
  section nav,
  section form {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-section__actions a,
  .hero-section__actions button,
  .hero__actions a,
  .hero__actions button {
    width: 100%;
    justify-content: center;
  }
}

@media (hover: none) {
  .hero-section *,
  .hero *,
  section * {
    transition-duration: 0.01ms;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-section *,
  .hero *,
  section * {
    animation: none;
    transition: none;
  }
}
</style>
