<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1> 
      <router-link to="day01">
        vue学习第一天:了解vue标签和组件
      </router-link>
      <br/><br/>
      <router-link to="day02">
        vue学习第二天:计算属性和方法
      </router-link>
      <br/><br/>
      <router-link :to="{path:'/day02-2',query:{userid:11111}}">
        vue学习第二天:class和style绑定
      </router-link>
      <br/><br/>
      <router-link to="day02-3">
        vue学习第二天:列表渲染
      </router-link>
      <br/><br/>
      <router-link to="day02-4">
        vue学习第二天:事件处理
      </router-link>
      <br/><br/>
       <router-link to="day02-5">
        vue学习第二天:表单输入绑定
      </router-link>
      <br/><br/>
      <router-link to="day02-6">
        vue学习第二天:组件基础
      </router-link>
      <br><br>
      <router-link to="day02-7">
        vue学习第二天:测试练习
      </router-link>
      <br/><br>
      <router-link to="day03-1">
        vue学习第三天:深入了解组件-组件注册
      </router-link>
      <br><br>
      <router-link to="day03-2">
        vue学习第三天:深入了解组件-插槽
      </router-link>
      <br><br>
      <router-link to="day03-3">
        vue学习第三天:深入了解组件-动态组件和异步组件
      </router-link>
      <br><br>
      <router-link to="day03-4">
        vue学习第三天:深入了解组件-处理边界问题
      </router-link>
      <br><br>
       <router-link to="day04-1">
        vue学习第四天:自定义指令
      </router-link>
      <br><br>
       <router-link to="day04-2">
        vue学习第四天:vue过滤器
      </router-link><br><br>
      <router-link to="day05-1">
        vue学习第五天:VueX
      </router-link><br><br>
      <router-link to="day05-2">
        vue学习第五天:VueXDEmo购物车
      </router-link><br><br>
      <router-link :to="{path:'/day06',query:{name:'zmm'}}">
        vue学习第六天:VueRouter
      </router-link><br><br>
      <router-link :to="{path:'/Login'}">
        vue学习第七天:Vue练习单点登录
      </router-link><br><br>
       <router-link :to="{path:'/websocket'}">
        vue学习第八天:Vue webSocket练习
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js study'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
