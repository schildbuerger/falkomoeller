import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: '#app',
	render: h => h(App),
	created: function () {
		console.log('// Proudly presented by Falko Möller')
	},
})
