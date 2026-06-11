<script setup>
import { ref, computed } from 'vue'
import { Calendar, User, ArrowRight, Search } from 'lucide-vue-next'

const searchQuery = ref('')
const selectedCategory = ref('all')

const blogPosts = [
  {
    id: 1,
    title: 'Building Tomorrow: How Our Scholarship Program Changed 500 Lives This Year',
    excerpt: 'This year alone, our educational empowerment program provided life-changing opportunities to 500 young students from low-income backgrounds...',
    image: '/images/real1.jpeg',
    author: 'Dr. Sarah Johnson',
    date: '2026-06-08',
    category: 'education',
    readTime: '5 min read',
    content: 'Full article content here...',
  },
  {
    id: 2,
    title: 'Health Fairs Bring Free Medical Care to 3,500 Residents',
    excerpt: 'Our quarterly health fairs continue to be a lifeline for communities without adequate healthcare access...',
    image: '/images/real1.jpeg',
    author: 'Dr. Michael Chen',
    date: '2026-06-05',
    category: 'health',
    readTime: '4 min read',
    content: 'Full article content here...',
  },
  {
    id: 3,
    title: 'From Jobless to Entrepreneur: Success Stories from Our Economic Development Program',
    excerpt: 'Meet three individuals who transformed their lives through our comprehensive job training and mentorship programs...',
    image: '/images/real1.jpeg',
    author: 'Emma Rodriguez',
    date: '2026-06-01',
    category: 'economic',
    readTime: '6 min read',
    content: 'Full article content here...',
  },
  {
    id: 4,
    title: 'Volunteer Spotlight: How Communities are Leading Change',
    excerpt: 'Our volunteers are the backbone of everything we do. Meet this month\'s featured volunteers making remarkable differences...',
    image: '/images/real1.jpeg',
    author: 'James Wilson',
    date: '2026-05-28',
    category: 'volunteer',
    readTime: '4 min read',
    content: 'Full article content here...',
  },
  {
    id: 5,
    title: 'Year in Review: 2025 Impact Report Published',
    excerpt: 'We\'re excited to share our comprehensive 2025 impact report, showcasing the incredible progress made across all four pillars...',
    image: '/images/real1.jpeg',
    author: 'Admin',
    date: '2026-05-20',
    category: 'impact',
    readTime: '8 min read',
    content: 'Full article content here...',
  },
  {
    id: 6,
    title: 'Partnership Announcement: Collaborating with Global Tech for Digital Skills',
    excerpt: 'We\'re thrilled to announce a new partnership that will bring digital literacy training to underserved communities...',
    image: '/images/real1.jpeg',
    author: 'Admin',
    date: '2026-05-15',
    category: 'partnership',
    readTime: '3 min read',
    content: 'Full article content here...',
  },
]

const categories = [
  { value: 'all', label: 'All Stories' },
  { value: 'education', label: 'Education' },
  { value: 'health', label: 'Health' },
  { value: 'economic', label: 'Economic' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'impact', label: 'Impact' },
  { value: 'partnership', label: 'Partnership' },
]

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesCategory = selectedCategory.value === 'all' || post.category === selectedCategory.value
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Background Banner -->
    <section 
      class="relative min-h-96 bg-cover bg-center overflow-hidden py-16 md:py-24 px-6"
      :style="{ backgroundImage: 'url(/images/real1.jpeg)', backgroundAttachment: 'fixed' }"
    >
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-purple/30 pointer-events-none"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute inset-0 pointer-events-none" style="
        background: 
          radial-gradient(circle at 18% 33%, rgba(255, 255, 255, 0.08) 0 6%, transparent 6.4%),
          radial-gradient(circle at 23% 24%, rgba(255, 215, 134, 0.2) 0 2.1%, transparent 2.4%),
          linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, transparent 32%);
      "></div>

      <!-- Content -->
      <div class="relative z-10 max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            News & Stories
          </h1>
          <p class="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
            Stay updated with the latest news, success stories, and impact reports from His Grace Foundation.
          </p>
        </div>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="py-12 px-6 bg-slate-50 border-b border-gray-200">
      <div class="max-w-6xl mx-auto">
        <!-- Search Bar -->
        <div class="mb-8" data-aos="fade-up" data-aos-delay="100">
          <div class="relative">
            <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search stories, updates, and news..." 
              class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
            />
          </div>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="category in categories"
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="`px-4 py-2 rounded-full font-bold transition-all ${
              selectedCategory === category.value
                ? 'bg-primary-dark text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-dark'
            }`"
            data-aos="fade-up"
            :data-aos-delay="`${150 + (categories.indexOf(category) * 50)}`"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 md:py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <p class="text-xl text-gray-600">No posts found. Try adjusting your filters or search query.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="(post, index) in filteredPosts"
            :key="post.id"
            data-aos="fade-up"
            :data-aos-delay="`${100 + (index % 3) * 100}`"
            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:border-primary-dark"
          >
            <!-- Image -->
            <div class="relative h-48 overflow-hidden bg-gray-200">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span class="absolute top-4 right-4 px-3 py-1 bg-primary-dark text-white text-xs font-black uppercase rounded-full">
                {{ post.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-black text-slate-900 mb-3 leading-tight line-clamp-2 group-hover:text-primary-dark transition-colors">
                {{ post.title }}
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                {{ post.excerpt }}
              </p>

              <!-- Metadata -->
              <div class="flex flex-wrap gap-3 text-xs text-gray-500 font-bold mb-4 pb-4 border-b border-gray-200">
                <div class="flex items-center gap-1">
                  <Calendar :size="14" />
                  {{ formatDate(post.date) }}
                </div>
                <div class="flex items-center gap-1">
                  <User :size="14" />
                  {{ post.author }}
                </div>
                <span class="ml-auto">{{ post.readTime }}</span>
              </div>

              <!-- Read More Button -->
              <button class="w-full py-2 px-4 bg-gradient-to-r from-primary-dark to-primary-purple text-white font-black rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn">
                Read More
                <ArrowRight :size="18" class="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <button class="px-8 py-3 border-2 border-primary-dark text-primary-dark font-black rounded-lg hover:bg-primary-dark hover:text-white transition-all">
            Load More Stories
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 md:py-20 px-6 bg-gradient-to-br from-primary-dark to-primary-purple">
      <div class="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-lg text-gray-100 mb-8">Get the latest updates, success stories, and opportunities to make an impact directly in your inbox.</p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button class="px-6 py-3 bg-orange-cta text-white font-black rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
