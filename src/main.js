import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

import Home from './views/Home';
import Contact from './views/Contact';
import JoinUS from './views/JoinUS';
import NotFound from './views/NotFound';
import axios from 'axios'
import PublicationContent from "./views/PublicationContent";

Vue.config.productionTip = false

//axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.baseURL = 'https://sandfish.club/Dashboard/api/';
axios.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Requested-With": "XMLHttpRequest"
};
Vue.prototype.$http = axios

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '/join-us',
      component: JoinUS,
      meta: {
        title: 'Join US'
      }
    },
    {
      path: '/details/:id',
      component: PublicationContent,
      props: true,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/*',
      component: NotFound,
      meta: {
        title: 'Error 404'
      }
    },
    /*{
      path: '/*',
      component: Home,
      meta: {
        title: 'Home'
      }
    }*/
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
