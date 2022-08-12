import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { LoginRequest } from "../api/authApi";
import { USER_DATA_TOKEN } from "../utils/constants/genaral";
import { localStorageHelper } from "../utils/helpers/localStorageHelper";


export const login = createAsyncThunk(
    'auth/login',
    async (loginData,{rejectWithValue}) => {
        try {
            const response = await LoginRequest(loginData)
            localStorageHelper.save(USER_DATA_TOKEN,{
                ...response.data,
            })
            console.log(response);
            return ''
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)


const authSlice = createSlice({
    name:'auth',
    initialState:localStorageHelper.get(USER_DATA_TOKEN) || {
        role:'',
        token:''
    },
    reducers:{}  
})


export default authSlice