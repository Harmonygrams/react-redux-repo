import { createSlice } from '@reduxjs/toolkit' 
const uiSlice = createSlice({
    name : 'uiSlice', 
    initialState : {
        notification : {
            open : false, 
            message : null, 
            type : null, 
        }
    }, 
    reducers : {
        updateUi : (state, action) => {
            state.notification = {
                open : true, 
                message : action.payload.message, 
                type : action.payload.type
            }
        }, 
        enableUi : (state) => {
            state.notification.open = true
        }        
    }
})
const uiActions = uiSlice.actions
const uiReducers = uiSlice.reducer
export {uiActions, uiReducers}