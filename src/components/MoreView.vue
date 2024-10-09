<template>
  <div class="flex flex-col justify-center items-center" v-show="show">
    <div><h1 class="text-4xl">欢迎使用代码仓库</h1></div>
    <div class="flex items-center justify-center">
      <h5 class="text-gray-500 w-2/3">
        代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review
        合并请求来审查代码变更,版本发布可以用来标记、发布代码版本。
      </h5>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="/1.svg" alt="" />
        <div>创建代码仓库</div>
        <div class="text-gray-400">浏览、编辑代码以及查看代码提交记录</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="/2.svg" alt="" />
        <div>合并请求</div>
        <div class="text-gray-400">发起合并请求并遂请协作者Review 变更内容</div>
      </div>
      <div><Icon icon="mynaui:arrow-right" /></div>
      <div class="flex flex-col justify-center items-center text-xs">
        <img src="/3.svg" alt="" />
        <div>代码版本</div>
        <div class="text-gray-400">发布、标记代码版本</div>
      </div>
    </div>
    <div>
      <a-button size="large" class="bg-black text-white" @click="fn">创建代码仓库</a-button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'
let show = ref(true)
let router = useRouter()
let fn = () => {
  router.push('/create')
}
onMounted(async () => {
  let access_token = await localStorage.getItem('access_token')
  axios.get('https://gitee.com/api/v5/user/repos', {
    params: {
      access_token: access_token
    }
  })
  console.log(212313)
})
</script>
