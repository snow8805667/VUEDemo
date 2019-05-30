<template>
  <header>
    <h1>{{copyright}}我是子</h1>
    <slot></slot>
    <slot name='chacao' :data1="datas"></slot><!--:data1是传递给父组件的名字-->
  </header>
</template>


<script type="text/javascript">
import Vue from "vue";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "app-footer",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
       copyright:"Copyright 2018 Vue Demo",
       datas:[
         "曹操","张飞","赵云","吕布",'关羽',"诸葛亮"
       ]
    };
  }
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
footer{
     background: #666;
     padding: 6px;
   }
   footer p{
     color: pink;
     text-align: center;
   }
</style>