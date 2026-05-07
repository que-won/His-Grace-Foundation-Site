<template>
  <section id="help" class="help-section">
    <div class="help-section__inner">
      <div id="donations" class="help-section__anchor" aria-hidden="true"></div>
      <div class="help-hero">
        <div class="help-hero__content">
          <p class="help-hero__eyebrow">Help for Cause</p>
          <h2>How Can You Help?</h2>
          <p class="help-hero__text">
            Your support helps us move faster, reach further, and serve more
            families with education, care, and practical assistance.
          </p>

          <div class="help-actions">
            <article class="help-action">
              <span aria-hidden="true">▣</span>
              <strong>Media</strong>
            </article>
            <article class="help-action">
              <span aria-hidden="true">👥</span>
              <strong>Mobilization</strong>
            </article>
            <article class="help-action">
              <span aria-hidden="true">✚</span>
              <strong>Projection</strong>
            </article>
            <article class="help-action">
              <span aria-hidden="true">◎</span>
              <strong>Support</strong>
            </article>
          </div>
        </div>

        <div class="help-hero__media">
          <img
            src="https://images.pexels.com/photos/8613144/pexels-photo-8613144.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Children playing on a field"
          />
          <div class="help-hero__play" aria-hidden="true"></div>
        </div>
      </div>

      <div class="recent-updates">
        <h3>Most Recent Updates</h3>

        <div class="recent-updates__grid">
          <article class="update-card">
            <img
              src="/images/real1.jpeg"
              alt="Care for children"
            />
            <div class="update-card__body">
              <p>Care for Children</p>
              <span>By Relief Team</span>
            </div>
          </article>

          <article class="update-card">
            <img
              src="/images/real1.jpeg"
              alt="Our children matter"
            />
            <div class="update-card__body">
              <p>Our Children Matter</p>
              <span>By Staff</span>
            </div>
          </article>

          <article class="update-card">
            <img
              src="/images/real1.jpeg"
              alt="A standard post format"
            />
            <div class="update-card__body">
              <p>A Standard Post Format</p>
              <span>By Staff</span>
            </div>
          </article>

          <article class="update-card">
            <img
              src="/images/real1.jpeg"
              alt="An another one"
            />
            <div class="update-card__body">
              <p>An Another One</p>
              <span>By Staff</span>
            </div>
          </article>
        </div>
      </div>

      <form class="newsletter" @submit.prevent>
        <div class="newsletter__brand">
          <div class="newsletter__icon" aria-hidden="true">✉</div>
          <div>
            <p>Newsletter Sign-Up</p>
            <span>Join our mailing list for updates and stories from the field.</span>
          </div>
        </div>

        <div class="newsletter__fields">
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="First Name" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.help-section {
  padding: clamp(2.5rem, 5vw, 4rem) 1.5rem 0;
  background: #fff;
}

@media (max-width: 768px) {
  .help-section {
    padding: clamp(2rem, 4vw, 3rem) 1rem 0;
  }
}

.help-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
}

.help-section__anchor {
  position: absolute;
  inset: 0 auto auto 0;
  width: 0;
  height: 0;
}

.help-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 2rem;
  padding: 2rem 2rem 1.7rem;
  background: #8e0ac6;
}

@media (max-width: 768px) {
  .help-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
}

.help-hero__content {
  padding: 0.25rem 0;
}

.help-hero__eyebrow {
  margin: 0 0 0.4rem;
  font-size: 0.8rem;
  font-weight: 800;
  color: #2a2f33;
  text-transform: uppercase;
}

.help-hero h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3.25rem);
  line-height: 1;
  color: #fafbfd;
  letter-spacing: 0;
}

.help-hero__text {
  max-width: 36ch;
  margin: 1rem 0 0;
  color: #f5f6f6;
  font-size: 0.95rem;
  line-height: 1.55;
}

.help-actions {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.4rem;
}

@media (max-width: 768px) {
  .help-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
  }
}

