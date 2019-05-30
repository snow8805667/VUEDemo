<template>
  <div id="vue">
    <p>{{message}}</p>
    <p>数据倒置：{{reverseMessage}}</p>
    <button @click="change" :title="title">方法1</button>
    <button @click="transfer">调用方法1</button>
     <child1></child1>
    <div class="parent_area">
     
    </div>
  </div>
  
</template>

<script type="text/javascript">
import Vue from "vue";
import child1 from "@/components/day03/child1";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "vue0304",
  components:{
    "child1":child1
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue学习第三天-处理边界问题",
      title:"鼠标悬停展示信息"
    };
  },
  methods:{
    change(){
      this.message="写入根组件新数据";
      this.title="写入跟组件新数据-鼠标悬停展示信息"
    },
    transfer(){
      this.change();
      console.log(this.title);
    }
  },
  computed:{
    reverseMessage(){
      return this.message.split('').reverse().join('');
    }
  }
}
</script>
<style scoped>

.active{
  background-color: red;
}
</style>