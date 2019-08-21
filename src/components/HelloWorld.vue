<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br/>
    <h1 class="vueclass"> 
      <router-link to="/vuestudy">
        vue基础知识学习
      </router-link><br/><br/>
       <router-link to="day01">
        vue-elementUI基础知识学习
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
html{
  font-size:12px;
}
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
.vueclass{
  font-size: 30px;
}
</style>
