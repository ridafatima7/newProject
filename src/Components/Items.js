import React,{useState} from 'react'
import './TD.css';

const Items = (props) => {
    const [quantity, setQuantity] = useState(1);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);
  const addToCart = () => {
    setShowQuantityButtons(true);
  };
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    else {
      setShowQuantityButtons(false);
    }
  };
  return (
    <>
    <div className='Exclusive_p'>
      <div className='Exclusive_item_p'>
        <img src={props.image} alt='' />
        <p className='Exclusive_itemp'>{props.name}</p>
        {showQuantityButtons ? (
          <div className='quantity-buttons'>
            <button className='button-1' onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button  className='button-2' onClick={increaseQuantity}>+</button>
          </div>
        ) : (
          <div className='I_prices'>
            <div className='Exclusive_old_I'>
              Rs {props.price}
            </div>
            <div className='d-flex'>
              <div className='Exclusive_price-new_I'>
                Rs {props.exclusivePrice}
              </div>
              <div className='addtocard_I' onClick={addToCart}>
                <p>+</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  )
}

export default Items
