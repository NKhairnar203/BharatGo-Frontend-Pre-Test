import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const ProductCard = ({ product }) => {
  const {  setOrders } =
    useContext(DataContext);
  const [next, setNext] = useState(0);
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="w-full h-48 object-cover relative">
        <div className="flex">
         
          <img
            className="w-full h-48 object-cover "
            src={product.images[next]}
            alt={product.title}
          />
          
        </div>
        <div className="absolute top-2 right-0">
          <button
            disabled={next === 0}
            onClick={() => setNext(next - 1)}
            className={` rounded-full w-7 h-7 mr-1 text-white ${
              next == 0 ? "bg-slate-300" : "bg-slate-500"
            }`}
          >
            {"<"}
          </button>
          <button
            disabled={product.images.length === next}
            onClick={() => setNext(next + 1)}
            className={` rounded-full  w-7 h-7 mr-1 text-white ${
              product.images.length === next ? "bg-slate-300" : "bg-slate-500"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-1">Short product description.</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-700">
            {product.price}$
          </span>
          <button
            onClick={() => setOrders(product)}
            className="px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-emerald-600 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
