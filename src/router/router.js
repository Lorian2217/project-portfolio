import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import pMain from '../components/ExampleMain.vue'
import pAuth from '../components/Authorization.vue'
import pSpisok from '../components/spisok.vue'
import exFooter from '../components/FooterContent.vue'
import sProfile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: pMain
  },
  {
    path: '/second',
    name: 'second',
    component: HomeView
  },
  {
    path: '/spisok',
    name: 'spisok',
    component: pSpisok,
    meta: {requiresAuth: true},
  },
  {
    path: '/downPlace',
    name: 'downPlace',
    component: exFooter
  },
  {
    path: '/personal-cabinet',
    name: 'personal-cabinet',
    component: sProfile
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    name: 'authorization',
    component: pAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
});

export default router
