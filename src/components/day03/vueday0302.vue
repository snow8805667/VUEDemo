<template>
  <div id="vue">
    {{message}}
    <app-footer>
      <span >我是父组件插槽</span>
      <span slot="chacao" slot-scope="msg">
        我是具名插槽，<br>
        <span v-for="item in msg.data1">{{item}}</span><!--solt-scope插槽子向父传递值,data1是接受子组件传递过来的名字-->
      </span>
    </app-footer>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import Footer from '@/components/day03/Footer.vue' 
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "vue01",
  components:{
    "app-footer":Footer
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue学习第三天-插槽"
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