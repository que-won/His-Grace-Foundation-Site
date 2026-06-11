<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { ArrowRight, ArrowLeft } from "lucide-vue-next";

const flippedCards = ref({
  vision: false,
  mission: false
});

const projects = [
  {
    slug: "clean-water",
    category: "Clean water",
    title: "Clean Water for Rural Families",
    description:
      "Installing safe water points and hygiene education so children and caregivers spend less time walking for water and more time learning, working, and staying healthy.",
    image: "/images/real1.jpeg",
    alt: "Children collecting clean water",
    location: "Community outreach",
    progress: 72,
    goal: "$8,500",
  },
  {
    slug: "education-support",
    category: "Education",
    title: "School Support for Vulnerable Children",
    description:
      "Providing school materials, tuition support, uniforms, and mentoring for children who need a steady path back into the classroom.",
    image: "/images/real1.jpeg",
    alt: "Child smiling in a classroom",
    location: "Student sponsorship",
    progress: 58,
    goal: "$6,200",
  },
  {
    slug: "healthy-food",
    category: "Healthy food",
    title: "Nutritious Meals for Growing Children",
    description:
      "Helping families access balanced food packages while connecting them with health checks, care follow-ups, and community support.",
    image: "/images/real1.jpeg",
    alt: "Child holding food in a community setting",
    location: "Family care",
    progress: 81,
    goal: "$4,900",
  },
  {
    slug: "healthcare-outreach",
    category: "Healthcare",
    title: "Basic Medical Care and Wellness Visits",
    description:
      "Supporting outreach days where families receive wellness checks, health guidance, and referrals before small conditions become serious problems.",
    image: "/images/real1.jpeg",
    alt: "Community health outreach with children and caregivers",
    location: "Mobile clinic",
    progress: 44,
    goal: "$7,400",
  },
  {
    slug: "emergency-relief",
    category: "Shelter",
    title: "Emergency Relief for Families in Crisis",
    description:
      "Delivering urgent care packages, clothing, temporary shelter support, and practical help for households facing difficult seasons.",
    image: "/images/real1.jpeg",
    alt: "Volunteers supporting families with relief items",
    location: "Relief response",
    progress: 66,
    goal: "$5,800",
  },
  {
    slug: "youth-mentorship",
    category: "Youth growth",
    title: "Mentorship and Skills for Young People",
    description:
      "Creating safe spaces where young people receive guidance, life skills, leadership training, and encouragement from trusted mentors.",
    image: "/images/real1.jpeg",
    alt: "Young people participating in a mentorship activity",
    location: "Youth program",
    progress: 39,
    goal: "$3,900",
  },
];

const impactStats = [
  {
    value: "90+",
    label: "Children and families reached through direct support and community programs",
    image: "/images/real1.jpeg",
    bgColor: "bg-neutral-800",
    overlayColor: "from-neutral-900/90 to-neutral-800/80"
  },
  {
    value: "18",
    label: "Community outreach activities organized alongside volunteers and local partners",
    image: "/images/real1.jpeg",
    bgColor: "bg-orange-600",
    overlayColor: "from-orange-700/90 to-orange-600/80"
  },
  {
    value: "6",
    label: "Active program areas focused on education, empowerment, health, and humanitarian support",
    image: "/images/real1.jpeg",
    bgColor: "bg-yellow-500",
    overlayColor: "from-yellow-700/90 to-yellow-600/80"
  },
];

const foundationGoals = [
  {
    number: "01",
    title: "Empower Through Education",
    goal: "Increase access to educational resources and opportunities for underserved youth.",
    objectives: [
      "Provide scholarships and grants to students from low-income families.",
      "Develop and implement skill-building workshops and training programs.",
    ],
  },
  {
    number: "02",
    title: "Enhance Community Health and Well-being",
    goal: "Improve the overall health and wellness of the communities served.",
    objectives: [
      "Organize regular health fairs that provide free screenings and health education.",
      "Partner with healthcare providers to offer mental health resources and support.",
    ],
  },
  {
    number: "03",
    title: "Promote Economic Development",
    goal: "Foster economic stability and self-sufficiency among individuals and families.",
    objectives: [
      "Create job training and placement programs that connect participants with local employers.",
      "Support small business development through mentorship and micro-financing initiatives.",
    ],
  },
  {
    number: "04",
    title: "Encourage Community Engagement",
    goal: "Strengthen community bonds and encourage volunteerism.",
    objectives: [
      "Organize community service projects that address local needs and challenges.",
      "Develop a volunteer program that mobilizes community members to contribute their skills and time.",
    ],
  },
];

