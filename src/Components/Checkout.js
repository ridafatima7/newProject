import React from 'react'
import TNavbar from './TNavbar'
import { FaLocationDot } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const Checkout = () => {
  return (
    <div>
      <TNavbar />
      <section className='container'>
        <div className='cart-container'>
          <div className='checkout-items'>
            <h5>Deliver to</h5>
            <span>Edit</span>    
          </div>  
           <div className='main'>
            <div className='checkout-icons'>
              <FaLocationDot  size={20} style={{color:'#434F7B'}} />
            </div>
             <div className='main-div'>
              <p>Rida Fatima 3962-FBAS/BSSE/F19</p>
              <p>G11 Markaz</p>
             </div>
            </div>  
        </div>
        <div className='cart-container'>
          <div className='checkout-items'>
            <h5>Payment Method</h5>
            <span>Edit</span>    
          </div>  
           <div className='main'>
            <div className='checkout-icons'>
              <FaLocationDot style={{color:'#434F7B'}} size={20} />
            </div>
             <div className='main-div'>
              <p style={{marginTop:'5px'}}>Cash on Delivery</p>
             </div>
            </div>  
        </div>
        <div className='cart-container'>
          <div className='checkout-items'>
            <h5>Promo Code</h5>
            <span style={{marginRight:'35px'}}>Applicable</span>    
          </div>  
           <div className='main'>
            <div className='checkout-icons'>
              <FaLocationDot style={{color:'#434F7B'}} size={20} />
            </div>
             <div className='promo'>
              <p style={{marginTop:'5px'}}>Enter Promo Code</p>
              <h5>Apply</h5>
             </div>
            </div>  
        </div>
        <div className='cart-container'>
          <div className='checkout-items'>
            <h5>Scheduled for</h5>
            <span>Edit</span>    
          </div>  
           <div className='main'>
            <div className='checkout-icons'>
              <FiShoppingBag style={{color:'#434F7B'}} size={20} />
            </div>
             <div className='main-div'>
              <p style={{marginTop:'5px'}}>Now</p>
             </div>
            </div>  
        </div>
      </section>
      {/* <div className='cart-container'>
        <input>Additional Comments</input>
      </div> */}
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
