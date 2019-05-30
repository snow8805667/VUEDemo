<template>
  <div id="vue">
    <div>
      {{message}}
    </div>
    <div>
         <h3 v-color="'red'">{{msg}}</h3><!---  binding v-color需要加上'' 否则会被当成变量  -->
        <input type="text" v-model="msg" class="form-control" v-focus><!--el-->
    </div>
    <!--vue 拖拽-->
    <div id="derective">
        <div v-drag class="dragnode">拖拽1</div>
        <div v-drag.limit class="dragnode">拖拽2</div>
    </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vueday01",
  directives:{
    focus:{//指令名称
    //d当被绑定的元素插入dom时执行
      inserted: function (el){
      el.focus();
      },
    },

    color:function(el,binding){//color时一个指令，
        el.style.color=binding.value;
      },
    drag:{
      bind(el,binding){
        console.log('bind');
        console.log(el);
        console.log(binding);
        el.onmousedown=function(e){
          var e=e || event;
          let disX=e.clientX-el.offsetLeft;
          let disY=e.clientY-el.offsetTop;

          document.onmousemove = function(e){
          var e= e || event;
          let L=e.clientX-disX;
          let T = e.clientY-disY;
          if(binding.modifiers.limit){
            if(L<0){
              L=0;
            }
          }
        el.style.left=L +'px';
        el.style.top = T +'px';
        },
        document.onmouseup = function(){
          document.onmousemove=null;
          }
        return false;
        };
      }
    }
    
  },

  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue自定义指令",
      msg:""
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