const projectPrinciples = [
  {
    number: "01",
    title: "Listen first",
    text: "We identify needs through conversations with families, schools, faith leaders, and community volunteers.",
  },
  {
    number: "02",
    title: "Respond with practical help",
    text: "Each project is shaped around immediate support people can feel: food, water, education, health, shelter, and guidance.",
  },
  {
    number: "03",
    title: "Follow up with care",
    text: "We keep relationships active so support does not end at delivery day and families know where to turn next.",
  },
];

const galleryImages = [
  {
    title: "Community outreach",
    text: "Volunteers meeting families and identifying practical needs.",
    image: "/images/real1.jpeg",
    alt: "Volunteers supporting a community outreach activity",
  },
  {
    title: "Children support",
    text: "Care focused on education, nutrition, and daily wellbeing.",
    image: "/images/real1.jpeg",
    alt: "Children receiving support from the foundation",
  },
  {
    title: "Family relief",
    text: "Relief items and follow-up care for families in difficult seasons.",
    image: "/images/real1.jpeg",
    alt: "Family relief support in the community",
  },
  {
    title: "Local partnership",
    text: "Working with trusted community voices for better long-term care.",
    image: "/images/real1.jpeg",
    alt: "Community partners working together",
  },
];

const projectsPerPage = 3;
const currentPage = ref(0);
const selectedCategory = ref("All");
const filters = computed(() => [
  "All",
  ...new Set(projects.map((project) => project.category)),
]);
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects;
  }

  return projects.filter((project) => project.category === selectedCategory.value);
});
const pageCount = computed(() =>
  Math.max(1, Math.ceil(filteredProjects.value.length / projectsPerPage)),
);
const visibleProjects = computed(() => {
  const start = currentPage.value * projectsPerPage;
  return filteredProjects.value.slice(start, start + projectsPerPage);
});

const chooseFilter = (filter) => {
  selectedCategory.value = filter;
  currentPage.value = 0;
};

const goToPage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  currentPage.value =
    currentPage.value === 0 ? pageCount.value - 1 : currentPage.value - 1;
};

const nextPage = () => {
  currentPage.value =
    currentPage.value === pageCount.value - 1 ? 0 : currentPage.value + 1;
};
</script>

