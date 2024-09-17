import { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const storedCart = localStorage.getItem("cart");
  return storedCart ? json.parse(storedCart) : [];
}
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i !== item));
  };

  const getCart = () => cart;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
