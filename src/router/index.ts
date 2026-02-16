import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Donations from '../pages/Donations.vue'
import DonationDetail from '../pages/DonationDetail.vue'
import Help from '../pages/Help.vue'
import HelpDetail from '../pages/HelpDetail.vue'
import GiveAway from '../pages/GiveAway.vue'
import GiveAwayDetail from '../pages/GiveAwayDetail.vue'
import Volunteer from '../pages/Volunteer.vue'
import VolunteerDetail from '../pages/VolunteerDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/donations',
    name: 'Donations',
    component: Donations
  },
  {
    path: '/donations/:id',
    name: 'DonationDetail',
    component: DonationDetail
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/help/:id',
    name: 'HelpDetail',
    component: HelpDetail
  },
  {
    path: '/give-away',
    name: 'GiveAway',
    component: GiveAway
  },
  {
    path: '/give-away/:id',
    name: 'GiveAwayDetail',
    component: GiveAwayDetail
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  },
  {
    path: '/volunteer/:id',
    name: 'VolunteerDetail',
    component: VolunteerDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
