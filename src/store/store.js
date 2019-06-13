import Vue from 'vue';
import Vuex from 'vuex';
import carts from './modules/carts'
import products from './modules/products'
import vueday0501 from './modules/vueday0501'
Vue.use(Vuex);
export default new Vuex.Store({////暴露Store对象
    modules:{//一个modules可以引入多个js
        carts,
        products,
        vueday0501,
    },
})