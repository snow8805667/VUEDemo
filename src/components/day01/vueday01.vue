<template>
  <div id="vue">
    Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的
    <strong>渐进式框架</strong>。与其它大型框架不同的是，
    Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
    另一方面，当
    <span
      style="color:green;"
    >与现代化的工具链以及各种支持类库结合使用时</span>，Vue 也完全能够为复杂的单页应用提供驱动。
    <br>
    <div>{{ message }}</div>
    <div>
      <span :title="message1">title属性，提示信息！</span>
    </div>
    <div>
      <span v-if="seen">v-if属性，true能看到我！v-if和v-show的区别</span>
    </div>
    <div>
      <ol>
        v-for属性
        <li v-for="todo in todos">{{todo.name}}</li>
      </ol>
    </div>
    <div>
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">click事件，逆转消息</button>
    </div>
    <div>
      v-model支持双向绑定
      <p>{{message}}</p>
      <input type="text" v-model="message">
    </div>

    <div>
      <ol>
        vue中使用组件
        <br>
        <todo-item></todo-item>
        <li  v-for="item in groceryList">{{item.text}}</li>
      </ol>
    </div>

    <div>
      <ol>
        vue中使用组件传递值
        <br>
        <todo-item1 v-for="item in groceryList" v-bind:todo1="item" v-bind:key="item.id">
        </todo-item1>
      </ol>
    </div>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
export default {
  //将模块引出在其他地方使用
  name: "vueday01",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的",
      message1: "页面加载与" + new Date().toLocaleString(),
      seen: true,
      todos: [{ name: "孙悟空" }, { name: "猪八戒" }, { name: "唐僧" }],
      groceryList:[
        {id:0,text:"面类"},
        {id:1,text:"奶类"},
        {id:2,text:"水果"}
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};

Vue.component("todo-item", {
  template: "<li>这是代办项</li>"
});

Vue.component("todo-item1", {
  props:['todo1'],
  template: "<li>{{todo1.text}}</li>"
});
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