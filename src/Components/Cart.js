import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removefromCart } from './CartSlice';
import {  Subtotal } from './CartSlice';
import { addtoCart } from './CartSlice';
import { RxCross2 } from "react-icons/rx";
import TNavbar from "../Components/TNavbar";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = (props) => {
  const cartItems = useSelector(state => state.cart);
  const subtotal = useSelector(state => state.cart)
  console.log(subtotal);
  console.log(cartItems.carts);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addtoCart(item));
  };
  useEffect(() => {
    dispatch(Subtotal());
  }, [dispatch]);
  return (
    <div>
      <TNavbar />
      <div className='container pt'>
        {
          cartItems.carts.map(item => {
            return (
              <div className='cart-container '>
                <div className='cart-div1'>
                  <div>
                    <div className='image-div'>
                      <img src={item.image} alt='' />
                    </div>
                  </div>
                  <div>
                    <div className='cart-div2'>
                      <div className='Item-info'>
                        <h5>{item.name}</h5>
                        <RxCross2 className='cross' size={24} />
                      </div>
                      <div className='cart-quantity'>
                        <div>
                          <div className='cart-buttons'>
                            {item.qty > 1 ? (
                              <button onClick={() => dispatch(removefromCart({ id: item.id }))} className='cart-button-1'>
                                -
                              </button>
                            ) : (
                              <button onClick={() => dispatch(removefromCart({ id: item.id }))} className='cart-button-1'>
                                <RiDeleteBin6Line />
                              </button>
                            )}
                            <span>{item.qty}</span>
                            <button onClick={(e) => addToCart(item)} className='cart-button-2'>+</button>
                          </div>
                        </div>
                        <div className='cart-price'>
                          <h6>Rs {item.price}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <section className='container '>
        <div className='cart-container' style={{ backgroundImage: 'url("/Images/texture.avif")', borderRadius: "15px", backgroundRepeat: 'none' }}>
          <div className='cart-checkout'>
            <div className='cart-subtotal'>
              <h5>Sub-Total</h5>
              <h5>{subtotal.subtotal}</h5>
            </div>
            <div>
              <div className='cart-subtotal'>
                <h5>Delivery Charges</h5>
                <h5>Free Delivery</h5>
              </div>
              <div className='cart-subtotal'>
                <h5>Total</h5>
                <h5>Rs 4560</h5>
              </div>
              <div></div>
              <button className='checkout-button'>CHECKOUT</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
