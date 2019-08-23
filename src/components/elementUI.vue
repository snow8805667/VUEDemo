<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br/>
    <h1 class="vueclass"> 
      <router-link to="day09">
        vue学习第九天:了解vue-elementUI布局
      </router-link>|
      <router-link to="day09-2">
        vue学习第九天(二):了解vue-elementUI布局
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'vuestudy',
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
  float: left;
  font-size: 30px;
  padding-left: 70px;
}
</style>
