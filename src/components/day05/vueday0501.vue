<template>
  <div id="vue">
    <div>
      {{message}}
      <br>vuex是一个专本为vue.js应用程序开发的状态管理模式。
      <br>它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
      <br>Vuex 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上。
    </div>
    <!--通过$store.state.nodeVoteCount获得nodeVoteCount的状态值
    通过$store.state.vueVoteCount获得vueVoteCount的状态值-->
    <div>
      <h2>总票数：{{nodeVoteCount+vueVoteCount}}</h2>
    </div>
    <div>
      <h3>如何通过node.js对数据进行MD5加密</h3>
      <input type="button" value="投票">
      票数:{{nodeVoteCount}}
    </div>
    <hr>
    <div>
      <h3>真正掌握vuex的使用方法（一）</h3>
      <input type="button" value="投票">
      票数：{{vueVoteCount}}
    </div>
    <div>
      <h3></h3>
      <input type="button" value="投票" @click="$store.commit('increment')">
      票数：{{nodeVoteCount}}
      <!--会触发vuex 中的store.js中的increment方法 -->
    </div>
    <div class="product-one">
      <h2>product-one</h2>
      <ul><!--- 价格翻倍，通过es6的map实现-->
        <li v-for="item in changeProduct">
          <div class="name">{{item.name}}
            <div class="price">{{item.price}}</div>
          </div>
        </li>
      </ul>
    </div>
     <input type="button" value="价格减1" @click="decrePrice">
    <div class="product-one">
      <h2>product-one</h2>
      <ul><!--- 价格翻倍，通过es6的map实现-->
        <li v-for="item in product">
          <div class="name">
            {{item.name}}
           <div class="price">{{item.price}}</div>
          </div>
          
        </li>
      </ul>
    </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import {mapState,mapGetters, mapActions} from 'vuex';
export default {
  computed:{
    ...mapState({
      product:state=>state.vueday0501.vue0501product,//mapstate state=>传入参数state state.js名称.state名称
      nodeVoteCount:state=>state.vueday0501.nodeVoteCount,
      vueVoteCount:state=>state.vueday0501.vueVoteCount,
      //return this.$store.state.products;
      
    }),
    // changeProduct(){
    //   return this.$store.getters.changeProduct
    // }
    ...mapGetters({
      changeProduct:'changeProduct',
    })
  },
  
  //将模块引出在其他地方使用
  name: "vueday0501",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vuex state and mutations",
      msg: ""
    };
    
  },
  methods:{
    ...mapActions({
      decrePrice:'decrePriceAction'
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
div {
  border: 1px solid #000;
}
.dragnode {
  width: 200px;
  height: 200px;
  background-color: #f00;
  position: absolute;
}
.product-one{
  background-color: gold;
  clear: both;
}
.name {
  display: inline;

  width:100px;
  height: 90px;
  padding-left: 30px;
  background-color: crimson

}
.price {
  display:inline;
 
  border:0px;
 
 
}
div ul li {
  list-style-type:none;
  
  
}
</style>