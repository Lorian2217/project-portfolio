import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
import UserList from '../components/UserList.vue'
import Test from '../components/HelloWorld.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/o-nas',
    name: 'o-nas',
    component: About
  },
  {
    path: '/users ',
    name: 'users',
    component: UserList
  },
  // {
  //   path: '/spisok',
  //   name: 'spisok',
  //   component: pSpisok,
  //   meta: {requiresAuth: true},
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
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
