// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1.引入vuex
import Vuex from 'vuex'
// 2.在Vue中使用vuex插件
Vue.use(Vuex)

// 3.初始化vuex
const store = new Vuex.Store({
  // 5.配置
  // 状态
  state: {
    // 总数
    total: 0
  },
  mutations: {
    TOTAL_UP (state) {
      state.total++
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 4.添加到vue实例中,名字必须是store
  store,
  template: '<App/>',
  components: { App }
})
