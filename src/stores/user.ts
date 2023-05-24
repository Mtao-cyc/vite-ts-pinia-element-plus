import { defineStore } from 'pinia'
import type { UserState } from './types/type'
import { routes } from '@/router/routes';
const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: "", //用户唯一标识token
      menuRoutes: routes, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      buttons: [],
    }
  },
  getters: {},
  actions: {},
}) 
export default useUserStore
