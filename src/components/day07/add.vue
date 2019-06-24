<template>
  <div id="addItem">
    <vue-Header></vue-Header>
    <div id="indexhtml">
         <div>
           <span>作者：</span><input type="text" v-model="author" value=""><br>
           <span>标题：</span><input type="text" v-model="title" value=""><br>
           <span>链接：</span><input type="text" v-model="url" value=""> 
         </div>
         <div  class="buttonClass">
           <button @click="addItem();">新增</button>
            <button @click="goBack();">返回</button>
         </div>
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
  mounted:function(){
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "教程列表修改",
      author: "",
      title: "",
      url:"",
      leanItem:""
    };
  },
  methods:{
    addItem:function(){
      if(this.author==null||this.author===""){
        alert("作者不能为空");
        return false;
      }
      if(this.title==null||this.title===""){
        alert("标题不能为空");
        return false;
      }
      if(this.url==null||this.url===""){
        alert("链接不能为空");
        return false;
      }

      this.$axios.post('/learn/add',{
        author:this.author,
        title:this.title,
        url:this.url,
      }).then(successResponse=>{
        alert("更新成功");
         this.$router.replace({path:'/index'});
      }).catch(failResponse=>{
        alert("更新失败");
      });

    },
    goBack:function(){
      this.$router.replace({path:'/index'});
    }
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

div table th{
  text-align: center;


}
div table{
  width:80%;
  text-align: center;
  padding-left:200px;
}
button{
  width: 100px;
  height: 30px;
  background-color:red
}
.buttonClass{
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>