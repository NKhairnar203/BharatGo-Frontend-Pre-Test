import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const Navbar = () => {
  const { setIsOpen, orders } = useContext(DataContext);
  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="text-2xl text-center font-bold text-emerald-600 cursor-pointer">
            <NavLink to={"/"}>BharatShop</NavLink>
          </span>
          <ul className="hidden md:flex gap-3 text-gray-700 items-center font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-400 font-semibold" : "hover:text-slate-600"
              }
            >
              All Products
            </NavLink>
          </ul>
        </div>

        {/* Right Side (User Info + Links) */}
        <div className="flex items-center gap-6">
          <span className="hidden md:block text-gray-700 font-thin">
            user@example.com
          </span>
          <ul className="hidden md:flex gap-4 text-gray-700 font-semibold">
            <NavLink
              to={"/myorder"}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-semibold" : "hover:text-slate-600"
              }
            >
              My Orders
            </NavLink>

            <NavLink
              to={"/myaccount"}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-semibold" : "hover:text-slate-600"
              }
            >
              My Account
            </NavLink>

            <NavLink
              to={"/cart"}
              onClick={() => setIsOpen(true)}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-semibold" : "hover:text-slate-600"
              }
            >
              Cart {orders.length}
            </NavLink>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};
