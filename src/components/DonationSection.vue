<script setup>
import { computed, ref } from "vue";
import { ArrowRight } from "lucide-vue-next";

const donationAmounts = [
  {
    amount: 25,
    label: "Educational Support",
    description: "Provides school supplies and learning materials for underserved students.",
  },
  {
    amount: 50,
    label: "Health & Wellness",
    description: "Supports community health fairs and wellness screening programs.",
  },
  {
    amount: 100,
    label: "Skill Building",
    description: "Funds workshops and training programs for economic empowerment.",
  },
  {
    amount: 250,
    label: "Community Engagement",
    description: "Supports volunteer programs and community service initiatives.",
  },
];

const donationMethods = [
  "One-time donation",
  "Monthly giving",
  "Corporate support",
  "In-kind gifts",
];

const selectedAmount = ref(donationAmounts[1].amount);
const customAmount = ref("");
const selectedMethod = ref(donationMethods[0]);

const activeAmount = computed(() => {
  const amount = Number(customAmount.value);
  return amount > 0 ? amount : selectedAmount.value;
});

const chooseAmount = (amount) => {
  selectedAmount.value = amount;
  customAmount.value = "";
};
</script>

<template>
  <section
    id="donate"
    class="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-orange-50 via-orange-25 to-white"
    aria-labelledby="donation-title"
    data-aos="fade-up"
  >
    <div class="max-w-5xl mx-auto">
      <!-- Banner -->
      <div
        class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-0 overflow-hidden mb-8 md:mb-10 bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <!-- Banner Copy -->
        <div
          class="flex flex-col justify-center gap-4 px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16 text-white"
        >
          <p class="text-xs md:text-sm font-black uppercase tracking-widest text-amber-400 mb-2">
            His Grace Foundation
          </p>
          <h2 id="donation-title" class="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            Support Our Mission
          </h2>
          <p class="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Your donations empower underprivileged communities through education, health, economic development, and community engagement.
          </p>
        </div>

        <!-- Banner Media -->
        <div class="relative min-h-80 md:min-h-96 overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900/60 z-10" />
          <img
            src="/images/real1.jpeg"
            alt="Children and families supported by donations"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <!-- Amount Card -->
          <div
            class="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-20 bg-white rounded-lg shadow-xl border-l-4 border-amber-400 px-5 py-4 md:px-6 md:py-5"
          >
            <p class="text-2xl md:text-3xl font-black text-neutral-900">${{ activeAmount }}</p>
            <p class="text-xs md:text-sm font-bold text-neutral-500 mt-1">{{ selectedMethod }}</p>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6 md:gap-8">
        <!-- Donation Panel -->
        <div
          class="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <!-- Panel Header -->
          <div class="mb-6">
            <p class="text-xs md:text-sm font-black uppercase tracking-widest text-orange-600 mb-2">
              Choose an amount
            </p>
            <h3 class="text-2xl md:text-3xl font-black text-neutral-900">Support Our Four Strategic Goals</h3>
          </div>

          <!-- Donation Amounts -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6"
            aria-label="Donation amount options"
          >
            <button
              v-for="item in donationAmounts"
              :key="item.amount"
              type="button"
              class="p-4 rounded-lg border-2 transition-all duration-200 text-left font-bold hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-95"
              :class="
                selectedAmount === item.amount && !customAmount
                  ? 'bg-orange-600 text-white border-orange-600 shadow-lg'
                  : 'bg-orange-50 text-neutral-900 border-neutral-200 hover:border-orange-400 hover:bg-orange-100'
              "
              :aria-pressed="selectedAmount === item.amount && !customAmount"
              @click="chooseAmount(item.amount)"
            >
              <p class="text-lg md:text-xl font-black">${{ item.amount }}</p>
              <p class="text-xs md:text-sm leading-snug text-opacity-90">{{ item.label }}</p>
            </button>
          </div>

          <!-- Custom Amount -->
          <div class="mb-6">
            <label class="block text-sm font-bold text-neutral-900 mb-2">Custom amount</label>
            <input
              v-model="customAmount"
              type="number"
              min="1"
              inputmode="numeric"
              placeholder="Enter amount"
              class="w-full h-11 px-4 rounded-lg border-2 border-neutral-200 text-neutral-900 font-bold focus:outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition-all"
            />
          </div>

          <!-- Donation Methods -->
          <div
            class="flex flex-wrap gap-3 mb-6"
            aria-label="Donation method options"
          >
            <button
              v-for="method in donationMethods"
              :key="method"
              type="button"
              class="px-4 py-2.5 md:py-3 rounded-full font-bold text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:scale-95 min-h-11"
              :class="
                selectedMethod === method
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border-2 border-neutral-200 text-neutral-600 hover:border-orange-400 hover:bg-orange-50'
              "
              :aria-pressed="selectedMethod === method"
              @click="selectedMethod = method"
            >
              {{ method }}
            </button>
          </div>

          <!-- CTA Button -->
          <router-link
            to="/donations"
            class="inline-flex items-center justify-center gap-2 w-full md:w-auto min-h-11 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 text-sm md:text-base"
            aria-label="Proceed to complete your donation"
          >
            <span>Continue to donate</span>
            <ArrowRight :size="18" class="flex-shrink-0" aria-hidden="true" />
          </router-link>
        </div>

        <!-- Impact Section -->
        <div
          class="bg-white rounded-lg shadow-md border border-neutral-100 p-6 md:p-8"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p class="text-xs md:text-sm font-black uppercase tracking-widest text-orange-600 mb-2">
            Your Impact
          </p>
          <h3 class="text-2xl md:text-3xl font-black text-neutral-900 mb-6">
            Every donation advances one of our strategic goals.
          </h3>

          <!-- Impact List -->
          <div class="space-y-3">
            <article
              v-for="item in donationAmounts"
              :key="item.label"
              class="flex gap-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 hover:shadow-sm transition-all"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900 font-black text-sm"
              >
                ${{ item.amount }}
              </div>
              <div class="min-w-0">
                <h4 class="font-black text-neutral-900 mb-1">{{ item.label }}</h4>
                <p class="text-sm text-neutral-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled by Tailwind CSS utility classes */
</style>
</style>
