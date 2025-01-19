import React, { useState } from "react";

const product = {
  id: 7,
  title: "Air force teguh",
  price: 88,
  description:
    "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
  images: ["https://placeimg.com/640/480/any"],
  creationAt: "2025-01-18T06:33:29.000Z",
  updatedAt: "2025-01-18T17:46:39.000Z",
  category: {
    id: 1,
    name: "Clothes",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
  },
};

const SingleProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Product Card */}
      <div
        className="bg-white p-5 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-lg"
        />
        <h2 className="text-lg font-bold mt-3">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[60%] lg:w-[40%]">
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-500 mt-2">{product.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Category: {product.category.name}
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
