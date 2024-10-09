import axios from 'axios'
export const login = (data) => {
  return axios.post('https://gitee.com/oauth/token', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
