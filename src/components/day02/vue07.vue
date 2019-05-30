<template>
  <div id="vue">
    {{mess}}
    <div>
      <fieldset>
        <legend>学生信息录入</legend>
        姓名：<input type="text" v-model="Name" placeholder="请输入姓名"><br/>
        性别：<select name="Sex" id="" v-model="Sex"><option>男</option><option>女</option></select><br/>
        年龄：<input type="number" name="Age" v-model.number="Age" placeholder="请输入年龄"><br/>
        电话：<input type="number" name="telphone" v-model.number="telphone" placeholder="请输入电话" maxlength="11"><br/>
        <input type="button" value="创建新用户" @click="Add();">
      </fieldset>
    </div>
    <div>
       <table>
         <thead>
           <th>姓名</th>
           <th>性别</th>
           <th>年龄</th>
           <th>电话</th>
           <th>操作</th>
         </thead>
        <tbody v-for="(item,index) in students">
            <tr>
              <td>{{item.name}}</td>
              <td>{{item.sex}}</td>
              <td>{{item.age}}</td>
              <td>{{item.phone}}</td>
              <td>
                <input type="button" value="删除" @click="deletestudent(index);">
              </td>
            </tr>
        </tbody>
       </table>
    </div>
    <!--vue实现购物车练习-->
    <div>
      <fieldset>
        <legend>vue实现购物车小练习</legend>
        <table>
          <thead>
            <td><input type="checkbox" name="selectAll" v-model="selectAll" id="" @click="selectAllGoods" ></td>
            <td>商品名称</td>
            <td>商品单价</td>
            <td>商品数量</td>
            <td>操作</td>
            </thead>
            <tbody v-for="(item,index) in goods">
                <td><input type="checkbox" name="selectList" id="" v-model="selectList" :id="item.id" :value="index"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td><input type="button" value="-" @click="subGood(item);" :disabled="item.mount===1" >{{item.mount}}<input type="button" value="+" @click="addGood(item);"> </td>
                <td><input type="button" value="删除" v-on:click="deletegood(index);"></td>
            </tbody>
        </table>
        <p>总价：{{total}}</p>
      </fieldset>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vue07",
  
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      mess: "vue练习",
      Name:"",
      Sex:"男",
      Age:"",
      telphone:"",
      selectAll:false,
      selectList:[],
      goods: [
                    {name:'iphone8', price:8888, mount:1},
                    {name:'huawei Mate10', price:6666, mount:2},
                    {name:'lenvo', price:6588, mount:1}

         ],
      students:[
          {name:'孙悟空',age:"15",telphone:"13634333222"},
          {name:'猪八戒',age:"145",telphone:"13635673222"},
          {name:'沙僧',age:"45",telphone:"136343334322"},
      ]
     
     }
  },
  computed:{
    total:function() {
      var total=0;
      for(var i=0,length=this.selectList.length;i<length;i++){
        var index=this.selectList[i];
        var item=this.goods[index];
        if(item!=null&&item!='')
        total+=item.price*parseInt(item.mount);
      }
      return total;
    }
  },
  methods:{
      Add:function(){
        if(this.Name===''){
          alert('姓名不能为空');
          return false;
        }
        
        if(this.Age===''){
          alert('年龄不能为空');
          return false;
        }

         if(this.telphone===''){
          alert('电话不能为空');
          return false;
        }
      this.students.unshift({name:this.Name,sex:this.Sex,age:this.Age,phone:this.telphone});
      this.Name='';this.Age="";this.telphone='';
      },
      deletestudent:function(index){
        this.students.splice(index,1);
      },
      selectAllGoods:function(){
        var selectList=document.getElementsByName('selectList');
        if(this.selectAll){
            for(var i=0;i<selectList.length;i++){
              if(selectList[i].checked===true){
                selectList[i].checked=false;
              }

            }
            this.selectAll===false;
            this.selectList=[];
        }else{
            for(var i=0;i<selectList.length;i++){
              if(selectList[i].checked===false){
                selectList[i].checked=true;
                this.selectList.push(selectList[i].value);
              }
            }
            this.checked = true;
        }
      },
      subGood:function(object){
        object.mount=object.mount-1;
      },
      addGood:function(object){
        object.mount=object.mount+1;
      },
      deletegood:function(index){
        this.goods.splice(index,1);
      }
     }
};
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
.active {
  padding-top: 12%;
  border: 1px solid red;
}
.inputclass {
  border: 2px solid blue;
}
div span{
 font-size: 16px;
 text-align: center;
 display: inherit;
 color:red

}
table{
  border:3px solid rgb(161, 60, 99);
}
table th{
 text-align: center;
}
tbody  td{

  text-align: center
}
thead td{

  color:red;
}
thead td input{
  width:25px;
  height:25px;
  vertical-align: bottom;
}
</style>