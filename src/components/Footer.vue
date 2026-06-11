<template>
  <footer class="bg-dark-bg text-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-8 sm:py-6">
      <!-- Footer Top: Brand + Navigation -->
      <div class="grid grid-cols-1 md:grid-cols-[1.15fr_1.25fr] gap-10 md:gap-8 pb-8 md:pb-6 border-b border-white/10">
        <!-- Brand Section -->
        <section class="flex flex-col gap-4">
          <div class="w-10 h-10 rounded-full bg-gold-accent text-dark-bg flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img src="/images/logo-copy.png" alt="His Grace Foundation Logo" class="w-full h-full object-cover">
          </div>
          <div>
            <h2 class="text-xl md:text-lg font-bold text-white m-0">His Grace Foundation</h2>
            <p class="max-w-xs text-sm md:text-xs text-gray-400 m-0 leading-relaxed">
              Dedicated to uplifting underprivileged individuals and communities through education, health, economic development, and community engagement. We foster dignity, resilience, and hope.
            </p>
          </div>
        </section>

        <!-- Navigation Grid -->
        <nav class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-5" aria-label="Footer navigation">
          <!-- Explore Column -->
          <div class="pl-6 md:pl-4 border-l border-white/10">
            <h3 class="text-sm font-bold text-white mb-4 md:mb-3">Explore</h3>
            <div class="space-y-2">
              <RouterLink to="/" class="block text-sm text-gray-400 hover:text-gold-accent transition">Home</RouterLink>
              <RouterLink to="/about" class="block text-sm text-gray-400 hover:text-gold-accent transition">About Us</RouterLink>
              <RouterLink to="/projects" class="block text-sm text-gray-400 hover:text-gold-accent transition">Projects</RouterLink>
              <RouterLink to="/why-us" class="block text-sm text-gray-400 hover:text-gold-accent transition">Why Choose Us</RouterLink>
              <RouterLink to="/give-away" class="block text-sm text-gray-400 hover:text-gold-accent transition">Give Away</RouterLink>
            </div>
          </div>

          <!-- Support Column -->
          <div class="pl-6 md:pl-4 border-l border-white/10">
            <h3 class="text-sm font-bold text-white mb-4 md:mb-3">Support</h3>
            <div class="space-y-2">
              <RouterLink to="/help" class="block text-sm text-gray-400 hover:text-gold-accent transition">Help</RouterLink>
              <RouterLink to="/donations" class="block text-sm text-gray-400 hover:text-gold-accent transition">Donations</RouterLink>
              <RouterLink to="/volunteer" class="block text-sm text-gray-400 hover:text-gold-accent transition">Volunteer</RouterLink>
              <RouterLink to="/contact" class="block text-sm text-gray-400 hover:text-gold-accent transition">Contact</RouterLink>
            </div>
          </div>

          <!-- Contact Column -->
          <div class="col-span-3 md:col-span-2 sm:col-span-2 pl-6 md:pl-4 border-l border-white/10 md:border-t md:border-l-0 md:pt-4 md:pl-0">
            <h3 class="text-sm font-bold text-white mb-4 md:mb-3">Contact</h3>
            <div class="space-y-3">
              <a href="tel:+12673850667" class="block text-sm font-bold text-gold-accent hover:text-orange-cta transition">
                +1 (267) 385-0667
              </a>
              <a href="mailto:info@hisgracefoundation.org" class="block text-sm text-gray-400 hover:text-gold-accent transition">
                info@hisgracefoundation.org
              </a>
              <!-- Social Links -->
              <div class="flex gap-3 mt-4 pt-2">
                <a 
                  href="https://www.facebook.com/hisgracefoundation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Facebook page"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-accent/15 text-gold-accent hover:bg-gold-accent hover:text-dark-bg transition transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-gold-accent focus-visible:outline-offset-2 min-h-11 min-w-11"
                >
                  <Facebook :size="18" />
                </a>
                <a 
                  href="https://www.twitter.com/hisgracefound" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Twitter page"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-accent/15 text-gold-accent hover:bg-gold-accent hover:text-dark-bg transition transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-gold-accent focus-visible:outline-offset-2 min-h-11 min-w-11"
                >
                  <Twitter :size="18" />
                </a>
                <a 
                  href="https://www.instagram.com/hisgracefoundation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Instagram profile"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-accent/15 text-gold-accent hover:bg-gold-accent hover:text-dark-bg transition transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-gold-accent focus-visible:outline-offset-2 min-h-11 min-w-11"
                >
                  <Instagram :size="18" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/hisgracefoundation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our LinkedIn profile"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-accent/15 text-gold-accent hover:bg-gold-accent hover:text-dark-bg transition transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-gold-accent focus-visible:outline-offset-2 min-h-11 min-w-11"
                >
                  <Linkedin :size="18" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Footer Bottom -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 md:gap-3 pt-4 md:pt-3 text-xs md:text-xs text-gray-500">
        <p class="m-0">Copyright &copy; 2026 His Grace Foundation. All rights reserved.</p>
        <div class="flex flex-wrap gap-3 md:gap-2">
          <RouterLink to="/" class="text-gray-500 hover:text-gold-accent transition">Home</RouterLink>
          <RouterLink to="/about" class="text-gray-500 hover:text-gold-accent transition">About</RouterLink>
          <RouterLink to="/projects" class="text-gray-500 hover:text-gold-accent transition">Projects</RouterLink>
          <RouterLink to="/help" class="text-gray-500 hover:text-gold-accent transition">Support</RouterLink>
          <RouterLink to="/contact" class="text-gray-500 hover:text-gold-accent transition">Contact</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'
</script>
