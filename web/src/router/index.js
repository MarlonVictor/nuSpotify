import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongsView from '@/views/SongsView.vue'
import ArtistsView from '@/views/ArtistsView.vue'
import ArtistView from '@/views/ArtistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsView,
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistsView,
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: ArtistView,
    },
  ],
})

export default router
