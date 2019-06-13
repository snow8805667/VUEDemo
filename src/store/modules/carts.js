const state = {
    items: []
}

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, num }) => {
            const product = rootState.products.products.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                num
            }
        })
    },
    totalPrice:(state,getters) =>{
        return getters.cartProducts.reduce((total,product)=>{//reduce是一个累加器，数组中的元素从左到右相加最终返回一个数
            return total+product.price * product.num
        },0)
    }

}



const mutations = {
    addproducttobag (state, { id }) {
      state.items.push({
        id,
        num: 1
      })
    },
    increaseitem (state, { id }) {
        const carItem = state.items.find(item => item.id === id)//find是es6的方法，find方法是查询一个比较符合的数组，他的参数是一个回调函数，
        carItem.num++
      },
      clear (state) {
        state.items = []
      }
}


const actions = {
    addtobag ({ commit, state }, product) {
      if (product.inventory > 0) { // 库存不为空
        const carItem = state.items.find(item => item.id === product.id)
        if (!carItem) {
          commit('addproducttobag', {id: product.id})
        } else {
          commit('increaseitem', carItem)
        }
      }
      commit('decreaseproductnum', {id: product.id})
    },
    checkoutall ({commit}) {
      commit('clear')
    }
  }

  export default{////暴露Store对象
    state,
    mutations,
    actions,
    getters//暴漏getters方法

}