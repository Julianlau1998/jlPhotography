import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-168808470-4',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
