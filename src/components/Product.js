import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { actions as cartActions } from '../store/cart-slice'
import "./Product.css"
const Product = ({ name, id, imgURL, price }) => {
  const itemList = useSelector(state => state.cart.itemList)
  console.log(itemList)
  const dispatch = useDispatch() 
  const addToCart = () => {dispatch(cartActions.addToCart({price, id, name}))}
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
