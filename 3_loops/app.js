const app = {
	data () {
		return {
			name: 'Zerkewerg',
			products: [
				{
					title: 'O Lobo da Estepe - Hermann Hesse',
					description: 'Livro muito bom!',
					image: './assets/livro_1.jpg',
					stars: 0,
			},
			{
				title: 'Histórias Extraordinárias - Edgar Allan Poe',
				description: 'Livro sensacional!',
				image: './assets/livro_2.jpg',
				stars: 5,
			},
			
			]
		}
	}
}

Vue.createApp(app).mount('#app')