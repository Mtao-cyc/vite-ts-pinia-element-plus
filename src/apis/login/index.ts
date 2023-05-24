import httpRequest from '@/utils/httpRequest'

export const loginAPI = () => {
    return httpRequest({
      url: '/code',
      method:"POST"
    })
  }
  