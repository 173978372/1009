<template>
  <div class="flex">
    <div class="w-1/3 h-screen">
      <a-carousel autoplay>
        <img src="/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="" />
        <img src="/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
        <img src="/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt="" />
      </a-carousel>
    </div>
    <div class="flex flex-col justify-center items-center w-2/3 h-screen">
      <div class="w-1/2">
        <div class="flex flex-col justify-center items-center mb-7">
          <h1>登录，即刻创造您的应用</h1>
        </div>
        <div class="flex flex-col">
          <a-space direction="vertical">
            <a-input class="h-10" placeholder="请输入邮箱" v-model:value="data.username" />
            <a-input-password class="h-10" placeholder="请输入密码" v-model:value="data.password" />
            <a-radio
              >我已阅读并同意<a-button type="link" size="small" class="-ml-2 -mr-2"
                >服务协议</a-button
              >和<a-button type="link" size="small" class="-ml-2 -mr-2">隐私政策</a-button></a-radio
            >
          </a-space>
        </div>
        <div class="w-full mt-5">
          <a-button type="primary" class="w-full" @click="fn1">登录</a-button>
        </div>
        <div class="w-full mt-5 flex justify-center items-center">
          <span class="text-sm">还未注册?</span
          ><a-button type="link" size="small" class="-ml-2 -mr-2">立即注册</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { login } from '@/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let data = ref({
  grant_type: 'password',
  username: '',
  password: '',
  client_id: '154d4c750515aa31b8863f45108722dea107cb514be7650c4400e5726a2cfccd',
  client_secret: '81da09a5e20e38dcad06be999cf9bb505fa9bcbb17c791d61872610142ab5f02',
  scope: 'user_info projects pull_requests issues notes keys hook groups gists enterprises'
})
let fn1 = () => {
  login(data.value).then((res) => {
    console.log(res)
    localStorage.setItem('access_token', res.data.access_token)
    router.push('/')
  })
}
</script>
