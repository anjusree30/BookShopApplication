import React, { useContext } from "react";
import ApiCartContext from "../contexts/ApiCartContext";

import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function PastOrders() {
  const navigate = useNavigate();
  const { orders } = useContext(ApiCartContext);

  if (orders.length === 0) {
    return <p className="text-center text-lg font-semibold">No past orders available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-500 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> 
          Back
        </button>
      <h2 className="text-3xl font-semibold text-center mb-8">Past Orders</h2>
      <ul className="space-y-6">
        {orders.map((order) => {
          const { shippingInfo = {}, items = [] } = order; // Safely destructure shippingInfo and items

          return (
            <li key={order.id} className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Order ID: {order.id}</h3>
                <p className="text-lg text-gray-600">Total: <span className="font-semibold text-indigo-600">${order.total.toFixed(2)}</span></p>
              </div>

              <p className="text-sm text-gray-500">Date: {order.date}</p>

              {/* Delivery Details */}
              <div className="mt-4 mb-4">
                <h4 className="font-semibold text-gray-700">Delivery Details:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><strong>Name:</strong> {shippingInfo.name || "N/A"}</p>
                    <p><strong>Phone:</strong> {shippingInfo.phoneNumber || "N/A"}</p>
                  </div>
                  <div>
                    <p><strong>Address:</strong> {shippingInfo.address || "N/A"}</p>
                    <p><strong>City:</strong> {shippingInfo.city || "N/A"}</p>
                    <p><strong>Pincode:</strong> {shippingInfo.zip || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Items Purchased */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Items Purchased:</h4>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p><strong>{item.title}</strong></p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-indigo-600">${item.price.toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PastOrders;
