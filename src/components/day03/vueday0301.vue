<template>
  <div id="vue">
    {{message}}
    <app-header :title="logmsg" @transferUser="getUser"><!---->
      
    </app-header><!--父组件把logmsg的值传递给子组件的title--><p>用户名：{{user}}</p> 
    <app-user></app-user>
    <app-footer></app-footer>
    
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import Footer from '@/components/day03/Footer.vue'
import Header from '@/components/day03/Header.vue'
import Users from '@/components/day03/Users.vue'
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "vue01",
  components:{
    "app-user":Users,
    "app-footer":Footer,
    "app-header":Header
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue学习第三天-组件引用",
      logmsg:"我是title",
      user:''
    };
  },
  methods:{
    getUser(msg){
      debugger;
      this.user=msg;
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