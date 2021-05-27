import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation';
import '../src/assets/css/index.css'
import router from './router'

Vue.use(VueGeolocation);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
