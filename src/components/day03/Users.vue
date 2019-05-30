<template>
  <div class="users">
    <ul >
      <li v-for="User in users" @click="User.show=!User.show">
            <h2>{{User.name}}</h2>
            <h3 v-show="User.show">{{User.Position}}</h3>
      </li>
    </ul>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "app-user",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
        users:[
           {name:"Henry",Position:"Java工程师",show:false},
           {name:"Lily",Position:"Java工程师",show:false},
          {name:"KangKang",Position:"Java工程师",show:false},
          {name:"Maria",Position:"Java工程师",show:false},
           {name:"Sally",Position:"Java工程师",show:false},
           {name:"Elinna",Position:"Java工程师",show:false}
           ]
    };
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
  border: 1px ;
}
.users{
   width: 100%;
   max-width: 1200px;
   margin:40px auto;
   padding: 0 20px;
   box-sizing: border-box;
 }
  ul{           
    flex-wrap: wrap;          
    list-style-type: none;
    padding: 0;              
   }
   li{
   flex-grow: 1;            
   flex-basis: 200px;       
   text-align: center;
   padding: 30px;
   border: 1px solid #666;
   margin: 10px;
 }
</style>