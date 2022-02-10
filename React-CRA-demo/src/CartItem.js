import React from "react";
import "./CartItem.css";

const CartItem = ({item, price, quantity }) => (
   
    <div className="CartItem">
    <h4 className="CartItem-title">{item}</h4>
    <ul>
      <li style={{ color: 'magenta', backgroundColor: 'yellow' }}>Price: ${price}</li>
      <li>Quantity: {quantity}</li>
      <li>Subtotal: ${price * quantity} </li>
    </ul>
  </div>
    
)

export default CartItem;