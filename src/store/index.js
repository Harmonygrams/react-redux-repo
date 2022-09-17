import { configureStore } from '@reduxjs/toolkit' 
import {authReducer} from './auth'
import {cartReducer} from './cart-slice'
import {uiReducers } from './ui-slice'
const store = configureStore({
    reducer : {
        auth : authReducer, 
        cart : cartReducer, 
        notifcationUi : uiReducers
    }
})
export default store
