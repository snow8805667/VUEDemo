<template>
  <div id="vue">
    <div>
      {{message|capitalize}}

    </div>
    <div>
        <span>价格</span>
      {{price|currency('￥')}}

    </div>
    
    <!--vue 拖拽-->
    
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vue guo lv qi",
  components:{


  },
  filters:{
    capitalize:function(value){
      if(!value) return '';
      value=value.toString();
      return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
    },
    currency:function(myInput,arg1){
      if(!arg1) return '';
      return parseFloat(myInput).toFixed(2)+arg1;
    }
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue guo  Lv Qi",
      msg:"",
      price:"1000"
    };
  },
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
.dragnode{
  width: 200px;
  height: 200px;
  background-color: #f00;
  position: absolute;
}
</style>