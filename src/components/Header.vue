<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="His Grace Foundation home">
        <span class="site-header__logo" aria-hidden="true"><img src="/images/logo.jpeg" alt="His Grace Foundation Logo"></span>
        <span class="site-header__name">GRACE</span>
      </RouterLink>

      <nav class="site-header__nav" :class="{ 'is-open': mobileMenuOpen }" aria-label="Primary navigation">
        <div class="site-header__nav-item">
          <RouterLink to="/" @click="closeMobileMenu" class="site-header__nav-link">Home</RouterLink>
        </div>

        <!-- About Us Dropdown -->
        <div 
          class="site-header__nav-item site-header__nav-dropdown"
          @mouseenter="openDropdown = 'about'"
          @mouseleave="openDropdown = null"
        >
          <button 
            class="site-header__nav-link site-header__nav-link--dropdown"
            @click="toggleDropdown('about')"
            :class="{ 'is-active': openDropdown === 'about' }"
            aria-haspopup="true"
            :aria-expanded="openDropdown === 'about'"
          >
            About Us
            <span class="site-header__dropdown-arrow">▼</span>
          </button>
          <div class="site-header__dropdown-menu" v-if="openDropdown === 'about'">
            <RouterLink to="/about" @click="closeMobileMenu" class="site-header__dropdown-link">About Us</RouterLink>
            <RouterLink to="/why-choose" @click="closeMobileMenu" class="site-header__dropdown-link">Why Choose Us</RouterLink>
            <RouterLink to="/values" @click="closeMobileMenu" class="site-header__dropdown-link">Our Values</RouterLink>
          </div>
        </div>

        <!-- What We Do Dropdown -->
        <div 
          class="site-header__nav-item site-header__nav-dropdown"
          @mouseenter="openDropdown = 'services'"
          @mouseleave="openDropdown = null"
        >
          <button 
            class="site-header__nav-link site-header__nav-link--dropdown"
            @click="toggleDropdown('services')"
            :class="{ 'is-active': openDropdown === 'services' }"
            aria-haspopup="true"
            :aria-expanded="openDropdown === 'services'"
          >
            What We Do
            <span class="site-header__dropdown-arrow">▼</span>
          </button>
          <div class="site-header__dropdown-menu" v-if="openDropdown === 'services'">
            <RouterLink to="/projects" @click="closeMobileMenu" class="site-header__dropdown-link">Projects</RouterLink>
            <RouterLink to="/donations" @click="closeMobileMenu" class="site-header__dropdown-link">Donations</RouterLink>
            <RouterLink to="/help" @click="closeMobileMenu" class="site-header__dropdown-link">Help Others</RouterLink>
            <RouterLink to="/volunteer" @click="closeMobileMenu" class="site-header__dropdown-link">Volunteer</RouterLink>
            <RouterLink to="/give-away" @click="closeMobileMenu" class="site-header__dropdown-link">Give Away</RouterLink>
          </div>
        </div>

        <!-- Activities -->
        <div class="site-header__nav-item">
          <RouterLink to="/activities" @click="closeMobileMenu" class="site-header__nav-link">Activities</RouterLink>
        </div>

        <!-- Get Involved Dropdown -->
        <div 
          class="site-header__nav-item site-header__nav-dropdown"
          @mouseenter="openDropdown = 'involved'"
          @mouseleave="openDropdown = null"
        >
          <button 
            class="site-header__nav-link site-header__nav-link--dropdown"
            @click="toggleDropdown('involved')"
            :class="{ 'is-active': openDropdown === 'involved' }"
            aria-haspopup="true"
            :aria-expanded="openDropdown === 'involved'"
          >
            Get Involved
            <span class="site-header__dropdown-arrow">▼</span>
          </button>
          <div class="site-header__dropdown-menu" v-if="openDropdown === 'involved'">
            <RouterLink to="/contact" @click="closeMobileMenu" class="site-header__dropdown-link">Contact Us</RouterLink>
            <RouterLink to="/volunteer" @click="closeMobileMenu" class="site-header__dropdown-link">Become a Volunteer</RouterLink>
            <RouterLink to="/partnerships" @click="closeMobileMenu" class="site-header__dropdown-link">Partnerships</RouterLink>
          </div>
        </div>
      </nav>

      <div class="site-header__actions">
        <select class="site-header__language-selector" aria-label="Language">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
        <RouterLink class="site-header__donate-btn" to="/donations">DONATE NOW</RouterLink>
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
const openDropdown = ref<string | null>(null);

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  openDropdown.value = null;
};

