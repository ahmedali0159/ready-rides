import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div style={{background:"#EC6608", color:'#00305A'}} className={isOpen ? "grid grid-rows-4 text-center items-center font-bold" : "hidden"}
     onClick={toggle}>
       
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/about" className="p-4">
        About Us
      </Link>
      <Link to="/process" className="p-4">
        Process
      </Link>
      <Link to="/contact" className="p-4">
        Contact Us
      </Link>
    </div>
  );
};

export default Dropdown;
