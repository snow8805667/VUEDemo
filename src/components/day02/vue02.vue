<template>
  <div id="vue">
    {{message}}
    <div v-bind:class="{active:isActive}"></div>
    <input type="text" v-model="isActive" class="inputclass">
    <div>
      <h1 v-if="show">Vue is show</h1>
      <h1 v-else>Vue is hide</h1>
      <input type="text" v-model="show" class="inputclass">
    </div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vue02",
  data() {
    //data即使不需要传数据，亦必须return,否则报错

    return {
      message: "vue学习第二天",
      isActive: true,
      show: 3333,
      type:"A"
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
div {
  border: 1px solid #000;
}
.active {
  padding-top: 12%;
  border: 1px solid red;
}
.inputclass {
  border: 2px solid blue;
}
</style>