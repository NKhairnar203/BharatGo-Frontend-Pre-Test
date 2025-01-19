import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";

export const MyOrders = () => {
  const { orders, setOrders } = useContext(DataContext);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMyOrders([orders]);
      setLoading(false);
    }, 1500); // Simulating API delay
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Orders</h1>

      {loading ? (
        <div className="text-center py-10 text-gray-500 animate-pulse">
          Loading orders...
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          No orders found.
        </div>
      ) : (
        <div className="space-y-4">
          {myOrders.map((order) => (
            <div key={order.id} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">Date: {Date.now()}</p>

              <div className="mt-3 text-right font-semibold">
                Total: 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
