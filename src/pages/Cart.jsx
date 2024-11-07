
import React, { useContext } from "react";
import ApiCartContext from "../contexts/ApiCartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(ApiCartContext);

  
  const handleUpdateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) return; 
    updateQuantity(bookId, newQuantity);
  };

  
  const formattedTotalPrice = (totalPrice && !isNaN(totalPrice)) ? totalPrice.toFixed(2) : "0.00";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-500 mb-4"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </button>
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty!</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded" />
                  <div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end">
            <p className="text-xl font-semibold">Total Price: ${formattedTotalPrice}</p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
