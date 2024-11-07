import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"; 

const ApiCartContext = createContext();

export const ApiCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on component mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  

  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: item.quantity || 1,
            image: item.image || "fallback-image-url",
            title: item.title || "Untitled",
          },
        ];
      }
    });
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast("Item removed from cart successfully!", { autoClose: 3000 });
  };

  
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

 
  const clearCart = () => {
    setCart([]);
  };

  
  const createOrder = (shippingInfo) => {
    const order = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
      shippingInfo,
    };
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, order];
     
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
    clearCart(); 
  };

  return (
    <ApiCartContext.Provider
      value={{
        cart,
        orders,
        cartCount,
        totalPrice, 
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        createOrder,
      }}
    >
      {children}
    </ApiCartContext.Provider>
  );
};

export default ApiCartContext;
