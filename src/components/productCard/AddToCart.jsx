import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return <button className="bg-primary text-primary-content p-2 rounded" onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCart;
