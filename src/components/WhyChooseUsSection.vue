<template>
  <section id="why-us" class="bg-white py-10 md:py-16 lg:py-20 px-6 md:px-0" aria-labelledby="why-us-title">
    <div id="volunteer" aria-hidden="true"></div>

    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 lg:items-stretch rounded-lg md:rounded-2xl overflow-hidden bg-gradient-to-b from-white to-slate-50 shadow-lg">
      <!-- Content Section -->
      <div class="p-6 md:p-8 lg:p-10 flex flex-col justify-start" data-aos="fade-right" data-aos-delay="100">
        <p class="text-xs md:text-sm font-extrabold text-emerald-900 mb-2 md:mb-3 tracking-wide">Why Choose His Grace Foundation</p>
        <h2 id="why-us-title" class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6 md:mb-8 max-w-md">
          Making Real Impact Through Strategic Goals
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" aria-label="Foundation strategic goals">
          <!-- Educational Empowerment -->
          <article class="flex gap-3 md:gap-4 items-start" data-aos="fade-up" data-aos-delay="100">
            <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-lg md:text-xl" aria-hidden="true">
              📚
            </div>
            <div class="min-w-0">
              <h3 class="text-sm md:text-base font-bold text-slate-800 uppercase mb-1 md:mb-2">Educational Empowerment</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">We provide scholarships, grants, and skill-building workshops to increase access to quality education for underserved youth.</p>
            </div>
          </article>

          <!-- Health & Wellness -->
          <article class="flex gap-3 md:gap-4 items-start" data-aos="fade-up" data-aos-delay="200">
            <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-lg md:text-xl" aria-hidden="true">
              ❤️
            </div>
            <div class="min-w-0">
              <h3 class="text-sm md:text-base font-bold text-slate-800 uppercase mb-1 md:mb-2">Health &amp; Wellness</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Organize health fairs, mental health resources, and partner with healthcare providers for community well-being.</p>
            </div>
          </article>

          <!-- Economic Development -->
          <article class="flex gap-3 md:gap-4 items-start" data-aos="fade-up" data-aos-delay="300">
            <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-lg md:text-xl" aria-hidden="true">
              💼
            </div>
            <div class="min-w-0">
              <h3 class="text-sm md:text-base font-bold text-slate-800 uppercase mb-1 md:mb-2">Economic Development</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Job training programs and small business mentorship to foster stability and self-sufficiency.</p>
            </div>
          </article>

          <!-- Community Engagement -->
          <article class="flex gap-3 md:gap-4 items-start" data-aos="fade-up" data-aos-delay="400">
            <div class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-lg md:text-xl" aria-hidden="true">
              🤝
            </div>
            <div class="min-w-0">
              <h3 class="text-sm md:text-base font-bold text-slate-800 uppercase mb-1 md:mb-2">Community Engagement</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Service projects and volunteer programs that mobilize community members to create lasting change.</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Media Section -->
      <div class="relative min-h-64 md:min-h-80 lg:min-h-full overflow-hidden" data-aos="fade-left" data-aos-delay="200">
        <img
          src="../../public/images/real1.jpeg"
          alt="Child holding up colorful painted hands showing community engagement"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-x-0 bottom-0 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-200" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Minimal styles - all layout via Tailwind classes */
</style>
