<template>
  <div id="vue">
    <div>
      {{message}}
    </div>
    <Title></Title>
    <product-list></product-list>
    <shopping-cart></shopping-cart>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import Title from '@/components/day05/title'
import productList from '@/components/day05/productList'
import shoppingCart from '@/components/day05/shoppingCart'//注意vue的因引用组件的写法是驼峰式命名法，这样在也页面中引用组件的时候可以用shopping-cart
export default {
  components:{
    Title,productList,shoppingCart
  },
  //将模块引出在其他地方使用
  name: "vueday0502",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vuex state and mutations",
      msg: ""
    };
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
</style>