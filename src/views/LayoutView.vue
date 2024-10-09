<template>
  <a-layout class="h-screen w-screen">
    <a-layout-sider width="40" class="!bg-[#f8f6fc]" style="border-right: 1px solid #c9ceda">
      <div class="flex flex-col h-screen justify-around">
        <div
          @click="fn1(item.name)"
          v-for="(item, index) in arr"
          class="flex flex-col justify-center items-center"
        >
          <Icon :icon="item.icon" />
          <div class="text-xs">{{ item.string }}</div>
        </div>
      </div>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="!h-[30px] !bg-white">
        <div class="flex items-center w-full h-[30px] -ml-11">
          {{ str }}
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-content class="!p-[10px]">
          <RouterView></RouterView>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
let str = ref('工作台')
let fn1 = (item) => {
  console.log(item)
  str.value = item
}
const arr = [
  {
    icon: 'icon-park-outline:workbench',
    string: '工作台',
    name: '工作台'
  },
  {
    icon: 'eos-icons:project-outlined',
    string: '项目',
    name: '项目'
  },
  {
    icon: 'hugeicons:artificial-intelligence-06',
    string: 'Al',
    name: 'Al'
  },
  {
    icon: 'fluent-mdl2:issue-tracking-mirrored',
    string: '事项',
    name: '事项'
  },
  {
    icon: 'ic:baseline-code',
    string: '代码',
    name: '代码仓库'
  },
  {
    icon: 'icon-park-outline:ad-product',
    string: '制品',
    name: '制品'
  },
  {
    icon: 'ic:baseline-insights',
    string: '洞察',
    name: '洞察'
  },
  {
    icon: 'octicon:book-24',
    string: '知识',
    name: '知识'
  },
  {
    icon: 'mdi:automatic',
    string: '自动化',
    name: '自动化'
  },
  {
    icon: 'mdi:user-outline',
    string: '',
    name: ''
  },
  {
    icon: 'ci:more-grid-big',
    string: '',
    name: ''
  },
  {
    icon: 'mdi:bell-outline',
    string: '',
    name: ''
  },
  {
    icon: 'uil:setting',
    string: '',
    name: ''
  },
  {
    icon: 'ph:question-duotone',
    string: '',
    name: ''
  },
  {
    icon: 'mingcute:user-4-fill',
    string: '',
    name: ''
  }
]
</script>