<template>
  <section id="projects" class="px-6 md:px-12 py-20 md:py-28 bg-gradient-to-b from-white to-orange-50" aria-labelledby="projects-title">
    <div class="max-w-6xl mx-auto">
      <!-- Banner with Stats Badge -->
      <div
        data-aos="fade-up"
        class="relative w-full h-72 md:h-96 rounded-b-lg overflow-hidden bg-neutral-800 shadow-lg mb-12 md:mb-16"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-neutral-800/30 via-transparent to-transparent z-10"></div>
        <img
          src="/images/real1.jpeg"
          alt="Children and families supported by His Grace Foundation"
          class="w-full h-full object-cover animate-banner-float"
        />
        <div class="absolute right-4 md:right-5 bottom-4 md:bottom-5 z-20 bg-white p-4 md:p-5 rounded-sm border-l-4 border-yellow-500 shadow-lg">
          <div class="text-2xl md:text-3xl font-black text-neutral-900">6</div>
          <div class="text-xs md:text-sm font-black text-neutral-500 uppercase leading-tight">Active care projects</div>
        </div>
      </div>

      <!-- Header with Mission/Vision -->
      <div data-aos="fade-up" data-aos-delay="100" class="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
        <div class="md:col-span-2">
          <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-2">Our Mission & Vision</p>
          <h2 id="projects-title" class="text-3xl md:text-5xl font-black text-neutral-900 mb-4">
            Empowering Communities Through Compassion and Education
          </h2>
          <router-link
            to="/donations"
            class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-600 text-white font-black rounded-lg hover:bg-orange-700 hover:-translate-y-1 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            aria-label="Support His Grace Foundation projects"
          >
            <span>Support a project</span>
            <ArrowRight :size="18" :stroke-width="2.5" />
          </router-link>
        </div>

        <div class="grid grid-cols-2 gap-3 md:gap-4">
          <!-- Vision Card -->
          <div 
            class="perspective h-48 cursor-pointer"
            @click="flippedCards.vision = !flippedCards.vision"
          >
            <div 
              class="relative w-full h-full transition-transform duration-500 transform-gpu"
              :style="{ 
                transformStyle: 'preserve-3d',
                transform: flippedCards.vision ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }"
            >
              <!-- Front -->
              <div 
                class="absolute w-full h-full bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm flex flex-col items-center justify-center text-center"
                :style="{ backfaceVisibility: 'hidden' }"
              >
                <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-2">Vision</p>
                <p class="text-xs md:text-sm text-neutral-900 leading-relaxed">
                  <em>"To empower underprivileged children and communities through compassion, education and support."</em>
                </p>
              </div>
              
              <!-- Back -->
              <div 
                class="absolute w-full h-full bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center"
                :style="{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }"
              >
                <p class="text-white font-black text-sm mb-3">Learn More</p>
                <router-link
                  to="/projects"
                  class="inline-flex items-center gap-1 px-3 py-2 bg-white text-orange-600 font-bold text-xs rounded transition-all hover:shadow-lg"
                >
                  Read More
                  <ArrowRight :size="14" :stroke-width="2.5" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Mission Card -->
          <div 
            class="perspective h-48 cursor-pointer"
            @click="flippedCards.mission = !flippedCards.mission"
          >
            <div 
              class="relative w-full h-full transition-transform duration-500 transform-gpu"
              :style="{ 
                transformStyle: 'preserve-3d',
                transform: flippedCards.mission ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }"
            >
              <!-- Front -->
              <div 
                class="absolute w-full h-full bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm flex flex-col items-center justify-center text-center"
                :style="{ backfaceVisibility: 'hidden' }"
              >
                <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-2">Mission</p>
                <p class="text-xs md:text-sm text-neutral-900 leading-relaxed">
                  <em>"Dedicated to uplifting communities by providing resources, support, and education."</em>
                </p>
              </div>
              
              <!-- Back -->
              <div 
                class="absolute w-full h-full bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center"
                :style="{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }"
              >
                <p class="text-white font-black text-sm mb-3">Learn More</p>
                <router-link
                  to="/projects"
                  class="inline-flex items-center gap-1 px-3 py-2 bg-white text-orange-600 font-bold text-xs rounded transition-all hover:shadow-lg"
                >
                  Read More
                  <ArrowRight :size="14" :stroke-width="2.5" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Foundation Goals Section -->
      <div data-aos="fade-up" data-aos-delay="200" class="mb-8 md:mb-12">
        <div class="bg-white p-6 md:p-8 rounded-lg border border-neutral-200 shadow-sm mb-6">
          <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-3">Foundation Goals</p>
          <h3 class="text-2xl md:text-3xl font-black text-neutral-900 mb-4">Our Strategic Direction for Impact</h3>
          <p class="text-neutral-600 leading-relaxed">
            His Grace Foundation works toward four interconnected goals: empowering communities through education,
            enhancing health and well-being, promoting economic development, and fostering community engagement.
            Each goal is grounded in real community needs and supported by concrete objectives that drive measurable change.
          </p>
        </div>

        <!-- Impact Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <article v-for="(stat, idx) in impactStats" :key="stat.value" 
            :data-aos="`fade-${idx % 2 === 0 ? 'left' : 'right'}`"
            :data-aos-delay="`${300 + idx * 100}`"
            class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <!-- Image Section -->
            <div 
              class="h-40 md:h-48 bg-cover bg-center"
              :style="{ backgroundImage: `url('${stat.image}')` }"
            ></div>
            
            <!-- Content Section -->
            <div :class="`${stat.bgColor} p-5 md:p-6 flex flex-col gap-3`">
              <div class="text-2xl md:text-3xl font-black text-white">{{ stat.value }}</div>
              <p class="text-xs md:text-sm font-semibold text-white leading-snug">{{ stat.label }}</p>
              <router-link 
                to="/projects"
                class="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity mt-1"
              >
                Read More
                <ArrowRight :size="14" :stroke-width="2.5" />
              </router-link>
            </div>
          </article>
        </div>
      </div>

      <!-- Goals Grid -->
      <div data-aos="fade-up" data-aos-delay="400" class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12" aria-label="Foundation goals">
        <article v-for="(goal, idx) in foundationGoals" :key="goal.number"
          :data-aos="`fade-${idx % 2 === 0 ? 'up' : 'up'}`"
          :data-aos-delay="`${500 + idx * 100}`"
          class="grid gap-6 p-6 md:p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
        >
          <!-- Number Badge -->
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 text-white text-2xl font-black flex-shrink-0 shadow-lg">
              {{ goal.number }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-black text-neutral-900 leading-tight">{{ goal.title }}</h3>
            </div>
          </div>

          <!-- Goal Section -->
          <div class="grid gap-2">
            <p class="text-xs font-black text-neutral-600 uppercase tracking-widest">Goal:</p>
            <p class="text-sm md:text-base text-neutral-700 leading-relaxed font-medium">{{ goal.goal }}</p>
          </div>

          <!-- Objectives Section -->
          <div class="grid gap-3 pt-2">
            <p class="text-xs font-black text-orange-600 uppercase tracking-widest">Objectives:</p>
            <ul class="space-y-2.5">
              <li v-for="(objective, i) in goal.objectives" :key="i" class="flex gap-3 items-start">
                <span class="flex-shrink-0 text-orange-600 font-black text-lg mt-0.5">✓</span>
                <span class="text-sm text-neutral-700 leading-relaxed">{{ objective }}</span>
              </li>
            </ul>
          </div>

          <!-- Learn More Link -->
          <div class="pt-3 mt-auto">
            <router-link
              to="/projects"
              class="inline-flex items-center gap-2 text-orange-600 font-black text-sm hover:text-orange-700 transition-colors group"
            >
              <span>Learn more</span>
              <ArrowRight :size="16" :stroke-width="2.5" class="group-hover:translate-x-1 transition-transform" />
            </router-link>
          </div>
        </article>
      </div>

      <!-- Filter Buttons -->
      <div data-aos="fade-up" data-aos-delay="500" class="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 md:overflow-visible overflow-x-auto" aria-label="Filter projects">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="flex-shrink-0 px-5 md:px-6 py-2 md:py-3 rounded-full font-black text-xs md:text-sm border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          :class="selectedCategory === filter
            ? 'bg-orange-600 text-white border-orange-600 shadow-md'
            : 'bg-white text-neutral-600 border-neutral-200 hover:border-orange-600 hover:text-orange-600 hover:-translate-y-1 shadow-sm hover:shadow-md'"
          :aria-pressed="selectedCategory === filter"
          @click="chooseFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <!-- Projects Alternating Layout -->
      <div class="space-y-6 md:space-y-8 mb-12 md:mb-16">
        <article 
          v-for="(project, idx) in visibleProjects" 
          :key="project.slug"
          :data-aos="`fade-${idx % 2 === 0 ? 'right' : 'left'}`"
          :data-aos-delay="`${600 + idx * 100}`"
          class="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
          :class="idx % 2 === 1 && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'"
        >
          <!-- Content -->
          <div class="grid gap-4">
            <!-- Category Badge -->
            <div class="inline-flex w-fit">
              <span class="px-3 py-1 md:px-4 md:py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs md:text-sm font-black uppercase">
                {{ project.category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 leading-tight">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-base md:text-lg text-neutral-700 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Stats -->
            <div class="grid gap-3 pt-2">
              <div class="flex items-center gap-3">
                <span class="text-sm font-black text-neutral-600 uppercase tracking-wider">Location:</span>
                <span class="text-sm md:text-base text-orange-600 font-bold italic">{{ project.location }}</span>
              </div>

              <!-- Progress Bar -->
              <div class="grid gap-2">
                <div class="flex justify-between gap-4 text-xs font-black text-neutral-600">
                  <span>{{ project.progress }}% funded</span>
                  <span>Goal: {{ project.goal }}</span>
                </div>
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full"
                    :style="{ width: `${project.progress}%` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Learn More Button -->
            <div class="pt-2">
              <router-link
                :to="`/projects/${project.slug}`"
                class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-black text-sm rounded-lg hover:bg-orange-700 hover:-translate-y-1 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                :aria-label="`Read more about ${project.title}`"
              >
                <span>Learn more</span>
                <ArrowRight :size="18" :stroke-width="2.5" />
              </router-link>
            </div>
          </div>

          <!-- Image -->
          <div class="relative overflow-hidden rounded-lg shadow-lg h-80 md:h-96">
            <img 
              :src="project.image" 
              :alt="project.alt" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div data-aos="fade-up" data-aos-delay="700" class="flex items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16" aria-label="Projects pagination">
        <button
          type="button"
          class="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-neutral-900 text-white rounded-lg hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 font-black"
          @click="previousPage"
          aria-label="Previous projects"
        >
          <ArrowLeft :size="20" :stroke-width="2.3" />
        </button>

        <div class="flex items-center gap-2">
          <button
            v-for="page in pageCount"
            :key="page"
            type="button"
            class="transition-all duration-300"
            :class="currentPage === page - 1
              ? 'w-8 h-3 bg-orange-600 rounded-full shadow-md'
              : 'w-2 h-2 bg-neutral-300 rounded-full hover:bg-orange-600 hover:scale-125'"
            :aria-label="`Show project page ${page}`"
            :aria-current="currentPage === page - 1 ? 'page' : undefined"
            @click="goToPage(page - 1)"
          ></button>
        </div>

        <button
          type="button"
          class="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-neutral-900 text-white rounded-lg hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 font-black"
          @click="nextPage"
          aria-label="Next projects"
        >
          <ArrowRight :size="20" :stroke-width="2.3" />
        </button>
      </div>

      <!-- Process Section -->
      <div data-aos="fade-up" data-aos-delay="800" class="grid md:grid-cols-3 gap-6 md:gap-8 border-t border-neutral-200 pt-12 md:pt-16 mb-12 md:mb-16">
        <!-- Process Copy -->
        <div class="md:col-span-1">
          <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-3">How we work</p>
          <h3 class="text-2xl md:text-3xl font-black text-neutral-900 mb-4">Simple, accountable, and rooted in the community.</h3>
          <p class="text-neutral-600 leading-relaxed">
            Projects are planned with care so donations are connected to real
            needs and families receive support with respect. We keep the work
            practical, transparent, and focused on long-term hope.
          </p>
        </div>

        <!-- Process Image -->
        <div class="md:col-span-2 relative min-h-64 md:min-h-80 overflow-hidden rounded-lg shadow-lg">
          <img src="/images/real1.jpeg" alt="His Grace Foundation volunteers working with families" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
          <span class="absolute left-4 bottom-4 px-4 py-2 bg-yellow-500 text-neutral-900 rounded-full text-xs md:text-sm font-black uppercase">
            Care with follow-up
          </span>
        </div>
      </div>

      <!-- Principles -->
      <div data-aos="fade-up" data-aos-delay="900" class="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
        <article
          v-for="(principle, idx) in projectPrinciples"
          :key="principle.number"
          :data-aos="`fade-${idx % 2 === 0 ? 'left' : 'right'}`"
          :data-aos-delay="`${1000 + idx * 100}`"
          class="grid grid-cols-[3rem_1fr] gap-4 p-5 md:p-6 bg-white border border-neutral-200 rounded-lg shadow-sm hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-orange-600 font-black flex-shrink-0">
            {{ principle.number }}
          </div>
          <div>
            <h4 class="text-lg font-black text-neutral-900">{{ principle.title }}</h4>
            <p class="mt-2 text-sm text-neutral-600 leading-relaxed">{{ principle.text }}</p>
          </div>
        </article>
      </div>

      <!-- Gallery Section -->
      <div data-aos="fade-up" data-aos-delay="1100" class="mb-8 md:mb-12">
        <div class="mb-6 md:mb-8">
          <p class="text-xs font-black text-orange-600 uppercase tracking-wider mb-3">In pictures</p>
          <h3 class="text-2xl md:text-3xl font-black text-neutral-900">Moments from the work we continue to build.</h3>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-48 md:auto-rows-64">
          <article
            v-for="(item, idx) in galleryImages"
            :key="item.title"
            :data-aos="`fade-${idx % 2 === 0 ? 'up' : 'down'}`"
            :data-aos-delay="`${1200 + idx * 100}`"
            :class="[
              'relative overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all group',
              idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
            ]"
          >
            <img :src="item.image" :alt="item.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
            <div class="absolute inset-x-4 bottom-4 z-10">
              <h4 class="text-base md:text-lg font-black text-white leading-tight">{{ item.title }}</h4>
              <p class="text-xs md:text-sm text-white/80 leading-relaxed mt-1">{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes banner-float {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

.animate-banner-float {
  animation: banner-float 9s ease-in-out infinite alternate;
}


.project-card-enter-active,
.project-card-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.project-card-enter-from,
.project-card-leave-to {
  opacity: 0;
  transform: translateY(0.75rem);
}

/* 3D Flip Card Styles */
.perspective {
  perspective: 1000px;
}

.perspective > div {
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.perspective > div > div {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
