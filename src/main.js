import Vue from 'vue'
import App from './App'
import './plugins/firebase'
import './plugins/vuefire'
import 'minireset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
