const MyNameApp = {
	data() {
	  return {
		name: "Jesiel",
		input_name: ''
	  }
	},
	methods: {
		submitForm(e){
			e.preventDefault()
			console.log('Caiu aqui!')
		}
  }
  
  Vue.createApp(MyNameApp).mount('#app')