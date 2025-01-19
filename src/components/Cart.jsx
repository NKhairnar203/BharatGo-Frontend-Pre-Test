import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

export const Cart = () => {
  const { isOpen, setIsOpen, orders } = useContext(DataContext);
  const [cartItems, setCartItems] = useState([orders]);

  const [quantity, setQuantity] = useState(1);
  
 
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * quantity,
    0
  );

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Cart Modal */}
      <div
        className={`fixed top-16 right-0 w-80 h-[450px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500"
          >
            ❌
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    ${item.price} × {quantity}
                  </p>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    disabled={quantity == 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
                  >
                    ➖
                  </button>
                  <span className="text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm font-bold ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <p className="text-lg font-semibold ">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button className="w-full bg-green-600 text-white py-2 mt-2 rounded-lg hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
