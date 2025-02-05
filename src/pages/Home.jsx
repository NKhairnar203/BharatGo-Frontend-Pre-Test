import React, { useContext, useEffect, useState } from "react";
import { SortFilterSearch } from "../components/SortFilterSearch";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { DataContext } from "../context/DataProvider";

export const Home = () => {
  const { categories, setCategories, search, setOrders } =
    useContext(DataContext);


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      const fetchApi = async (search, categories) => {
        setLoading(true);
        const res = await fetch(
          categories
            ? `https://api.escuelajs.co/api/v1/categories/${categories}/products/?title=${search}`
            : `https://api.escuelajs.co/api/v1/products/?title=${search}`
        );
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      };
      fetchApi(search, categories);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [categories,search]);



  return (
    <div className="max-w-screen-2xl mx-auto">
      <SortFilterSearch />
      {data.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 px-6 py-4">
          {data.map((ele) => {
            return <ProductCard key={ele.id} product={ele} />;
          })}
        </div>
      ) : (
        <div className="">
          <div className="flex w-full h-full flex-col items-center justify-center text-gray-500 text-lg font-semibold py-10">
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m0 0l2 2m-2-2l-2 2m2-2l-2-2"
              />
            </svg>
            No data available
          </div>
        </div>
      )}
    </div>
  );
};
