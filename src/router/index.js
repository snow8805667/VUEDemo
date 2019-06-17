import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueday01 from '@/components/day01/vueday01'
import vue01 from '@/components/day02/vue01'
import vue02 from '@/components/day02/vue02'
import vue03 from '@/components/day02/vue03'
import vue04 from '@/components/day02/vue04'
import vue05 from '@/components/day02/vue05'
import vue06 from '@/components/day02/vue06'
import vue07 from '@/components/day02/vue07'
import vueday0301 from '@/components/day03/vueday0301'
import vueday0302 from '@/components/day03/vueday0302'
import vueday0303 from '@/components/day03/vueday0303'
import vueday0304 from '@/components/day03/vueday0304'
import vueday0401 from '@/components/day04/vueday0401'
import vueday0402 from '@/components/day04/vueday0402'
import vueday0501 from '@/components/day05/vueday0501'
import vueday0502 from '@/components/day05/vueday0502'
import vueday06 from '@/components/day06/vueday06'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day01',
      name: 'vueday01',
      component: vueday01
    },
    {
      path: '/day02',
      name: 'vue01',
      component: vue01
    },{
      path: '/day02-2',
      name: 'vue02',
      component: vue02
    },{
      path: '/day02-3',
      name: 'vue03',
      component: vue03
    },{
      path: '/day02-4',
      name: 'vue04',
      component: vue04
    },{
      path: '/day02-5',
      name: 'vue05',
      component: vue05
    },{
      path: '/day02-6',
      name: 'vue06',
      component: vue06
    },{
      path: '/day02-7',
      name: 'vue07',
      component: vue07
    },{
      path: '/day03-1',
      name: 'vueday0301',
      component: vueday0301
    },{
      path: '/day03-2',
      name: 'vueday0302',
      component: vueday0302
    },{
      path: '/day03-3',
      name: 'vueday0303',
      component: vueday0303
    },{
      path: '/day03-4',
      name: 'vueday0304',
      component: vueday0304
    },{
      path: '/day04-1',
      name: 'vueday0401',
      component: vueday0401
    },{
      path: '/day04-2',
      name: 'vueday0402',
      component: vueday0402
    },{
      path: '/day05-1',
      name: 'vueday0501',
      component: vueday0501
    },{
      path: '/day05-2',
      name: 'vueday0502',
      component: vueday0502
    },{
      path: '/day06',
      name: 'vueday06',
      component: vueday06
    }
  ]
})
