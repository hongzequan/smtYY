import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import './assets/css/style.css'
import {post,fetch,patch,put} from './utils/http'


Vue.config.productionTip = false;
Vue.use(ElementUI);
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
// Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
