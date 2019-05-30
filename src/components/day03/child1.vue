<template>
  <div id="vue">
    {{message}}{{title}}
    <button @click="change">点我加1 </button><br><br>
     姓名：<input type="text" placeholder="请输入您的姓名"/>
    <button @click="getInfo"> 获取子组件</button>
    <childchild ref="childSpan"></childchild>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import childcom from "@/components/day03/child-com";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "child1",
  components:{
    "childchild":childcom
  },
  provide:{
    info1:"提供依赖--组件实例刚被创建",
    info2:"提供依赖--组件实例创建完成",
    info3:"提供依赖--模板挂载之前",
    info4:"提供依赖--模板挂载之后"
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "我是child1",
      title:1
    };
  },
  methods:{
    change(){
      this.title=this.title+1;
      alert(this.$parent.message);//将会弹出父组件的message   vue学习第三天-处理边界问题
    },
    getInfo(){
      debugger;
      alert(this.$refs.childSpan.$el.innerText);//访问子组件的的innerText 我是子组件
    }
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
</style>