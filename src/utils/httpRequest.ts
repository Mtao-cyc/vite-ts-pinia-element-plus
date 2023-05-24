//进行axios二次封装:使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css"
import useUserStore from '@/stores/user'
const httpInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {},
})

httpInstance.interceptors.request.use((config) => {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  return config
})

//第三步:响应拦截器
httpInstance.interceptors.response.use(res => res.data,
  error => {
    ElMessage({
      type: 'error',
      message:error.response.data.message
    })
    Promise.reject(error)
  }
)
//对外暴露
export default httpInstance