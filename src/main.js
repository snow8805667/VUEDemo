// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'

var axios=require('axios');
axios.defaults.baseURL='http://localhost:8081/api'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
