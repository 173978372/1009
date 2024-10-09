<template>
  <div class="flex items-center">
    <a-button @click="fn1" shape="circle" size="small" class="flex justify-center items-center">
      <Icon icon="majesticons:arrow-left" color="" />
    </a-button>
    <div class="text-xl ml-3">创建代码仓库</div>
  </div>
  <div class="w-4/5 flex flex-col gap-4">
    <div>
      <div class="text-xl">所属项目<span class="text-red-600">*</span></div>
      <a-input placeholder="所属项目" v-model:value="data.name" class="w-2/5" />
    </div>
    <div class="flex w-full">
      <div class="w-1/5">
        <div class="text-xl">仓库类型<span class="text-red-600">*</span></div>
        <a-input placeholder="GIT 仓库" value="GIT 仓库" />
      </div>
      <div class="w-4/5">
        <div class="text-xl">仓库名称<span class="text-red-600">*</span></div>
        <a-input
          v-model:value="data.path"
          class="w-full"
          placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
        />
      </div>
    </div>
    <div>
      <div class="text-xl">仓库描述<span class="text-red-600">*</span></div>
      <a-textarea v-model:value="data.description" placeholder="请输入仓库描述" :rows="4" />
    </div>
    <div>
      <div class="text-xl">初始化仓库</div>
      <div class="flex flex-col">
        <a-checkbox>生成 README 文件</a-checkbox>
        <a-checkbox>添加 .gitignore 文件</a-checkbox>
        <a-checkbox class="!text-gray-500"
          >添加分支模型(仓库创建后将根据所选模型创建分支)</a-checkbox
        >
      </div>
    </div>
    <div>
      <div class="text-xl">是否开源</div>
      <div class="flex flex-col">
        <a-radio checked="checked">私有仓库(仅对仓库成员可见，仓库成员可访问仓库。)</a-radio>
        <a-radio>公开仓库</a-radio>
      </div>
    </div>
    <div>
      <a-button size="large" class="bg-black text-white" @click="fn2">完成创建</a-button>
      <a-button size="large" class="ml-2" @click="fn2">取消</a-button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { create } from '@/axios'
let router = useRouter()

let data = ref({
  access_token: '',
  name: '',
  description: '',
  path: '',
  private: false
})
let fn1 = () => {
  router.push('/code')
}
let fn2 = async () => {
  let access_token = await localStorage.getItem('access_token')
  data.value.access_token = access_token
  create(data.value).then((res) => {
    console.log(res)
    router.push('/code')
  })
}
</script>
