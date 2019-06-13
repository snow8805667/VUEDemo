<template>
  <div class='title'>
    <h1 class='title-word'>Shopping-Cart</h1>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  
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
.title{
  color:red
}
.title-word{
  text-align: center
}
</style>