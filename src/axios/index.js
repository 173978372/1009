import axios from 'axios'
export const login = (data) => {
  return axios.post('https://gitee.com/oauth/token', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export const create = (data) => {
  return axios.post('https://gitee.com/api/v5/user/repos', data)
}
export const getData = (access_token) => {
  return axios.get('https://gitee.com/api/v5/user/repos', {
    params: {
      access_token: access_token
    }
  })
}
export const getUser = (access_token) => {
  return axios.get('https://gitee.com/api/v5/user', {
    params: {
      access_token: access_token
    }
  })
}
