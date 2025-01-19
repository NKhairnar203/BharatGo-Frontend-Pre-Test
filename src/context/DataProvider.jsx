import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");
  const [orders, setOrders] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  console.log(orders);
  return (
    <DataContext.Provider
      value={{
        setIsOpen,
        isOpen,
        setSearch,
        search,
        setCategories,
        categories,
        setOrders,
        orders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
