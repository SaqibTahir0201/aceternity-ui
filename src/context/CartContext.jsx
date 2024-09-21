import { createContext, useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";  // Make sure you have this import set up correctly

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartFromFirebase();
  }, []);

  const fetchCartFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"));
    const cartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCart(cartItems);
  };

  const addToCart = async (item) => {
    try {
      const docRef = await addDoc(collection(db, "cart"), item);
      setCart((prevCart) => [...prevCart, { id: docRef.id, ...item }]);
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const itemToRemove = cart.find(item => item.productId === productId);
      if (itemToRemove) {
        await deleteDoc(doc(db, "cart", itemToRemove.id));
        setCart((prevCart) => prevCart.filter((i) => i.productId !== productId));
      }
    } catch (error) {
      console.error("Error removing item from cart: ", error);
    }
  };

  const getCart = () => cart;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
