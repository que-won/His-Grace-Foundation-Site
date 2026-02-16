<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
