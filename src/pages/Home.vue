<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import StatsSection from '../components/StatsSection.vue'
import MissionSection from '../components/MissionSection.vue'
import ActivitiesSection from '../components/ActivitiesSection.vue'
import ValuesSection from '../components/ValuesSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <StatsSection />
    <MissionSection />
    <ActivitiesSection />
    <ValuesSection />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>
