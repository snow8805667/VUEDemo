<template>
  <div id="vue">
    {{message}}
    <div>
      <p>原始数据：{{message}}</p>
      <p>计算后反转数据：{{reverseMessage}}</p>
      <p>vue方法：{{reversedMessage()}}</p>
      <p>计算属性从新渲染：{{now}}</p>
      <p>计算属性从新计算值：{{fullName}}</p>
      <P>
        计算属性和方法的区别：计算属性在相关依赖的值发生改变时才会重新计算值，这也就意味着相关依赖的
        <br>值不发生改变时，计算属性将从缓存中取值，
        方法：每当页面重新渲染时，方法总会执行。
      </P>
    </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
var data={a:1}
// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
});
// 获得这个实例上的属性
// 返回源数据中对应的字段
console.log(vm.a == data.a ) // => true

export default {
  //将模块引出在其他地方使用
  name: "vue01",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    
    return {
      message: "vue学习第二天",
      a:11111,
      firstName:"lbl",
      lastName:"james"
    };
  },
   created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)//输出1111
  },
  computed:{
    //计算属性的getter
    reverseMessage:function(){
      return this.message.split("").reverse().join("");
    },
    now:function(){
      return Date.now();
    },
    fullName: {
    // getter
    get: function () {
      debugger;
      return this.firstName + ' ' + this.lastName
    },
    set: function (newValue) {
      
      this.firstName = newValue.split(' ');
      this.lastName = newValue.split(' ');
       }
     }
  },
  methods:{
    reversedMessage:function(){
      return this.message.split("").reverse().join("");
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