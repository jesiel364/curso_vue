const app = {
	data () {
		return {
			title: 'Zerkewerg',
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
			],
			cart: [],
		}
	},

	methods: {
		addCart (product) {
			this.cart.push(product)
		},

		inCart (product) {
			return this.cart.indexOf(product) != -1
		},

		removeCart (product) {
			this.cart = this.cart.filter((prod, index) => {
				return product != prod
			})


		},


	}
}

Vue.createApp(app).mount('#app')