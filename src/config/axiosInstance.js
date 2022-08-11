import axios from 'axios'
import { baseURL } from '../utils/constants/genaral'
import store from '../store'


const headers = { 'Content-Type': 'application/json' }

const axiosInstance = axios.create({ baseURL, headers })

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
//    const {
//       auth: { token },
//    } = store.getState()
//    if (token) updatedConfig.headers.Authorization = `Bearer ${token}`

   return updatedConfig
})


export default axiosInstance
