<template>
  <div id="vue">
    {{message}}
    <div>
      <el-button-group>
          <el-button v-for='(btn,index) in btnGroup' :key="index" :class="{active:btn.disabled}" @click="change(index)"> 
            {{btn.name}}
          </el-button>
      </el-button-group>
    </div>
    <div>
      <component :is='currentCom'></component>没有缓存<!--currentCom的意思时指定组件的名称-->
    </div>
    <div>
      <keep-alive><!--缓存当前组件的状态 不加不会缓存-->
        <component :is='currentCom'></component><!--currentCom的意思时指定组件的名称-->
      </keep-alive>
      有缓存
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import child1 from "@/components/day03/child1";
import child2 from "@/components/day03/child2";
import child3 from "@/components/day03/child3";
// 获得这个实例上的属性
export default{
  //将模块引出在其他地方使用
  name: "vue0303",
  components:{
    "child1":child1,
    "child2":child2,
    "child3":child3
  },
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      message: "vue学习第三天-动态组件和异步组件",
      btnGroup:[
        {name:'child1',disabled:true},
        {name:'child2',disabled:false},
        {name:'child3',disabled:false},
      ],
      currentCom:'child1'
    };
  },
  methods:{
    change(index){
      this.btnGroup[0].disabled=false;
      this.btnGroup[1].disabled=false;
      this.btnGroup[2].disabled=false;
      this.btnGroup[index].disabled=true;
      this.currentCom = 'child'+(index+1);//组件新的命名
    }

  }
}
</script>
<style scoped>

.active{
  background-color: red;
}
</style>