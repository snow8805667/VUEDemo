<template>
  <div id="vue">
    {{mess}}
    <div id="example-1">
        <span>监听事件</span>
        <button v-on:click="counter +=1">Add 1</button><!--click里可以写表达式-->
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="example-2">
         <button v-on:click="greet">Greet</button>
         <button v-on:click="say('hi')">Say hi</button>
          <button v-on:click="say('what')">Say what</button>
          <button v-on:click="warn('Form cannot be submitted yet.', $event)">
            Submit
          </button>
          
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";

export default {
  //将模块引出在其他地方使用
  name: "vue04",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      mess: "vue学习第二天",
      counter:0,
      name:'张嗨亮'
    }
  },
  methods:{
    greet:function (event){
      alert('Hello'+ this.name +'!');
      // `event` 是原生 DOM 事件
      if(event){
        alert(event.target.tagName);
      }
    },
    say:function(message){
      alert(message);
    },
    warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
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
</style>