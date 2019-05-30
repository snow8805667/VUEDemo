<template>
  <div id="vue">
    <span>我是子组件实例</span>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "childchild",
  inject:['info1','info2','info3','info4'],
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "我是childchild",
      title:1
    };
  },
  methods:{
    
  },
  /* 生命周期钩子 */
  beforeCreate(){

    alert(this.info1);
  },
  create(){
    debugger;
    alert(this.info2);
  },
  beforeMount(){
    alert(this.info3);
  },
  mounted(){
    alert(this.info4);
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