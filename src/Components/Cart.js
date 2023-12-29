import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {removefromCart} from './CartSlice';
const Cart = () => {
    const cartItems=useSelector(state=>state.carts)
    console.log(cartItems);
    const dispatch=useDispatch();
  return (
    <div>
      <h4>Cart</h4>
      {/* {
         cartItems.map(item=>{
            return (
               <div>
                <img src={item.image} alt='' />
                <h6>{item.name}</h6>
                <button onClick={()=>dispatch(removefromCart({id:item.id}))}>Remove</button>
               </div>
            )
         })
      } */}
    </div>
  )
}

export default Cart
