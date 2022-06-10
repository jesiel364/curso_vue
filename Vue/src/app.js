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
			alert(this.input_name)
			this.name = this.input_name
		}
  }
}
  
  Vue.createApp(MyNameApp).mount('#app')