<template>
  <div id="vue">
    <div>{{ message }}</div>
    <el-input type="text" name="Message" v-model="Message" value=""/>{{resultData}}
    <el-button @click="webSocketSend();">发送消息</el-button><el-button @click="webSocketClose();">断开连接</el-button><el-button @click="initWebSocket();">重新连接</el-button>

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
      message: "vue实现webSocket",
      webSocket: null,
      Message:"",
      resultData:""
    };
  },
   created() {
      //页面刚进入时开启长连接
      this.initWebSocket()
   },
    destroyed: function () {
      //页面销毁时关闭长连接
      this.webSocketClose();
    },
    methods: {
      initWebSocket() {
       // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
        const wsUri = "ws://localhost:8081/websocket/DPS007";
        this.webSocket = new WebSocket(wsUri);
        this.webSocket.onopen = this.webSocketOpen;
        this.webSocket.onmessage = this.webSocketMessage;
        this.webSocket.onerror = this.webSocketError;
      },
       webSocketOpen() {
        alert("WebSocket连接成功");
        console.log("WebSocket连接成功");
      },
     webSocketError() {
        console.log("WebSocket连接发生错误");
      },
      webSocketMessage:function(result) {
        //数据接收
        try {
          //具体业务具体解决
          console.log("服务器端返回："+result.data);
          const json = JSON.parse(result.data);
          this.resultData=json;
        } catch (e) {
          console.info(result)
        }
      },
      webSocketSend() {
        //数据发送
        debugger;
        var message=this.Message;
        this.webSocket.send(message);
      },
      webSocketClose() {
        //关闭
        this.webSocket.close();
        console.log("connection closed");
      },
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
</style>