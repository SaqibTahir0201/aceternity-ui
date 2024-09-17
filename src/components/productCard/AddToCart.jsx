import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 

const AddToCart = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`styles.productCard__btn bg-primary text-primary-content border-none rounded-full px-5 py-2 text-sm font-semibold cursor-pointer transition duration-300 ease-in-out `}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
