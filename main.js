// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import { createPinia } from 'pinia';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.use(createPinia());
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia());
  return {
    app
  }
}
// #endif