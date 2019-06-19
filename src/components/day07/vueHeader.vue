<template>
  <div id="vue">
      页面头部
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vueHeader",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的"
    };
  },

};
</script>
<style scoped>
#vue {
  height: 20%;
  width: 100%;
  background-color: blue;
  font-size: 25px;
  margin: auto;
  text-align: center;
  line-height: 150px;

 
}
div {
  border: 1px solid #000;
}
</style>