import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StaticPageView from '../views/StaticPageView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    {
      path: '/projects',
      name: 'projects',
      component: StaticPageView,
      props: {
        title: 'Projects',
        description: 'See the programs and impact areas we focus on across education, health, and support.',
        kind: 'projects',
      },
    },
    {
      path: '/donations',
      name: 'donations',
      component: StaticPageView,
      props: {
        title: 'Donations',
        description: 'Support the work with gifts that help us respond to urgent needs and long-term care.',
        kind: 'help',
      },
    },
    {
      path: '/help',
      name: 'help',
      component: StaticPageView,
      props: {
        title: 'Help',
        description: 'Find the ways you can support the mission and take part in the work.',
        kind: 'help',
      },
    },
    {
      path: '/give-away',
      name: 'give-away',
      component: StaticPageView,
      props: {
        title: 'Give Away',
        description: 'See simple ways to share resources and meet real needs in the community.',
        kind: 'give-away',
      },
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: StaticPageView,
      props: {
        title: 'Volunteer',
        description: 'Join the people who lend time, skills, and energy to strengthen the mission.',
        kind: 'volunteer',
      },
    },
    { path: '/why-us', redirect: '/volunteer' },
    {
      path: '/contact',
      name: 'contact',
      component: StaticPageView,
      props: {
        title: 'Contact',
        description: 'Reach out to the team with a question, partnership idea, or support request.',
        kind: 'contact',
      },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
