<template>
  <div id="login">
    <vue-Header></vue-Header>
    <div id="indexhtml">
          这是首页面
    </div>
    <vue-Footer></vue-Footer>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import vueFooter from "@/components/day07/vueFooter";
import vueHeader from "@/components/day07/vueHeader";
export default {
  //导出组件
  components: { vueFooter, vueHeader },
  //将模块引出在其他地方使用
  name: "index",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的",
      userName: "",
      password: "",
      responseResult:[],
    };
  },
  methods:{
  }
};
</script>
<style scoped>
#indexhtml {
  height: 60%;
  width: 100%;
  font-size: 25px;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
#login{
  height: 100%;
}
</style>