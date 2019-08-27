<template>
  <div id="vue">
    {{message}}
    <div>
      <span>InputNumber 计数器</span>
      <br />
      <br />
      <el-input-number v-model="num" @change="handelchange" :min="1" :max="10" label="描述文字"></el-input-number>
      <el-input-number
        v-model="num"
        @change="handelchange"
        :min="1"
        :max="10"
        label="描述文字"
        :disabled="true"
      ></el-input-number>
      <el-input-number
        v-model="num"
        @change="handelchange"
        :min="1"
        :max="10"
        label="描述文字"
        :step="2"
      ></el-input-number>
      <!--设置步长-->
      <el-input-number v-model="num" :precision="2" :min="1" :max="10" label="描述文字" :step="0.1"></el-input-number>
      <!--precision 的值必须是一个非负整数，并且不能小于 step 的小数位数-->

      <el-input-number v-model="num1" controls-position="right" :min="1" :max="10"></el-input-number>
      <!---->
    </div>
    <div>
      <span>select 选择器可以搜索</span>
      <br />
      <br />
      <el-select v-model="value" placeholder="请选择" filterable>
        <el-option v-for="item in data" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>有禁用状态的选项：
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></el-option>
      </el-select>选择器不可用：
      <el-select v-model="value" placeholder="请选择" disabled>
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></el-option>
      </el-select>

      包含清空状态的选择器：
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></el-option>
      </el-select><br/>

      包含多选状态的选择器：
      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></el-option>
      </el-select>

      包含多选状态带个数的选择器：
      <el-select v-model="value2" multiple collapse-tags placeholder="请选择">
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        ></el-option>
      </el-select>

      自定义选择器：
      <el-select v-model="value3" placeholder="请选择">
        <el-option
          v-for="item in data"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
        >
        <span style="float:left">{{item.label}}</span>
        <span style="float:right">{{item.value}}</span>
        </el-option>
      </el-select><br/>

      分组，热门城市选择器：
      <el-select v-model="value4" placeholder="请选择">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        >
        </el-option>
        </el-option-group>
      </el-select>
    </div>
    <div>
      <span>级联选择器</span>
      默认click触发菜单：
      <el-cascader v-model="value" @change="handelchange" :options="options1">



      </el-cascader>

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
      message: "vue表单元素2",
      num: "1",
      num1: "2",
      data: [
        { value: "1", label: "詹姆斯" },
        { value: "2", label: "韦德", disabled: true },
        { value: "3", label: "戴维斯" },
        { value: "4", label: "保罗乔治" },
        { value: "5", label: "比斯利" },
        { value: "6", label: "哈登" },
        { value: "7", label: "杜兰特" }
      ],
      options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      value:"",
      value1:"",
      value2:"",
      value3:"",
      value4:"",
       options1: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    };
  },
  methods: {
    handelchange(value) {
      console.log(value);
    }
  }
};
</script>
<style>
</style>