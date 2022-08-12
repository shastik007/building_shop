import axios from 'axios'
import { baseURL, USER_DATA_TOKEN } from '../utils/constants/genaral'
import { localStorageHelper } from '../utils/helpers/localStorageHelper'



const headers = { 'Content-Type': 'application/json' }

const axiosInstance = axios.create({ baseURL, headers })

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const localData = localStorageHelper.get(USER_DATA_TOKEN)
   if (localData) updatedConfig.headers.Authorization = `Bearer ${localData.token}`
   console.log(updatedConfig);
   return updatedConfig
})


export default axiosInstance
