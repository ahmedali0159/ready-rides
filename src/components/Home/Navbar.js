import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono" role="navigation">
      <Link to="/" style={{color: '#00305A'}} className="pl-8 text-2xl">
        Ready Rides.
      </Link>
      <div onClick={toggle} className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div style={{color:'#00305A'}} className="pr-8 text-2xl md:block hidden">
        <Link to="/" className="p-4">Home</Link>
        <Link to="/about" className="p-4">About Us</Link>
        <Link to="/process" className="p-4">Process</Link>
        <Link to="/contact" className="p-4">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
