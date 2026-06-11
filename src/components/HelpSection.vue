<template>
  <section id="help" class="py-12 md:py-16 lg:py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto relative">
      <div id="donations" aria-hidden="true"></div>
      
      <!-- Hero Section -->
      <div data-aos="fade-up" data-aos-delay="100" class="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 bg-gradient-to-br from-primary-dark to-primary-purple rounded-2xl mb-12 md:mb-16">
        <div class="md:py-4">
          <p class="text-xs md:text-sm font-black text-gray-300 uppercase tracking-wider mb-3">Join Our Mission</p>
          <h2 data-aos="fade-left" data-aos-delay="200" class="text-3xl md:text-5xl font-black text-white mb-4">How Can You Support Our Goals?</h2>
          <p data-aos="fade-left" data-aos-delay="300" class="text-sm md:text-base text-gray-100 leading-relaxed mb-6 max-w-prose">
            Your contributions help us empower underprivileged communities through education, health support, economic development, and community engagement.
          </p>

          <!-- Action Cards Grid -->
          <div data-aos="fade-left" data-aos-delay="400" class="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
            <div class="min-h-24 md:min-h-28 grid place-items-center gap-1 bg-white/15 backdrop-blur-sm rounded-lg text-center px-3 py-4">
              <span class="text-3xl md:text-4xl">🎓</span>
              <strong class="text-xs text-white font-black uppercase">Education</strong>
            </div>
            <div class="min-h-24 md:min-h-28 grid place-items-center gap-1 bg-white/15 backdrop-blur-sm rounded-lg text-center px-3 py-4">
              <span class="text-3xl md:text-4xl">❤️</span>
              <strong class="text-xs text-white font-black uppercase">Health</strong>
            </div>
            <div class="min-h-24 md:min-h-28 grid place-items-center gap-1 bg-white/15 backdrop-blur-sm rounded-lg text-center px-3 py-4">
              <span class="text-3xl md:text-4xl">💼</span>
              <strong class="text-xs text-white font-black uppercase">Economic</strong>
            </div>
            <div class="min-h-24 md:min-h-28 grid place-items-center gap-1 bg-white/15 backdrop-blur-sm rounded-lg text-center px-3 py-4">
              <span class="text-3xl md:text-4xl">🤝</span>
              <strong class="text-xs text-white font-black uppercase">Community</strong>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div data-aos="fade-right" data-aos-delay="200" class="relative min-h-64 md:min-h-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/8613144/pexels-photo-8613144.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Children playing on a field"
            class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div class="absolute inset-0 bg-black/40 grid place-items-center">
            <button type="button" class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/50 hover:bg-black/70 grid place-items-center transition-all min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Play video">
              <span class="text-white text-3xl ml-1">▶</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Impact Stories Section -->
      <div data-aos="fade-up" data-aos-delay="500" class="mb-12 md:mb-16">
        <h3 data-aos="fade-up" data-aos-delay="600" class="text-2xl md:text-3xl font-black text-neutral-900 text-center mb-8 md:mb-10">Our Impact Stories</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <article data-aos="fade-up" data-aos-delay="700" class="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <img src="/images/real1.jpeg" alt="Educational Empowerment Program" class="w-full h-40 object-cover" />
            <div class="p-5 md:p-6">
              <p class="text-sm md:text-base font-black text-neutral-900 mb-2">Educational Empowerment</p>
              <span class="text-xs md:text-sm text-gray-600 leading-relaxed">Scholarships &amp; Training Programs</span>
            </div>
          </article>

          <article data-aos="fade-up" data-aos-delay="800" class="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <img src="/images/real1.jpeg" alt="Community Health Initiative" class="w-full h-40 object-cover" />
            <div class="p-5 md:p-6">
              <p class="text-sm md:text-base font-black text-neutral-900 mb-2">Community Health Fairs</p>
              <span class="text-xs md:text-sm text-gray-600 leading-relaxed">Wellness &amp; Support Services</span>
            </div>
          </article>

          <article data-aos="fade-up" data-aos-delay="900" class="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <img src="/images/real1.jpeg" alt="Economic Development Program" class="w-full h-40 object-cover" />
            <div class="p-5 md:p-6">
              <p class="text-sm md:text-base font-black text-neutral-900 mb-2">Economic Development</p>
              <span class="text-xs md:text-sm text-gray-600 leading-relaxed">Job Training &amp; Mentorship</span>
            </div>
          </article>

          <article data-aos="fade-up" data-aos-delay="1000" class="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <img src="/images/real1.jpeg" alt="Community Engagement Projects" class="w-full h-40 object-cover" />
            <div class="p-5 md:p-6">
              <p class="text-sm md:text-base font-black text-neutral-900 mb-2">Community Engagement</p>
              <span class="text-xs md:text-sm text-gray-600 leading-relaxed">Volunteer &amp; Service Projects</span>
            </div>
          </article>
        </div>
      </div>

      <!-- Newsletter Form -->
      <form data-aos="fade-up" data-aos-delay="1100" @submit.prevent class="grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center p-6 md:p-8 bg-gradient-to-br from-primary-dark to-primary-purple rounded-2xl">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white grid place-items-center flex-shrink-0 text-2xl">✉</div>
          <div>
            <p class="text-xs md:text-sm font-black text-white uppercase tracking-wider">Stay Connected</p>
            <span class="text-xs md:text-sm text-gray-200 block mt-1">Receive updates on our mission and impact stories.</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3 lg:flex lg:gap-2">
          <div class="flex flex-col gap-2">
            <label for="newsletter-email" class="text-xs font-black text-white uppercase">Email</label>
            <input type="email" id="newsletter-email" placeholder="Enter your email" required aria-required="true" class="px-4 py-3 rounded-lg border border-white/30 bg-white/95 text-neutral-900 placeholder-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-11" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="newsletter-name" class="text-xs font-black text-white uppercase">Name</label>
            <input type="text" id="newsletter-name" placeholder="Enter your name" required aria-required="true" class="px-4 py-3 rounded-lg border border-white/30 bg-white/95 text-neutral-900 placeholder-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-11" />
          </div>
          <div class="flex flex-col gap-2 justify-end">
            <button type="submit" class="px-6 py-3 bg-white text-primary-dark font-black rounded-lg hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-11 whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled by Tailwind CSS utilities */
</style>