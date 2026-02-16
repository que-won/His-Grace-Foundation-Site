<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <RouterLink to="/" class="logo">
        <img src="/images/logo.svg" alt="His Grace Foundation Logo" class="logo-img">
        <h3 style="margin: 0; color: var(--accent)">His Grace Foundation</h3>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
        <RouterLink to="/donations" class="nav-link">Donations</RouterLink>
        <RouterLink to="/help" class="nav-link">Help</RouterLink>
        <RouterLink to="/give-away" class="nav-link">Give Away</RouterLink>
        <RouterLink to="/volunteer" class="nav-link">Volunteer</RouterLink>
      </nav>

      <div class="header-actions">
        <a href="tel:+12673850667" class="donate-btn">
          📞 +1 (267) 385-0667
        </a>
      </div>

      <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-nav">
      <RouterLink to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Home</RouterLink>
      <RouterLink to="/projects" class="mobile-nav-link" @click="mobileMenuOpen = false">Projects</RouterLink>
      <RouterLink to="/donations" class="mobile-nav-link" @click="mobileMenuOpen = false">Donations</RouterLink>
      <RouterLink to="/help" class="mobile-nav-link" @click="mobileMenuOpen = false">Help</RouterLink>
      <RouterLink to="/give-away" class="mobile-nav-link" @click="mobileMenuOpen = false">Give Away</RouterLink>
      <RouterLink to="/volunteer" class="mobile-nav-link" @click="mobileMenuOpen = false">Volunteer</RouterLink>
      <a href="tel:+12673850667" class="mobile-nav-link donate">📞 Donate</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  height: 70px;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 50px;
  width: 50px;
  object-fit: contain;
}

.logo h3 {
  font-size: 1.5rem;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-dark);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--accent);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--accent);
}

.nav-link.router-link-active::after {
  width: 100%;
}

.donate-btn {
  background: var(--accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
  text-decoration: none;
}

.donate-btn:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 165, 0.3);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 5px;
  margin-right: 1rem;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid var(--border);
  background: var(--bg-light);
}

.mobile-nav-link {
  padding: 0.75rem 1.5rem;
  color: var(--text-dark);
  font-weight: 500;
  transition: background 0.3s ease;
  text-decoration: none;
  display: block;
}

.mobile-nav-link:hover {
  background: white;
}

.mobile-nav-link.router-link-active {
  background: rgba(14, 165, 165, 0.1);
  color: var(--accent);
}

.mobile-nav-link.donate {
  background: var(--accent);
  color: white;
  margin: 0.5rem;
  border-radius: 8px;
  text-align: center;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .donate-btn {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }

  .header-container {
    height: auto;
    padding: 1rem 0;
  }
}
</style>
