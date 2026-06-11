<template>
  <header class="sticky top-0 z-20 bg-white/96 backdrop-blur-md border-b border-gray-100">
    <div class="flex items-center justify-between gap-6 max-w-7xl mx-auto px-4 md:px-6 py-3">
      <!-- Logo & Brand -->
      <RouterLink 
        to="/" 
        aria-label="His Grace Foundation home"
        class="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition"
      >
        <div class="grid place-items-center w-10 aspect-square rounded-full bg-primary-dark text-white overflow-hidden">
          <img src="/images/logo.jpeg" alt="His Grace Foundation Logo" class="w-full h-full object-cover">
        </div>
        <span class="hidden sm:inline font-bold text-sm text-dark-bg">His Grace Foundation</span>
      </RouterLink>

      <!-- Navigation - Desktop -->
      <nav class="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Primary navigation">
        <!-- Home -->
        <RouterLink 
          to="/" 
          class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-dark hover:bg-primary-dark/5 rounded-md transition"
        >
          Home
        </RouterLink>

        <!-- About Us Dropdown -->
        <div class="relative group">
          <button 
            class="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-dark transition"
            aria-haspopup="true"
          >
            About Uss
            <ChevronDown :size="16" class="group-hover:rotate-180 transition-transform" />
          </button>
          <div class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pt-2 pb-2">
            <RouterLink to="/about" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-dark">About Us</RouterLink>
            <RouterLink to="/why-choose" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-dark">Why Choose Us</RouterLink>
            <RouterLink to="/values" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-dark">Our Values</RouterLink>
          </div>
        </div>

        <!-- What We Do Dropdown -->
        <div class="relative group">
          <button 
            class="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-dark hover:bg-primary-dark/5 rounded-md transition"
            aria-haspopup="true"
          >
            What We Do
            <ChevronDown :size="16" class="group-hover:rotate-180 transition-transform" />
          </button>
          <div class="absolute left-0 mt-0 w-48 bg-white border border-primary-dark/15 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pt-2 pb-2">
            <RouterLink to="/programs" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Programs & Impact</RouterLink>
            <RouterLink to="/projects" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Projects</RouterLink>
            <RouterLink to="/activities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Activities</RouterLink>
            <div class="border-t border-gray-200 my-1"></div>
            <RouterLink to="/donations" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Donate</RouterLink>
            <RouterLink to="/help" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">How to Help</RouterLink>
          </div>
        </div>

        <!-- Activities -->
        <RouterLink 
          to="/blog" 
          class="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-dark hover:bg-primary-dark/5 rounded-md transition"
        >
          Blog & News
        </RouterLink>

        <!-- Get Involved Dropdown -->
        <div class="relative group">
          <button 
            class="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-dark hover:bg-primary-dark/5 rounded-md transition"
            aria-haspopup="true"
          >
            Get Involved
            <ChevronDown :size="16" class="group-hover:rotate-180 transition-transform" />
          </button>
          <div class="absolute left-0 mt-0 w-48 bg-white border border-primary-dark/15 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pt-2 pb-2">
            <RouterLink to="/contact-us" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Contact Us</RouterLink>
            <RouterLink to="/volunteer-signup" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Become a Volunteer</RouterLink>
            <RouterLink to="/partnerships" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark">Partnerships</RouterLink>
          </div>
        </div>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-3 flex-shrink-0">
        <!-- Language Selector -->
        <select 
          class="hidden md:block px-2 py-1.5 text-xs font-semibold border border-gray-300 rounded-md bg-white text-gray-700 hover:border-primary-dark hover:text-primary-dark cursor-pointer transition"
          aria-label="Language"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>

        <!-- Donate Button -->
        <RouterLink 
          to="/donations" 
          class="hidden sm:flex items-center justify-center min-h-11 px-6 py-2 bg-orange-cta text-white font-bold text-sm rounded-md hover:bg-orange-600 transition-all hover:shadow-lg"
        >
          DONATE NOW
        </RouterLink>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="appStore.toggleMobileMenu()"
          :aria-expanded="appStore.mobileMenuOpen"
          aria-label="Toggle navigation menu"
          class="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
        >
          <Menu v-if="!appStore.mobileMenuOpen" :size="24" class="text-gray-700" />
          <X v-else :size="24" class="text-gray-700" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <nav 
      v-if="appStore.mobileMenuOpen"
      class="lg:hidden border-t border-gray-100 bg-white"
      aria-label="Mobile navigation"
    >
      <div class="px-4 py-3 space-y-1 max-w-7xl mx-auto">
        <RouterLink 
          to="/" 
          @click="appStore.closeMobileMenu()"
          class="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark rounded-md transition"
        >
          Home
        </RouterLink>

        <div class="py-1">
          <button 
            @click="mobileDropdown = mobileDropdown === 'about' ? null : 'about'"
            class="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark rounded-md transition"
          >
            About Us
            <ChevronDown :size="16" :class="mobileDropdown === 'about' ? 'rotate-180' : ''" class="transition-transform" />
          </button>
          <div v-if="mobileDropdown === 'about'" class="pl-4 space-y-1 mt-1">
            <RouterLink to="/about" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">About Us</RouterLink>
            <RouterLink to="/why-choose" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Why Choose Us</RouterLink>
            <RouterLink to="/values" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Our Values</RouterLink>
          </div>
        </div>

        <div class="py-1">
          <button 
            @click="mobileDropdown = mobileDropdown === 'services' ? null : 'services'"
            class="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark rounded-md transition"
          >
            What We Do
            <ChevronDown :size="16" :class="mobileDropdown === 'services' ? 'rotate-180' : ''" class="transition-transform" />
          </button>
          <div v-if="mobileDropdown === 'services'" class="pl-4 space-y-1 mt-1">
            <RouterLink to="/programs" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Programs & Impact</RouterLink>
            <RouterLink to="/projects" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Projects</RouterLink>
            <RouterLink to="/activities" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Activities</RouterLink>
            <div class="border-t border-gray-200 my-1"></div>
            <RouterLink to="/donations" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Donate</RouterLink>
            <RouterLink to="/help" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">How to Help</RouterLink>
          </div>
        </div>

        <RouterLink 
          to="/blog" 
          @click="appStore.closeMobileMenu()"
          class="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark rounded-md transition"
        >
          Blog & News
        </RouterLink>

        <div class="py-1">
          <button 
            @click="mobileDropdown = mobileDropdown === 'involved' ? null : 'involved'"
            class="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-dark/5 hover:text-primary-dark rounded-md transition"
          >
            Get Involved
            <ChevronDown :size="16" :class="mobileDropdown === 'involved' ? 'rotate-180' : ''" class="transition-transform" />
          </button>
          <div v-if="mobileDropdown === 'involved'" class="pl-4 space-y-1 mt-1">
            <RouterLink to="/contact-us" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Contact Us</RouterLink>
            <RouterLink to="/volunteer-signup" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Become a Volunteer</RouterLink>
            <RouterLink to="/partnerships" @click="appStore.closeMobileMenu()" class="block px-3 py-2 text-xs text-gray-600 hover:text-primary-dark">Partnerships</RouterLink>
          </div>
        </div>

        <RouterLink 
          to="/donations" 
          @click="appStore.closeMobileMenu()"
          class="block w-full mt-3 px-4 py-2 bg-orange-cta text-white font-bold text-sm rounded-md text-center hover:bg-orange-600 transition"
        >
          DONATE NOW
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const appStore = useAppStore()
const mobileDropdown = ref<string | null>(null)
</script>
