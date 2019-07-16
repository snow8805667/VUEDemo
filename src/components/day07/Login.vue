<template>
  <div id="login">
    <vue-Header></vue-Header>
    <div id="inputlogin">
      <div class="username">用户名：</div>
      <div class="inputusername">
        <input type="text" name="userName" value v-model="userName" placeholder="请输入用户名">
      </div><br>
      <div class="password">
        <span>密码：</span>
      </div>
      <div class="inputpassword">
        <input type="password" name="password" value v-model="password" placeholder="请输入密码">
      </div>
      <div>
        <input type="button" value="登录" @click="login">
        <br>
      </div>
      <div>
        登录情况：
        <span style="color:red;font-size:13px;">{{responseResult}}</span>
      </div>
    </div>
    <vue-Footer></vue-Footer>
  </div>
</template>


<script type="text/javascript">
import Vue from "vue";
import vueFooter from "@/components/day07/vueFooter";
import vueHeader from "@/components/day07/vueHeader";
export default {
  //导出组件
  components: { vueFooter, vueHeader },
  //将模块引出在其他地方使用
  name: "Login",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "返回的",
      userName: "",
      password: "",
      responseResult:[],
    };
  },
  methods:{
    login(){
        this.$axios.post('/login',{
          username:this.userName,
          password:this.password,
        }).then(successResponse=>{
             debugger;
             localStorage.setItem("token", successResponse.data.token);
            this.$router.replace({path:'/index'});
        }).catch(failResoponse=>{})
    }

  }
};
</script>
<style scoped>
span {
  width: 100px;
  text-align: left;
}

#inputlogin {
  height: 60%;
  width: 100%;
  font-size: 25px;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
input[type="button"] {
  width: 7em;
  height: 2em;
  color: red;
  background-color: slateblue;
}

.username {
  display: inline;
  width:200px;
  text-align: left;
}
.inputusername {
  display: inline;
}
.password {
  display: inline;
}
.inputpassword {
  display: inline;
}
#login{
  height: 100%;
}
</style>