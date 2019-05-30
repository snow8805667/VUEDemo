<template>
  <div id="vue">
    {{mess}}
    <div id="components-demo">
      <span>vue组件</span>
      <button-counter></button-counter>
    </div>
    <div id="components-demo">
          <span>组件复用</span>
          一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
    </div>
    <div>
      <span>组件传递值：把title传递给props</span>
      <blog-post title="My journey with Vue"></blog-post>
      <blog-post title="Blogging with Vue"></blog-post>
      <blog-post title="Why Vue is so fun"></blog-post>
    </div>

     <div :style="{ fontSize: postFontSize + 'em' }">
       放大文本-使用事件抛出一个值
      <span>组件传递值：把一个对象传递给props</span>
      <blog-post1 
       v-for="post in posts" v-bind:key="post.id" v-bind:post="post"  v-on:enlarge-text="postFontSize += $event">
       </blog-post1>
    </div>
    <div>
      <input
          v-bind:value="searchText"
          v-on:input="searchText = $event.target.value"
        >{{searchText}}
    </div>
    <div>
        <custom-input v-model="searchText"></custom-input>
    </div>
    <div>
      <alert-box>
        Something bad happened.
      </alert-box>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
Vue.component('blog-post1', {
  props: ['post'],
  template: `
    <div class="blog-post1">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
  </div>
  `
})
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
export default {
  //将模块引出在其他地方使用
  name: "vue05",
  
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      mess: "vue学习第二天",
      postFontSize:1,
      searchText:'aaa',
      posts: [
      { id: 1, title: 'spirngBoot' },
      { id: 2, title: 'angularjs' },
      { id: 3, title: 'vue' }
         ]
     }
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