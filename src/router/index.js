import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:()=>import ('@/components/HelloWorld'),
    },{
      path: '/elementUI',
      name: 'elementUI',
      component:()=>import ('@/components/elementUI'),
    },{
      path: '/vuestudy',
      name: 'vuestudy',
      component: ()=>import ('@/components/vuestudy'),
    },
    {
      path: '/day01',
      name: 'vueday01',
      component: ()=>import ('@/components/day01/vueday01'),
    },
    {
      path: '/day02',
      name: 'vue01',
      component: ()=>import ('@/components/day02/vue01'),
    },{
      path: '/day02-2',
      name: 'vue02',
      component: ()=>import ('@/components/day02/vue02'),
    },{
      path: '/day02-3',
      name: 'vue03',
      component: ()=>import ('@/components/day02/vue03'),
    },{
      path: '/day02-4',
      name: 'vue04',
      component: ()=>import ('@/components/day02/vue04'),
    },{
      path: '/day02-5',
      name: 'vue05',
      component: ()=>import ('@/components/day02/vue05'),
    },{
      path: '/day02-6',
      name: 'vue06',
      component: ()=>import ('@/components/day02/vue06'),
    },{
      path: '/day02-7',
      name: 'vue07',
      component: ()=>import ('@/components/day02/vue07'),
    },{
      path: '/day03-1',
      name: 'vueday0301',
      component: ()=>import ('@/components/day03/vueday0301'),
    },{
      path: '/day03-2',
      name: 'vueday0302',
      component: ()=>import ('@/components/day03/vueday0301'),
    },{
      path: '/day03-3',
      name: 'vueday0303',
      component: ()=>import ('@/components/day03/vueday0303'),
    },{
      path: '/day03-4',
      name: 'vueday0304',
      component: ()=>import ('@/components/day03/vueday0304'),
    },{
      path: '/day04-1',
      name: 'vueday0401',
      component: ()=>import ('@/components/day04/vueday0401'),
    },{
      path: '/day04-2',
      name: 'vueday0402',
      component: ()=>import ('@/components/day04/vueday0402'),
    },{
      path: '/day05-1',
      name: 'vueday0501',
      component:  ()=>import ('@/components/day05/vueday0501'),
    },{
      path: '/day05-2',
      name: 'vueday0502',
      component:()=>import ('@/components/day05/vueday0502'),
    },{
      path: '/day06',
      name: 'vueday06',
      component: ()=>import ('@/components/day06/vueday06'),
    },{
      path: '/Login',
      name: 'Login',
      component:  ()=>import ('@/components/day07/Login'),
    },{
      path: '/index',
      name: 'index',
      component:  ()=>import ('@/components/day07/index'),
    },{
      path: '/update',
      name: 'update',
      component: ()=>import ('@/components/day07/update'),
    },{
      path: '/add',
      name: 'add',
      component: ()=>import ('@/components/day07/add'),
    },{
      path: '/websocket',
      name: 'websocket',
      component:()=>import ('@/components/day08/websocket'),
    },{
      path: '/day09',
      name: 'day09',
      component:()=>import ('@/components/day09/layout01'),
    },{
      path: '/day09-2',
      name: 'day09-2',
      component:()=>import ('@/components/day09/layout02'),
    },{
      path: '/day10-1',
      name: 'day10-1',
      component:()=>import ('@/components/day10/elementUIForm'),
    },{
      path: '/day10-2',
      name: 'day10-2',
      component:()=>import ('@/components/day10/elementUIForm2'),
    }

  ]
})
