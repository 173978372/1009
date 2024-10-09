<template>
  <div class="flex justify-between">
    <div class="w-full">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    </div>
    <div class="flex items-center">
      <a-button size="large" class="bg-black text-white" @click="fn2">创建代码仓库</a-button>
    </div>
  </div>
  <component :is="com"></component>
</template>
<script setup>
import { ref, watch } from 'vue'
const current = ref(['zui'])
import ZuiView from '@/components/ZuiView.vue'
import MoreView from '@/components/MoreView.vue'
import OpenView from '@/components/OpenView.vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let com = ref(ZuiView)
watch(current, (newValue, oldValue) => {
  fn1()
})
let fn2 = () => {
  router.push('/create')
}
let fn1 = () => {
  console.log(current.value[0])
  switch (current.value[0]) {
    case 'zui':
      com.value = ZuiView
      break
    case 'more':
      com.value = MoreView
      break
    case 'open':
      com.value = OpenView
      break

    default:
      break
  }
}

const items = ref([
  {
    key: 'zui',
    label: '最近访问',
    title: '最近访问'
  },
  {
    key: 'more',
    label: '全部仓库',
    title: '全部仓库'
  },
  {
    key: 'open',
    label: '开源仓库',
    title: '开源仓库'
  }
])
</script>