.help-action {
  min-height: 5rem;
  display: grid;
  place-items: center;
  gap: 0.4rem;
  background: rgba(209, 207, 207, 0.28);
  color: #f1f3f5;
  text-align: center;
}

.help-action span {
  font-size: 1.4rem;
}

.help-action strong {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.help-hero__media {
  position: relative;
  min-height: 18rem;
}

.help-hero__media img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 18rem;
  object-fit: cover;
  filter: grayscale(1);
}

.help-hero__play {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 4rem;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.66);
}

.help-hero__play::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 54%;
  transform: translate(-50%, -50%);
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.8rem solid #fff;
}

.recent-updates {
  padding: 2rem 0 1.8rem;
}

.recent-updates h3 {
  margin: 0 0 1.2rem;
  text-align: center;
  color: #1f2428;
  font-size: 1.5rem;
  letter-spacing: 0.02em;
}

.recent-updates__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1024px) {
  .recent-updates__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .recent-updates__grid {
    grid-template-columns: 1fr;
  }
}

.update-card {
  border: 1px solid #e8ebef;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(18, 29, 27, 0.04);
}

.update-card img {
  display: block;
  width: 100%;
  height: 9rem;
  object-fit: cover;
}

.update-card__body {
  padding: 0.85rem 0.8rem 0.95rem;
}

.update-card__body p {
  margin: 0 0 0.3rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #20262c;
}

.update-card__body span {
  color: #6a7680;
  font-size: 0.76rem;
}

.newsletter {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.2rem;
  background: #8e0ac6;
}

@media (max-width: 768px) {
  .newsletter {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 1.5rem;
  }
}

.newsletter__brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: #f6f7f8;
}

.newsletter__icon {
  display: grid;
  place-items: center;
  width: 2.7rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: #fff;
  font-size: 1.1rem;
}

.newsletter__brand p {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
}

.newsletter__brand span {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.78rem;
  color: #41464b;
}

.newsletter__fields {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .newsletter__fields {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
}

.newsletter__fields input {
  min-width: 0;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.95);
  padding: 0.8rem 0.9rem;
  font: inherit;
}

