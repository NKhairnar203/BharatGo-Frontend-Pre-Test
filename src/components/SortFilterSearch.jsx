import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

export const SortFilterSearch = () => {
  const { categories, setCategories } = useContext(DataContext);
  const [category, setCategory] = useState([]);

  const { setSearch, search } = useContext(DataContext);
  // const [search,setSearch] = useState("")

  // console.log(categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [categories]);
// console.log(category)
  
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <div className="flex justify-evenly items-center p-4">
        <div className="flex items-center ">
          <select
            name="categories"
            id="categories"
            className="border border-green-500 outline-none py-2 px-4 pr-6 rounded-md bg-white 
            shadow-md text-gray-700 cursor-pointer hover:border-green-700 transition-all duration-300"
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="" disabled selected className="text-gray-500">
              -- Sort By Categories --
            </option>
            {category.map((ele) => (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product..."
            className="w-full max-w-md px-4 py-2 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center">
          <select
            name="price"
            id="price"
            className="border border-green-500 outline-none py-2 px-4 pr-6 rounded-md bg-white shadow-md text-gray-700 cursor-pointer hover:border-green-700 transition-all duration-300"
          >
            <option value="" disabled selected className="text-gray-500">
              -- Sort By Price --
            </option>
            <option
              value="option1"
              className="text-gray-700 hover:bg-green-100"
            >
              Option 1
            </option>
            <option
              value="option2"
              className="text-gray-700 hover:bg-green-100"
            >
              Option 2
            </option>
            <option
              value="option3"
              className="text-gray-700 hover:bg-green-100"
            >
              Option 3
            </option>
            <option
              value="option4"
              className="text-gray-700 hover:bg-green-100"
            >
              Option 4
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
