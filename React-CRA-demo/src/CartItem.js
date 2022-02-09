import React from "react";

const CartItem = ({item, price, quantity }) => (
   
    <div>
    <h4>{item}</h4>
    <ul>
      <li>Price: ${price}</li>
      <li>Quantity: {quantity}</li>
      <li>Subtotal: ${price * quantity} </li>
    </ul>
  </div>
    
)

export default CartItem;