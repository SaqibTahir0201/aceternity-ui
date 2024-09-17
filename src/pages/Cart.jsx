import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
