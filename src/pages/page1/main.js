import Vue from 'vue'
import App from './App.vue'
import Textarea from './tag-textarea.common'

Vue.config.productionTip = false
Vue.use(Textarea)

new Vue({
  render: h => h(App),
}).$mount('#app')
