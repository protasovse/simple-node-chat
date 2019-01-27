import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import reactiveStorage from 'vue-reactive-storage'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://127.0.0.1:3000',
}))

Vue.use(reactiveStorage, {
  user: null,
})

Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
