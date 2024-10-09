<template>
  <a-layout class="h-screen w-screen">
    <a-layout-sider width="40" class="!bg-[#f8f6fc]" style="border-right: 1px solid #c9ceda">
      <div class="flex flex-col h-screen justify-around">
        <div
          @click="fn1(item)"
          v-for="(item, index) in arr"
          class="flex flex-col justify-center items-center"
        >
          <Icon :icon="item.icon" />
          <div class="text-xs">{{ item.string }}</div>
        </div>
        <div
          @click="fn2(item.name)"
          v-for="(item, index) in arr1"
          class="flex flex-col justify-center items-center"
        >
          <Icon :icon="item.icon" />
        </div>
      </div>
    </a-layout-sider>
    <div>
      <div
        :style="{
          height: '100vh',
          position: 'relative'
        }"
      >
        <a-drawer
          :title="name"
          placement="left"
          width="160px"
          :closable="false"
          :open="open"
          :get-container="false"
          :style="{ position: 'absolute' }"
          @close="onClose"
        >
          <div class="flex gap-4 flex-col">
            <div class="flex items-center">
              <div>
                <Icon icon="mdi:user-outline" />
              </div>
              <div @click="fn3">个人账户设置</div>
            </div>
            <div class="flex items-center">
              <div>
                <Icon icon="icon-park-outline:shopping" />
              </div>
              <div @click="fn3">服务订阅</div>
            </div>
            <div class="flex items-center">
              <div>
                <Icon icon="mdi:user-outline" />
              </div>
              <div @click="fn3">邀请成员</div>
            </div>
            <div class="flex items-center">
              <div>
                <Icon icon="clarity:switch-line" />
              </div>
              <div @click="fn3">切换语言</div>
            </div>
            <div class="flex items-center">
              <div>
                <Icon icon="fluent-mdl2:issue-tracking-mirrored" />
              </div>
              <div @click="fn3">工单中心</div>
            </div>
            <div class="flex items-center">
              <div>
                <Icon icon="dashicons:update" />
              </div>
              <div @click="fn3">更新日志</div>
            </div>
            <div class="flex items-center">
              <div><Icon icon="iconamoon:exit-thin" /></div>
              <div @click="fn3">退出</div>
            </div>
          </div>
        </a-drawer>
      </div>
    </div>
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
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { getUser } from '@/axios'
let router = useRouter()
let str = ref('代码仓库')
const open = ref(false)
let fn1 = (item) => {
  str.value = item.name
  router.push(`${item.scr}`)
}
let name = ref('')
let fn2 = async (item) => {
  let access_token = await localStorage.getItem('access_token')
  if (item == '用户信息') {
    console.log(21)
    open.value = true
    getUser(access_token).then((res) => {
      console.log(res.data)
      name.value = res.data.name
    })
  }
}
const onClose = () => {
  open.value = false
}
let fn3 = () => {
  open.value = false
}
const arr = [
  {
    icon: 'icon-park-outline:workbench',
    string: '工作台',
    name: '工作台',
    scr: '/'
  },
  {
    icon: 'eos-icons:project-outlined',
    string: '项目',
    name: '项目',
    scr: '/'
  },
  {
    icon: 'hugeicons:artificial-intelligence-06',
    string: 'Al',
    name: 'Al',
    scr: '/'
  },
  {
    icon: 'fluent-mdl2:issue-tracking-mirrored',
    string: '事项',
    name: '事项',
    scr: '/'
  },
  {
    icon: 'ic:baseline-code',
    string: '代码',
    name: '代码仓库',
    scr: '/code'
  },
  {
    icon: 'icon-park-outline:ad-product',
    string: '制品',
    name: '制品',
    scr: '/'
  },
  {
    icon: 'ic:baseline-insights',
    string: '洞察',
    name: '洞察',
    scr: '/'
  },
  {
    icon: 'octicon:book-24',
    string: '知识',
    name: '知识',
    scr: '/'
  },
  {
    icon: 'mdi:automatic',
    string: '自动化',
    name: '自动化',
    scr: '/'
  }
]
const arr1 = [
  {
    icon: 'mdi:user-outline',
    name: ''
  },
  {
    icon: 'ci:more-grid-big',
    name: ''
  },
  {
    icon: 'mdi:bell-outline',
    name: ''
  },
  {
    icon: 'uil:setting',
    name: ''
  },
  {
    icon: 'ph:question-duotone',
    name: ''
  },
  {
    icon: 'mingcute:user-4-fill',
    name: '用户信息'
  }
]
</script>
