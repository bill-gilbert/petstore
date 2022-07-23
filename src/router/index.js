import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Form from '../components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true
    },
    {
      path: '/',
      name: 'Form',
      component: Form,
      props: true
    }
  ]
})
