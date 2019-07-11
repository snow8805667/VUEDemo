<template>
  <div id="login">
    <vue-Header></vue-Header>
    <div id="indexhtml" style="overflow:scroll;">
          <table >
            <th>序号</th>
            <th>作者</th>
            <th>标题</th>
            <th>操作</th>
          <tbody v-for="(item,index) in learnList">
            <tr>
              <td>{{index}}</td>
              <td>{{item.author}}</td>
              <td>{{item.title}}</td>
              <td> <a href="#" @click="deleteItem(item);"> 删除</a> | <a href="#" @click="updateitem(item)">修改</a> <a href="#" @click="addItem();"> 新增</a></td></tr>
          </tbody>
          </table>
    </div>
    <vue-Footer></vue-Footer>
  </div>
</template>`  `


<script type="text/javascript">
import Vue from "vue";
import vueFooter from "@/components/day07/vueFooter";
import vueHeader from "@/components/day07/vueHeader";
export default {
  //导出组件
  components: { vueFooter, vueHeader },
  inject:['reload'],
  //将模块引出在其他地方使用
  name: "index",
  mounted:function(){
    this.getLearnList();

  },
  computed:function(){
     this.getLearnList();
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的",
      userName: "",
      password: "",
      responseResult:[],
      learnList:[]
    };
  },
  methods:{
    getLearnList:function(){
      this.$axios.post('/learn/queryLeanList',{
      }).then(successResponse=>{
        this.learnList=successResponse.data.page.list;
      }).catch(failResponse=>{});
    },
    updateitem:function(object){
      this.$router.push({
          path:'/update',
          name:'update',
          params:{
            leanItem:object
          }
      })
    },
    addItem:function(){
      this.$router.push({
          path:'/add',
          name:'add',
      })
    },
    deleteItem:function(item){
      this.$axios.post('/learn/delete', [item.id]
      ).then(successResponse=>{
        alert("删除成功");
        this.reload();
      }).catch(failResponse=>{
        alert("删除失败");
      });
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
  overflow:scroll
}

</style>