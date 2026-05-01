<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <section class="footer__brand">
          <div class="footer__mark" aria-hidden="true">H</div>
          <div>
            <h2>His Grace Foundation</h2>
            <p>
              We support communities through education, care, and practical
              service that helps people move forward with dignity.
            </p>
          </div>
        </section>

        <nav class="footer__nav" aria-label="Footer navigation">
          <div class="footer__column">
            <h3>Explore</h3>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/why-us">Why Choose Us</RouterLink>
            <RouterLink to="/give-away">Give Away</RouterLink>
          </div>

          <div class="footer__column">
            <h3>Support</h3>
            <RouterLink to="/help">Help</RouterLink>
            <RouterLink to="/donations">Donations</RouterLink>
            <RouterLink to="/volunteer">Volunteer</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>

          <div class="footer__column footer__column--contact">
            <h3>Contact</h3>
            <a href="tel:+12673850667">+1 (267) 385-0667</a>
            <a href="mailto:info@hisgracefoundation.org">info@hisgracefoundation.org</a>
            <div class="footer__socials" aria-label="Social links">
              <a href="#contact" aria-label="Facebook">f</a>
              <a href="#contact" aria-label="Twitter">t</a>
              <a href="#contact" aria-label="Instagram">i</a>
              <a href="#contact" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </nav>
      </div>

      <div class="footer__bottom">
        <p>Copyright &copy; 2026 His Grace Foundation. All rights reserved.</p>
        <div class="footer__bottom-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/help">Support</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #101010;
  color: #f3f4f6;
}

.footer__inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 3rem 1.5rem 1.2rem;
}

.footer__top {
  display: grid;
  grid-template-columns: minmax(280px, 1.15fr) minmax(0, 1.25fr);
  gap: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__brand {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.footer__mark {
  display: grid;
  place-items: center;
  width: 2.6rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: #d5b800;
  color: #101010;
  font-size: 1.05rem;
  font-weight: 800;
}

.footer__brand h2 {
  margin: 0;
  font-size: 1.45rem;
  color: #fff;
}

.footer__brand p {
  max-width: 34ch;
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.94rem;
  line-height: 1.65;
}

.footer__nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.footer__column {
  padding-left: 1.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__column h3 {
  margin: 0 0 1rem;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
}

.footer__column a {
  display: block;
  margin-bottom: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer__column--contact a:first-of-type {
  color: #d5b800;
  font-weight: 800;
}

.footer__socials {
  display: flex;
  gap: 0.55rem;
  margin-top: 1rem;
}

.footer__socials a {
  display: grid;
  place-items: center;
  width: 2rem;
  aspect-ratio: 1;
  margin: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.82rem;
  text-decoration: none;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.84rem;
}

.footer__bottom p {
  margin: 0;
}

.footer__bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.footer__bottom-links a {
  color: rgba(255, 255, 255, 0.62);
  text-decoration: none;
}

@media (max-width: 900px) {
  .footer__top {
    grid-template-columns: 1fr;
  }

  .footer__nav {
    grid-template-columns: 1fr;
  }

  .footer__column {
    padding-left: 0;
    border-left: 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
}

@media (max-width: 640px) {
  .footer__inner {
    padding: 2.5rem 1rem 1rem;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
