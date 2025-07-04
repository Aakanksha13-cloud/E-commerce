import { FaSearch,FaShoppingCart } from "react-icons/fa";
import {SiWalmart} from "react-icons/si";
import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="">
        <div className="left"><SiWalmart></SiWalmart></div>
        <div className="right">        
        <div className="sub-left">
          <div>Home</div>
          <div>Shop</div>
          <div>Reels</div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
        <div className="sub-right">
        
           <label htmlFor="Search"><FaSearch></FaSearch></label>
           <input type="Search" placeholder="Search" id="Search"/>
            <div><FaShoppingCart ></FaShoppingCart></div>   
            <div>Profile</div>
        </div>
          
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;