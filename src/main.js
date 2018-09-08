import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const getGDPR = localStorage.getItem('GDPR:accepted');

if(typeof getGDPR !== undefined && getGDPR === true) {
  Vue.use(VueAnalytics), {
    id: 'UA-XXXXX-X',
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  }
}

if(typeof getGDPR !== undefined && getGDPR === false) {
  Vue.use(VueAnalytics), {
    id: 'UA-XXXXX-X',
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true
    }
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})
