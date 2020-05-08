import Vue from 'vue'
import VueRouter from 'vue-router'
import UserCard from '../components/UserCard'
import BillboardHeader from '../components/BillboardHeader'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: UserCard,
    },
    {
      path: '/Billboard/:index',
      name: 'Billboard',
      component: BillboardHeader,
      props: true
    }
  ],
})

export default router
