import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/mes-mangas',
    name: 'mangas',
    component: () => import('../views/MangasView.vue')
  },
  {
    path: '/mes-mangas/:mangaId',
    name: 'mangaDetails',
    component: () => import('../views/MangaDetails.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/new-mangas',
    name: 'newMangas',
    component: () => import('../views/NewManga.vue')
  },
  {
    path: '/edit-mangas',
    name: 'editMangas',
    component: () => import('../views/EditManga.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
