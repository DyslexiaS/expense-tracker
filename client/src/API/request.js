import axios from 'axios'
import { Message } from 'element-ui'

const API_URL = ''
const service = axios.create({
  baseURL: API_URL
})

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.message) {
      Message({
        message: res.message,
        type: res.success ? 'success' : 'error',
        duration: 3 * 1000,
        showClose: true
      })
    }
    return res.data

    // return Promise.reject(res)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
