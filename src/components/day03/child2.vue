<template>
  <div id="vue">
    {{message}}
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "child2",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "我是child2"
    };
  },
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
</style>