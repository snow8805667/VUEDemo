
const state = {
    products: [
      { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
      { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
      { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
    ]
}

const getters = {
 
}

const mutations = {
    decreaseproductnum (state, { id }) {
      const productsitem = state.products.find(product => product.id === id)
      productsitem.inventory--
    }
  }
 
const actions ={

}

export default{
    state,
    getters,
    mutations,
    actions

}