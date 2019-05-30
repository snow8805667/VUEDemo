<template>
  <header>
    <h1>{{title}}</h1>
    <div>
      <label for="">
        <span>用户名：</span>
        <input v-model="username" @change="setUser"><!--子组件通过setUser 方法的$emit向父组件的transferUser传递值-->
      </label>
    </div>
  </header>
</template>


<script type="text/javascript">
import Vue from "vue";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "app-header",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      username:''
    };
  },
  methods:{
    setUser:function(){
      this.$emit('transferUser',this.username);//this $emit（'自定义事件名',要传送的数据）；
    }
  },
  props:['title']
}
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
 header{
   background: pink;
   padding: 10px;
 }
 h1{
   color: #222;
   text-align: center;
   }
</style>