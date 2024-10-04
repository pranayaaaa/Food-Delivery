import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useLocation  } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, isLoggedIn } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const cartIsEmpty = Object.keys(cartItems).length === 0;

  const handleCheckout = () => {
    console.log("User logged in:", isLoggedIn);
    if (!isLoggedIn) {
      alert("Please log in to proceed to checkout.");
      return;
    }
    navigate('/order', { state: { discount } });
  };

  const handleApplyPromoCode = () => {
    const validPromoCodes = {
      'SAVE10': 10,
      'SAVE20': 20,
      'SAVE30': 20,
    };

    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
      alert(`Promo code applied! You get a discount of ₹${(validPromoCodes[promoCode] * getTotalCartAmount()) / 100}`);
    } else {
      alert("Invalid promo code.");
    }
  };

  const totalAmount = getTotalCartAmount();
  const discountAmount = (totalAmount * discount) / 100;
  const discountedTotal = totalAmount - discountAmount;

  return (
    <div className='cart'>
      {cartIsEmpty ? (
        <div className='cart-empty'>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title title">
              <p>Image</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id} className='cart-items-title cart-items-item'>
                    <img src={`${url}/images/${item.image}`} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p 
                      onClick={() => removeFromCart(item._id)} 
                      className='cross'
                    >
                      x
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>₹{totalAmount}</p>
                </div>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{totalAmount === 0 ? 0 : 2}</p>
                </div>
                {discount > 0 && (
                  <div className="cart-total-details">
                    <p>Discount</p>
                    <p>-₹{discountAmount}</p>
                  </div>
                )}
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹{discountedTotal + 2}</b>
                </div>
              </div>
              <button onClick={handleCheckout}>Proceed To Checkout</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>Enter a promocode, if any</p>
                <div className="cart-promocode-input">
                  <input 
                    type="text" 
                    placeholder='Promo Code' 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)} 
                  />
                  <button onClick={handleApplyPromoCode}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
