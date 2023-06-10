import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/words",
      name: "words",
      component: () => import('../components/WordsList.vue')
    },
    {
      path: "/words/:id",
      name: "words-details",
      component: () => import('../components/Word.vue')
    },
    {
      path: "/words/add",
      name: "words-add",
      component: () => import('../components/AddWord.vue')
    },
    {
      path: "/sets",
      name: "sets",
      component: () => import('../components/SetsList.vue')
    },
    {
      path: "/sets/:id",
      name: "sets-details",
      component: () => import('../components/Set.vue')
    },
    {
      path: "/sets/add",
      name: "sets-add",
      component: () => import('../components/AddSet.vue')
    },
    {
      path: "/languages",
      name: "languages",
      component: () => import('../components/LanguagesList.vue')
    },
    {
      path: "/languages/:id",
      name: "languages-details",
      component: () => import('../components/Language.vue')
    },
    {
      path: "/languages/add",
      name: "languages-add",
      component: () => import('../components/AddLanguage.vue')
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import('../components/CategoriesList.vue')
    },
    {
      path: "/categories/:id",
      name: "categories-details",
      component: () => import('../components/Category.vue')
    },
    {
      path: "/categories/add",
      name: "categories-add",
      component: () => import('../components/AddCategory.vue')
    }
  ]
})


export default router
