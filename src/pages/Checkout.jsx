
import React, { useState, useContext } from "react";
import ApiCartContext from "../contexts/ApiCartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function Checkout() {
  const navigate = useNavigate();
  const { createOrder, totalPrice } = useContext(ApiCartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phoneNumber: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(shippingInfo);  
    navigate("/order-confirmation"); 
  };

  return (
    <div className="max-w-lg mx-auto p-6">
         <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-500 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> 
          Back
        </button>
      <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingInfo.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={shippingInfo.zip}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={shippingInfo.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <p className="text-lg font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
