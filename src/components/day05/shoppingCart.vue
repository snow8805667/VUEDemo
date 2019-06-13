<template>
  <div class='ShoppingList'>
    <h2 class='title'>shoppingcart</h2>
      <div class='Shop'>
        <ul>  
          <li v-for="(product,index) in productss" :key="index">
            <span>{{product.title}}</span>
            <span>${{product.price}}</span>
            <span>{{product.num}}</span>
          </li>
        </ul>
        <p>Total ${{totalprice}}</p>
        <br>
        <p>checkout <button @click="checkoutall">checkout</button></p>
      </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import { mapGetters, mapActions } from 'vuex';
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
  computed:{
    ...mapGetters({
      productss:"cartProducts",
      totalprice:"totalPrice"
    })
  },
  methods:{
    ...mapActions({
      checkoutall:'checkoutall'
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
.ShoppingList{
  text-align: center
}
.title{
  text-align: center
}
.Shop{
  width:500px;
  height: 400px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>