import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  useSelector(state=>console.log(state.cart))
  return (
    <div className="wrapper">
      <div>
        <div className="cart-page-container">
          <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-item">
              <img src="Image path" alt="Image Title" />
              <div className="cart-item-details">
                <h3>Image title</h3>
                <p>Price: $200</p>
                <div>
                  <input type="number" min="1" />
                  <button>Update</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <p>Total: $200</p>
          </div>
          <button className="back-button">Back To Home</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
