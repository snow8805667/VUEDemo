<template>
  <div id="update">
    <vue-Header></vue-Header>
    <div id="indexhtml">
         <div>
           <span>作者：</span><input type="text" v-model="leanItem.author" value=""><br>
           <span>标题：</span><input type="text" v-model="leanItem.title" value=""> 
         </div>
         <div  class="buttonClass">
           <button @click="updateItem();">修改</button>
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
    this.getItem();

  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "教程列表修改",
      userName: "",
      password: "",
      responseResult:[],
      leanItem:"",
    };
  },
  methods:{
    getItem:function(){
      debugger;
      var item=this.$route.params.leanItem;
      this.leanItem=item;
    },
    updateItem:function(){
      this.$axios.post('/learn/update',{
        id:this.leanItem.id,
        author:this.leanItem.author,
        title:this.leanItem.title,
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