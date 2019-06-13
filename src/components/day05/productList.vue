<template>
  <div class='ProductList'>
    <h2 class='title'>Product</h2>
    <div class="Products">
      <ul>
        <li v-for="(product ,index) in products" :key="index">
            <span>{{product.title}} </span>
            <span>${{product.price}} </span>
            <span>{{product.inventory}} </span>
      <p><button @click="addtobag(product)" :disabled="!product.inventory">add to cart</button></p>
        </li>
      </ul>
       <br>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import {mapState,mapActions} from 'vuex'
export default {
  
  //将模块引出在其他地方使用
  name: "vueday0502",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vuex state and mutations",
      msg: ""
    };
  },

//  //vuex] unknown getter: function products(state) {
      //return state.products.products;

  computed:{
    ...mapState({//...拷贝原对象的所有属性到当前对象中
       products: state => state.products.products
     
    })
  },
  methods:{
    ...mapActions({
      addtobag:"addtobag"
    })
  }
};
</script>
<style>
#vue {
  width: 50%;
  font-size: 25px;
  margin: auto;
  text-align: left;
}
.ProductList{
 text-align: center
}
.title{
  text-align: center
}
.Products{
  width:500px;
  height: 400px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>