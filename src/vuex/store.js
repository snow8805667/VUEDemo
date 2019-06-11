import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    nodeVoteCount: 3,//node的初始票数
    vueVoteCount: 3,//vue的初始票数
    products: [
        {
            name: 'apple',
            price: '2'
        },
        { name: 'banana', price: '3' },
        { name: 'orange', price: '4' },
        { name: 'pear', price: '5' }
    ],
}
const getters = {
    changeProduct(state) {//
        return state.products.map(val => {//mapes6新增 原数组被映射为新的数组 val=>es6的箭头函数相当于function (val)
            return {
                name: "**" + val.name + '--',
                price: val.price * 2
            }
        })
        return state.products
    }

}


const mutations = {
    increment(state) {
        state.nodeVoteCount++
    },
    decrePrice(state) {
        state.products.forEach(val => {//es6新增foreach const定义的变量不可以修改 var定义的变量可以修改，如果不初始化会输出undefined,let是块级作用域，函数外部定义不会影响函数内部
            val.price = val.price - 1;
        });

    }
}

const actions ={
    decrePriceAction(context){
        setTimeout(()=>{
            context.commit('decrePrice');
        },2000)
    }
}
export default new Vuex.Store({////暴露Store对象
    state,
    mutations,
    actions,
    getters//暴漏getters方法
})