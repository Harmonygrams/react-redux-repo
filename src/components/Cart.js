import React from "react";
import "./Cart.css";
import {useSelector, useDispatch} from 'react-redux'
import {actions as cartActions} from '../store/cart-slice'
const Cart = () => {
  const quantity = useSelector((state) => state.cart.itemList.length)
  const dispatch = useDispatch()
  const showCart = () =>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
