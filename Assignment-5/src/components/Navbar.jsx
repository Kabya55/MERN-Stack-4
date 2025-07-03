import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/KabyaLogo3.png";
import { FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cart } = useContext(StoreContext);
  return (
    <nav className="bg-white shadow text-black mr-3 ml-3 px-4 py-4 flex justify-between items-center">
      <div>
        <NavLink to="/">
          <img
            className="cursor-pointer"
            src={logo}
            alt="Logo"
            style={{ width: "70px" }}
          />
        </NavLink>
      </div>
      <ul className="flex justify-between gap-1 md:gap-3 lg:gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `md:font-bold bg-[#20B2AA] rounded p-1 md:p-4 hover:bg-[#008B8B] transition ${
                isActive ? "text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./about"
            className={({ isActive }) =>
              `md:font-bold bg-[#20B2AA] rounded p-1 md:p-4 hover:bg-[#008B8B] transition ${
                isActive ? "text-white" : ""
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => `${isActive ? "text-white" : ""}`}
          >
            <div className="cart_items flex gap-2">
              <FaShoppingCart className="text-2xl fill-[#20B2AA]" />
              <p className="font-bold text-[#20B2AA]">{cart.length}</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
