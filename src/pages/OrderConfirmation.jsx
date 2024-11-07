
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ApiCartContext from "../contexts/ApiCartContext";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function OrderConfirmation() {
    const navigate = useNavigate(); 
  const { orders } = useContext(ApiCartContext);
  const latestOrder = orders[orders.length - 1];

  if (!latestOrder) return <p>No recent order found.</p>;

  const { shippingInfo = {} } = latestOrder; 

  return (
    <div className="max-w-4xl mx-auto p-6">
         <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-500 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> 
          Back
        </button>
      <h2 className="text-2xl font-semibold mb-6">Order Confirmation</h2>
      <p className="mb-4 text-xl text-green-400">Thank you for your purchase! Your order has been successfully placed.</p>

      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <p><strong>Order ID:</strong> {latestOrder.id}</p>
      <p><strong>Date:</strong> {latestOrder.date}</p>
      <ul className="space-y-4 my-4">
        {latestOrder.items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold">Total: ${latestOrder.total.toFixed(2)}</p>

      <h3 className="text-xl font-semibold mt-6">Delivery Details</h3>
      <p>Name: {shippingInfo.name || "N/A"}</p>
      <p>Address: {shippingInfo.address || "N/A"}</p>
      <p>Pincode: {shippingInfo.zip || "N/A"}</p>
      <p>Phone Number: {shippingInfo.phoneNumber || "N/A"}</p>
      <p>City: {shippingInfo.city || "N/A"}</p>

      <Link to="/past-orders">
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
          View Past Orders
        </button>
      </Link>
    </div>
  );
}

export default OrderConfirmation;
