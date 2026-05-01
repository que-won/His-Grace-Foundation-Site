<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="His Grace Foundation home">
        <span class="site-header__logo" aria-hidden="true">H</span>
        <span class="site-header__name">His Grace Foundation</span>
      </RouterLink>

      <nav class="site-header__nav" :class="{ 'is-open': mobileMenuOpen }" aria-label="Primary navigation">
        <RouterLink to="/" @click="closeMobileMenu">Home</RouterLink>
        <RouterLink to="/about" @click="closeMobileMenu">About</RouterLink>
        <RouterLink to="/projects" @click="closeMobileMenu">Projects</RouterLink>
        <RouterLink to="/donations" @click="closeMobileMenu">Donations</RouterLink>
        <RouterLink to="/help" @click="closeMobileMenu">Help</RouterLink>
        <RouterLink to="/give-away" @click="closeMobileMenu">Give Away</RouterLink>
        <RouterLink to="/volunteer" @click="closeMobileMenu">Volunteer</RouterLink>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__phone" href="tel:+12673850667">+1 (267) 385-0667</a>
        <RouterLink class="site-header__cta" to="/contact">Contact</RouterLink>
      </div>

      <button 
        class="site-header__menu-toggle"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ececec;
}

.site-header__inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1.5rem;
  max-width: 1160px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  position: relative;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #1f2428;
  text-decoration: none;
  font-weight: 800;
}

.site-header__logo {
  display: grid;
  place-items: center;
  width: 2.6rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: #7d2be0;
  color: #fff;
  font-size: 1rem;
}

.site-header__name {
  font-size: 1rem;
  white-space: nowrap;
}

.site-header__nav {
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  flex-wrap: wrap;
}

.site-header__nav a {
  color: #27303a;
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-active,
.site-header__nav a.router-link-exact-active {
  color: #7d2be0;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-header__phone,
.site-header__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.site-header__phone {
  background: #7d2be0;
  color: #fff;
}

.site-header__phone:hover {
  background: #6a1fb8;
}

.site-header__cta {
  border: 1px solid #e4d5fb;
  color: #7d2be0;
}

.site-header__cta:hover {
  background: #f8f3ff;
}

.site-header__menu-toggle {
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: -0.5rem;
}

.site-header__menu-toggle span {
  width: 1.5rem;
  height: 0.2rem;
  background: #27303a;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.site-header__menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(0.5rem, 0.6rem);
}

.site-header__menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.site-header__menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(0.5rem, -0.6rem);
}

/* Tablet: 768px and below */
@media (max-width: 768px) {
  .site-header__inner {
    grid-template-columns: auto 1fr auto;
  }

  .site-header__phone {
    display: none;
  }

  .site-header__menu-toggle {
    display: flex;
  }
}

/* Mobile: 640px and below */
@media (max-width: 640px) {
  .site-header__inner {
    padding: 0.9rem 1rem;
    grid-template-columns: auto 1fr auto;
  }

  .site-header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #ececec;
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .site-header__nav.is-open {
    max-height: 500px;
  }

  .site-header__nav a {
    display: block;
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }

  .site-header__nav a:hover {
    background: #f8f3ff;
  }

  .site-header__actions {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .site-header__cta {
    padding: 0.7rem 0.9rem;
    font-size: 0.85rem;
  }
}

/* Small devices: 480px and below */
@media (max-width: 480px) {
  .site-header__inner {
    padding: 0.75rem 0.875rem;
  }

  .site-header__name {
    display: none;
  }

  .site-header__cta {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }

  .site-header__nav a {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
