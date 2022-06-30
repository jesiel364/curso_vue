const app = {
	data () {
		return {
			name: 'Zerkewerg',
			last_name: 'Drurking'
			,
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
			styles: {
				color: '#eee',
				backgroundColor: '#555'
			},
			themeBlack: true,
			
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

		toogleTheme () {
			this.themeBlack = !this.themeBlack

			if (this.themeBlack) {
				this.styles.backgroundColor = '#555'
				this.styles.color = '#eee'
			} else {
				this.styles.backgroundColor = '#fff'
				this.styles.color = '#000'
			}
		}


	},

	computed: {
		fullName () {
			return this.name + ' ' + this.last_name
		}
	}
}

Vue.createApp(app).mount('#app')