import Vue from 'vue'
import App from './App.vue'

/*vue-boostrap*/
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*axios*/
import axios from 'axios'
Vue.prototype.$http = axios

Vue.component('header-msg', require('./components/header-msg.vue').default)
Vue.component('setting', require('./components/setting.vue').default)
Vue.component('translate', require('./components/translate.vue').default)

new Vue({
  el: '#app',
  render: h => h(App),
  data() {
    return {
      app : {
        lat : "", //위도
        long : "", //경도
        date : "" ,//날짜 yyyy-mm-dd
        
      }
    }
  },
  methods : {

  }


})
