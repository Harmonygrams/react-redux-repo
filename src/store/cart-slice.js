import { createSlice } from '@reduxjs/toolkit' 
import {uiActions} from './ui-slice'
const cartSlice = createSlice({
    name : 'cart', 
    initialState : {
        quantity : 0, 
        itemList : [], 
        showCart : false}, 
    reducers : {
        addToCart : (state, action) => {
            const newItem = action.payload
            const alreadExisting = state.itemList.find(item => item.id === newItem.id)
            //If available, increase just the qty and price of that item
            if(alreadExisting){
                alreadExisting.quantity ++
                alreadExisting.totalPrice += newItem.price
                return 
            }state.itemList.push({
                id : newItem.id, 
                price : newItem.price, 
                quantity : 1, 
                totalPrice : newItem.price, 
                name : newItem.name 
            })
        },  
        removeFromCart : (state, action) => {
            const itemToBeReduced = state.itemList.find(item => item.id === action.payload.id)
            //Check the quantity
            if(itemToBeReduced.quantity === 1){
                state.itemList = state.itemList.filter(item => item.id !== itemToBeReduced.id)
                if(state.itemList.length === 0) state.showCart = !state.showCart
                return
            }
            itemToBeReduced.quantity --
            itemToBeReduced.totalPrice -= itemToBeReduced.price
        }, 
        setShowCart : (state) => {
            state.showCart = !state.showCart
        }
    }
})
const cartReducer = cartSlice.reducer
const actions = cartSlice.actions
export {cartReducer, actions}

//A function that sends the itemlist to the firebase 
const sendDataToDb = async (cart, dispatch) => {
    try{
        const URI = "https://react-redux-db-2d28e-default-rtdb.firebaseio.com/cart.json"
        const response = await fetch(URI, {method : "PUT", body : JSON.stringify(cart)}) 
        dispatch(uiActions.updateUi({
            open : true, 
            message : "Database successfully updated", 
            type : "success"
        }))
    }catch(err){
        dispatch(uiActions.updateUi({
            open : true, 
            message : `Request failed. ${err.message}`,
            type : "error"
        }))
    }
}
export {sendDataToDb};