import React from 'react'
import TNavbar from './TNavbar'

const Checkout = () => {
  return (
    <div>
      <TNavbar />
      <section className='container '>
        <div className='cart-container' style={{backgroundImage:'url("/Images/texture.avif")',borderRadius:"15px",backgroundRepeat:'none'}}>
           <div className='cart-checkout'>
              <div className='cart-subtotal'>
              <h5>Sub-Total</h5>
              <h5>Rs 4560</h5>
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

export default Checkout
