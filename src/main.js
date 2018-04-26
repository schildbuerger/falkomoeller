import Vue from 'vue'
import App from './App.vue'

const app = new Vue({
  el: '#app',
  render: h => h(App),
  created: function () {
    console.log('// Proudly presented by Falko Möller')
  }
})
// Switching pages in your route handler:
app.currentView = 'page1'
