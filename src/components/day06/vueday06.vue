<template>
  <div id="vue">
    使用vuerouter,将组件映射到路由，在app.vue的router-view进行渲染
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vueday01",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的"
    };
  },

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
</style>