import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/" className="text-white">
          <img
            height={100}
            width={100}
            src="https://i.ibb.co/NF83F3g/logo-white.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/pages" className="hover:text-gray-400">
            Pages
          </Link>
          <Link to="/shop" className="hover:text-gray-400">
            Shop
          </Link>
          <Link to="/portfolio" className="hover:text-gray-400">
            Portfolio
          </Link>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link to="/elements" className="hover:text-gray-400">
            Elements
          </Link>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white px-3 py-1 rounded"
            />
            <Link to="/cart" className="hover:text-gray-400">
              CART
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
