<template>
  <div class="flex items-center">
    <a-button @click="fn1" shape="circle" size="small" class="flex justify-center items-center">
      <Icon icon="majesticons:arrow-left" color="" />
    </a-button>
    <div class="text-xl ml-3">创建代码仓库</div>
  </div>
  <div>
    <div>
      <div class="text-xl">所属项目<span class="text-red-600">*</span></div>
      <a-input placeholder="所属项目" v-model:value="name" class="w-1/5" />
    </div>
    <div class="text-xl">仓库类型<span class="text-red-600">*</span></div>
    <a-input placeholder="GIT 仓库" value="GIT 仓库" class="w-1/6" />
    <div class="text-xl">仓库名称<span class="text-red-600">*</span></div>
    <a-input
      v-model:value="path"
      placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
    />
    <a-textarea v-model:value="description" placeholder="请输入仓库描述" :rows="4" />
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// import axios from 'axios'
let router = useRouter()
let name = ref('')
let description = ref('')
let path = ref('')
let fn1 = () => {
  router.push('/code')
}
</script>
