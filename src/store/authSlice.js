import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { LoginRequest ,signUpRequest } from "../api/authApi";
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
            return response.data
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)



export const signUp = createAsyncThunk(
    'auth/signUp',
    async (loginData,{rejectWithValue}) => {
        try {
            const response = await signUpRequest(loginData)
            localStorageHelper.save(USER_DATA_TOKEN,{
                ...response.data,
            })
            console.log(response);
            return response.data
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
    reducers:{
        logout:(state,actions) => {
            localStorageHelper.delete(USER_DATA_TOKEN)
            state = {
                role:'',
                token:''
            }
        }
    },
    extraReducers:{
        [login.fulfilled]:(state,{payload}) => {
           state = payload
        },
        [signUp.fulfilled]:(state,{payload}) => {
            state = payload
        }
    }  
})


export default authSlice