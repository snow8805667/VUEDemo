<template>
  <div id="vue">
    {{mess}}
    <template  v-for="item of items">
    <div>
      <span>列表循环</span>
      <ul id="example-1">
        <li>
          {{ item.message }}
        </li>
      </ul>
    </div>
    </template>
    <div>
     <span> 索引和父列表</span>
      <ul id="example-2">
        列表循环-vue拥有对父作用域的完全访问,in和of是一个效果
        <li v-for="(item,index) in items">
          {{ mess }}-{{index}}-{{item.message}}
        </li>
      </ul>
    </div>
    <div>
      <span>vue-v-for支持迭代循环，</span>
      <ul id="example-3">
        <li v-for="(value,name,index) in object">
         {{index}}:{{name}}:{{value}}
        </li>
      </ul>
    </div>
    <template>
     <div>
      <span> 过滤和排序</span>
      <ul id="example-4">
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ul>
    </div>
    </template>

    <div id="todo-list-example">
      <span> vue组件添加事件和方法</span>
      <form v-on:submit.prevent="addNewTodo"><!--提交方法-->
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        >
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
export default {
  //将模块引出在其他地方使用
  name: "vue03",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      mess: "vue学习第二天",
      newTodoText: '',
      items: [
        {message:'三国演义'},
        {message:'红楼梦'},
        {message:'水浒传'},
        {message:'西游记'}

      ],
      object:{
           title: 'How to do lists in Vue',
           author: 'Jane Doe',
           publishedAt: '2016-04-10'
      },
      numbers:[1,2,4,5,6,7,8],
      todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
    };
  },
  computed:{
    evenNumbers: function(){
      return this.numbers.filter(
        function (number){
          return number%2 ===0
        }
      )

    }

  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
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