.newsletter__fields button {
  border: 2px solid transparent;
  padding: 0.8rem 1.8rem;
  background: #1d1f22;
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .newsletter__fields button {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
}

.newsletter__fields button:hover {
  background: #8e0ac6;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(125, 43, 224, 0.25);
}

.newsletter__fields button:active {
  transform: translateY(0);
}

.newsletter__fields button:focus-visible {
  outline: 2px solid #1d1f22;
  outline-offset: 2px;
}

@media (max-width: 1024px) {
  .help-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem;
  }

  .help-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .help-hero__media {
    min-height: 16rem;
  }

  .recent-updates__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .newsletter {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .newsletter__fields {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .help-section {
    padding: 2.5rem 1.25rem 0;
  }

  .help-hero {
    grid-template-columns: 1fr;
    gap: 1.35rem;
    padding: 1.5rem;
  }

  .help-hero h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  .help-hero__text {
    font-size: 0.93rem;
    max-width: 100%;
  }

  .help-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    margin-top: 1.2rem;
  }

  .help-action {
    min-height: 4.5rem;
    gap: 0.35rem;
  }

  .help-action span {
    font-size: 1.25rem;
  }

  .help-action strong {
    font-size: 0.68rem;
  }

  .help-hero__media {
    min-height: 15rem;
  }

  .recent-updates h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .recent-updates__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .update-card img {
    height: 8rem;
  }

  .update-card__body {
    padding: 0.8rem 0.75rem 0.9rem;
  }

  .update-card__body p {
    font-size: 0.78rem;
  }

  .update-card__body span {
    font-size: 0.72rem;
  }

  .newsletter {
    grid-template-columns: 1fr;
    gap: 1.1rem;
    padding: 1rem;
  }

  .newsletter__fields {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }

  .newsletter__fields input,
  .newsletter__fields button {
    font-size: 0.88rem;
    padding: 0.75rem 0.85rem;
  }

  .newsletter__fields button {
    padding: 0.75rem 1.6rem;
  }
}

@media (max-width: 640px) {
  .help-section {
    padding: 2rem 1rem 0;
  }

  .help-hero {
    padding: 1.3rem;
    gap: 1.15rem;
  }

  .help-hero h2 {
    font-size: 1.75rem;
    line-height: 1.1;
  }

  .help-hero__eyebrow {
    font-size: 0.78rem;
    margin-bottom: 0.35rem;
  }

  .help-hero__text {
    font-size: 0.9rem;
    max-width: 100%;
    margin-top: 0.85rem;
  }

  .help-actions {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    margin-top: 1.1rem;
  }

  .help-action {
    min-height: 4.2rem;
    gap: 0.3rem;
  }

  .help-action span {
    font-size: 1.1rem;
  }

  .help-action strong {
    font-size: 0.65rem;
  }

  .help-hero__media {
    min-height: 13rem;
  }

  .help-hero__play {
    width: 3.5rem;
  }

  .help-hero__play::before {
    border-top: 0.4rem solid transparent;
    border-bottom: 0.4rem solid transparent;
    border-left: 0.7rem solid #fff;
  }

  .recent-updates {
    padding: 1.75rem 0 1.5rem;
  }

  .recent-updates h3 {
    font-size: 1.2rem;
    margin-bottom: 0.9rem;
  }

  .recent-updates__grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }

  .update-card img {
    height: 7.5rem;
  }

  .update-card__body {
    padding: 0.75rem 0.7rem 0.85rem;
  }

  .update-card__body p {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .update-card__body span {
    font-size: 0.7rem;
  }

  .newsletter {
    padding: 0.95rem;
    gap: 1rem;
  }

  .newsletter__icon {
    width: 2.5rem;
    font-size: 1rem;
  }

  .newsletter__brand {
    gap: 0.75rem;
  }

  .newsletter__brand p {
    font-size: 0.75rem;
  }

  .newsletter__brand span {
    font-size: 0.72rem;
    margin-top: 0.1rem;
  }

  .newsletter__fields {
    gap: 0.6rem;
  }

  .newsletter__fields input,
  .newsletter__fields button {
    font-size: 0.85rem;
    padding: 0.7rem 0.8rem;
  }

  .newsletter__fields button {
    padding: 0.7rem 1.4rem;
  }
}

@media (max-width: 480px) {
  .help-section {
    padding: 1.75rem 0.9rem 0;
  }

  .help-hero {
    padding: 1.15rem;
    gap: 1rem;
  }

  .help-hero h2 {
    font-size: 1.6rem;
  }

  .help-hero__eyebrow {
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
  }

  .help-hero__text {
    font-size: 0.87rem;
    margin-top: 0.75rem;
  }

  .help-actions {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-top: 0.95rem;
  }

  .help-action {
    min-height: 3.9rem;
    gap: 0.25rem;
  }

  .help-action span {
    font-size: 1rem;
  }

  .help-action strong {
    font-size: 0.62rem;
  }

  .help-hero__media {
    min-height: 12rem;
  }

  .recent-updates {
    padding: 1.5rem 0 1.25rem;
  }

  .recent-updates h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .recent-updates__grid {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }

  .update-card img {
    height: 7rem;
  }

  .update-card__body {
    padding: 0.7rem 0.65rem 0.8rem;
  }

  .update-card__body p {
    font-size: 0.73rem;
  }

  .update-card__body span {
    font-size: 0.68rem;
  }

  .newsletter {
    flex-direction: column;
    padding: 0.9rem;
    gap: 0.9rem;
  }

  .newsletter__brand {
    flex-direction: column;
    text-align: center;
    gap: 0.65rem;
  }

  .newsletter__icon {
    width: 2.3rem;
    font-size: 0.95rem;
  }

  .newsletter__brand p {
    font-size: 0.73rem;
  }

  .newsletter__brand span {
    font-size: 0.68rem;
  }

  .newsletter__fields {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  .newsletter__fields input,
  .newsletter__fields button {
    font-size: 0.82rem;
    padding: 0.65rem 0.75rem;
  }
}
</style>