const toggleDropdown = (dropdown: string) => {
  openDropdown.value = openDropdown.value === dropdown ? null : dropdown;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  position: relative;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: #1f2428;
  text-decoration: none;
  font-weight: 800;
  flex-shrink: 0;
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
  overflow: hidden;
}

.site-header__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.site-header__name {
  font-size: 1.1rem;
  white-space: nowrap;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.site-header__nav-item {
  position: relative;
}

.site-header__nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  color: #27303a;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.site-header__nav-link:hover,
.site-header__nav-link.router-link-active,
.site-header__nav-link.router-link-exact-active {
  color: #7d2be0;
}

.site-header__nav-link--dropdown.is-active {
  color: #7d2be0;
  background: rgba(125, 43, 224, 0.06);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.site-header__nav-item:hover .site-header__nav-link--dropdown {
  background: rgba(125, 43, 224, 0.06);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.site-header__dropdown-arrow {
  font-size: 0.6rem;
  transition: transform 0.2s ease;
}

.site-header__nav-link--dropdown.is-active .site-header__dropdown-arrow {
  transform: rotate(180deg);
}

.site-header__dropdown-menu {
  position: absolute;
  top: 100%;
  left: -40px;
  right: -40px;
  transform: scaleY(0);
  transform-origin: top;
  background: rgba(255, 255, 255, 0.99);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(125, 43, 224, 0.15);
  border-top: 2px solid #7d2be0;
  border-radius: 12px;
  padding: 1rem 0;
  margin-top: 0.5rem;
  box-shadow: 0 12px 48px rgba(125, 43, 224, 0.15), 0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  visibility: hidden;
}

.site-header__nav-item:hover .site-header__dropdown-menu {
  transform: scaleY(1);
  opacity: 1;
  visibility: visible;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) scaleY(0);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scaleY(1);
  }
}

.site-header__dropdown-link {
  display: flex;
  align-items: center;
  padding: 0.85rem 2rem;
  color: #27303a;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.25s ease;
  position: relative;
}

.site-header__dropdown-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #7d2be0, #b565ff);
  transform: scaleY(0);
  transition: transform 0.25s ease;
}

.site-header__dropdown-link:hover,
.site-header__dropdown-link.router-link-active,
.site-header__dropdown-link.router-link-exact-active {
  background: linear-gradient(90deg, rgba(125, 43, 224, 0.1), rgba(125, 43, 224, 0.05));
  color: #7d2be0;
  padding-left: 2.3rem;
}

.site-header__dropdown-link:hover::before,
.site-header__dropdown-link.router-link-active::before,
.site-header__dropdown-link.router-link-exact-active::before {
  transform: scaleY(1);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.site-header__language-selector {
  padding: 0.6rem 0.8rem;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  background: #fff;
  color: #27303a;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.site-header__language-selector:hover {
  border-color: #7d2be0;
  color: #7d2be0;
}

.site-header__donate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #8e0ac7 0%, #7d2be0 100%);
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 10px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(125, 43, 224, 0.3);
}

.site-header__donate-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.site-header__donate-btn:hover {
  background: linear-gradient(135deg, #7d2be0 0%, #6a1fb8 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(125, 43, 224, 0.4);
}

.site-header__donate-btn:hover::before {
  transform: scaleX(1);
}

.site-header__donate-btn:active {
  transform: translateY(-1px);
}

.site-header__donate-btn:focus-visible {
  outline: 2px solid #7d2be0;
  outline-offset: 2px;
}

.site-header__menu-toggle {
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
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
    padding: 0.8rem 1rem;
  }

  .site-header__nav {
    display: none;
    position: fixed;
    top: var(--header-height, 60px);
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
    z-index: 19;
    justify-content: flex-start;
  }

  .site-header__nav.is-open {
    display: flex;
    max-height: 100vh;
  }

  .site-header__nav-item {
    width: 100%;
  }

  .site-header__nav-link {
    display: block;
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    text-align: left;
  }

  .site-header__dropdown-menu {
    position: static;
    transform: scaleY(1);
    opacity: 1;
    visibility: visible;
    background: #f8f3ff;
    border: none;
    border-radius: 0;
    box-shadow: none;
    border-top: none;
    padding: 0;
    margin: 0;
    min-width: auto;
    transition: none;
  }

  .site-header__dropdown-link {
    padding-left: 3rem;
    font-size: 0.9rem;
  }

  .site-header__language-selector {
    display: none;
  }

  .site-header__menu-toggle {
    display: flex;
  }
}
</style>
