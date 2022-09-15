import { createSlice } from '@reduxjs/toolkit' 
const authSlice = createSlice({
    name : 'auth', 
    initialState : {isLoggedIn : false}, 
    reducers : {
        login : (state) => {state.isLoggedIn = true}, 
        logout : (state) => {state.isLoggedIn = false}
    }
})
const authReducer = authSlice.reducer
const actions = authSlice.actions
export {authReducer, actions}