<template>
  <div id="vue">
    {{mess}}
    <div >
    <span>v-model绑定text</span>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
    </div>
    <div>
       <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>  
    </div>
    <div id='example-3'>
      <span>多个复选框绑定在一个数组上</span>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
       <span>单选按钮</span>
        <input type="radio" id="one" value="one" v-model="picked">
        <label for="one">one</label>
        <input type="radio" id="two" value="two" v-model="picked">
        <label for="two">two</label>
        <br/> <span>Picked:{{picked}}</span>
    </div> 
    <div>
       <span>选择框</span>
        <select v-model="selected">
           <option disabled value="">请选择</option>
           <option >A</option>
           <option >B</option>
           <option >C</option>
        </select>
        你的选择：{{selected}}
    </div>
    <div>
       <span>多选择框</span>
        <select v-model="selectedmany" multiple>
           <option disabled value="">请选择</option>
           <option >A</option>
           <option >B</option>
           <option >C</option>
        </select>
        你的选择：{{selectedmany}}
    </div>
    <div>
      <select v-model="selectedfor">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selectedfor }}</span>
      只能输入数字 v-model.number
      <input v-model.number="age" type="number">  
      去空格trim
      <input v-model.trim="msg">
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";

export default {
  //将模块引出在其他地方使用
  name: "vue05",
  data() {
    //data即使不需要传数据，亦必须return,否则报错
    return {
      mess: "vue学习第二天",
      selectedfor: 'A',
      message:"aaa",
      checkedNames:[],
      picked:"",
      selected:"",
      selectedmany:[],
      options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
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