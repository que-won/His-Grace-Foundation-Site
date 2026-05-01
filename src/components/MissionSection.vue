<template>
  <section id="about" class="about-section">
    <div class="about-section__inner">
      <div id="mission" class="about-section__anchor" aria-hidden="true"></div>
      <div class="about-card">
        <div class="about-card__media">
          <img
            src="../../public/images/real1.jpeg"
            alt="Volunteer team supporting a charity initiative"
          />
          <div class="about-card__badge" aria-hidden="true">❤</div>
        </div>

        <div class="about-card__content">
          <p class="about-card__eyebrow">About Us</p>
          <h2>We&apos;re Non-Profit Charity &amp; NGO Organization</h2>
          <ul class="about-card__list">
            <li>Support people in extreme need</li>
            <li>Largest global environmental community</li>
            <li>Make the world a better place</li>
            <li>Share your love for humanity</li>
          </ul>
          <p class="about-card__text">
            We work with communities that need consistent care, practical
            support, and a reliable partner that shows up for education,
            wellbeing, and opportunity.
          </p>
          <a class="about-card__button" href="#why-us">Why Choose Us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4.5rem 1.5rem;
  background: #fff;
  scroll-margin-top: 6rem;
}

.about-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
}

.about-section__anchor {
  position: absolute;
  inset: 0 auto auto 0;
  width: 0;
  height: 0;
}

.about-card {
  display: grid;
  grid-template-columns: minmax(280px, 1.05fr) minmax(300px, 0.95fr);
  align-items: center;
  gap: 2.5rem;
}

.about-card__media {
  position: relative;
  min-height: 24rem;
}

.about-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 24rem;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(21, 33, 31, 0.16);
}

.about-card__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: grid;
  place-items: center;
  width: 3.25rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: #8e0ac6;
  color: #fff;
  font-size: 1.4rem;
  box-shadow: 0 10px 20px rgba(142, 10, 198, 0.25);
}

.about-card__content {
  padding: 0.5rem 0;
}

.about-card__eyebrow {
  margin: 0 0 0.5rem;
  color: #8e0ac6;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.about-card__content h2 {
  margin: 0;
  max-width: 14ch;
  color: #17352d;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.05;
  letter-spacing: 0;
}

.about-card__list {
  margin: 1.35rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
}

.about-card__list li {
  position: relative;
  padding-left: 1.35rem;
  color: #35564c;
  font-size: 0.96rem;
  line-height: 1.45;
}

.about-card__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: #8e0ac6;
}

.about-card__text {
  margin: 1rem 0 0;
  max-width: 44ch;
  color: #6a7f76;
  font-size: 0.94rem;
  line-height: 1.65;
}

.about-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4rem;
  min-width: 8.5rem;
  padding: 0.9rem 1.25rem;
  border-radius: 8px;
  background: #8e0ac6;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 18px rgba(142, 10, 198, 0.22);
}

@media (max-width: 900px) {
  .about-card {
    grid-template-columns: 1fr;
  }

  .about-card__content h2 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .about-section {
    padding: 3rem 1rem;
  }

  .about-card__media,
  .about-card__media img {
    min-height: 18rem;
  }

  .about-card {
    gap: 1.5rem;
  }
}
</style>
