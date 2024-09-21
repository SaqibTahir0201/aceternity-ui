import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
    <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="container mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <div
                key={`${item.productId}-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="bg-primary flex justify-center items-center w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                   className="bg-primary text-primary-content p-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
