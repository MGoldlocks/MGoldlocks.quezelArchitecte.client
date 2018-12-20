import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Architecture from '../components/Architecture'
import ArtEtDesign from '../components/ArtEtDesign'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Architecture',
      name: 'Architecture',
      component: Architecture
    },
    {
      path: '/ArtEtDesign',
      name: 'Art & Design',
      component: ArtEtDesign
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
