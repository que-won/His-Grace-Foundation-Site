import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out-cubic',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
})

app.mount('#app')
