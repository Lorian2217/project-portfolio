import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pMain from '../components/ExampleMain.vue'
import pStudent from '../components/Listing.vue'
import pAuth from '../components/Authorization.vue'

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
    path: '/student',
    name: 'listing',
    component: pStudent
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

export default router
