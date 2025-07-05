import { FaSearch,FaShoppingCart } from "react-icons/fa";
import {SiWalmart} from "react-icons/si";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftNavLogo">
        <div className="walmart-icon"><SiWalmart></SiWalmart>
        </div>

        <div className="navbarLocation">
          <div className="navbarLocationImg">
          <LocationOnOutlinedIcon className="navbarLocationImgIcon" sx={{fontSize: "22px"}}></LocationOnOutlinedIcon>
          </div>
          <div className="navbarLocationPlace">
            <div className="navbarLocationTop">Delivering to Delhi 110092</div>
            <div className="navbarLocationBottom">Update Loaction</div>
          </div>
        </div>

      </div>

      <div className="navbarSearchBox">
        <div className="navbarSearchDiv">
          <div className="navbarSearchBoxAll">
            <div className="navbarSearchBoxAllText">All</div>
            < ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }}></ArrowDropDownOutlinedIcon>
          </div>
          <input type="text" className="navbarInputSearchBox" placeholder="Search Walmart" id="Search"/>

          <div className="searchIconNavbar"> <label htmlFor="Search" ><FaSearch sx={{fontSize:"26px"}} className="searchIconNavbar"></FaSearch></label>
          </div>
        </div>

        
      </div>
      <div className="rightSideNavbar">
        <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
        <div className="ordersNavbar">
         <div className="reorderTopNavbar">Reorder</div>
        <div className="myItemsNavbar">My Items</div>
       </div> 

       <PersonOutlinedIcon ></PersonOutlinedIcon>
       <div className="ordersNavbar">
         <div className="reorderTopNavbar">Sign In</div>
        <div className="myItemsNavbar">Account</div>
       </div>

      <div className="profile-section">
        <div className="cartNavbar"><FaShoppingCart ></FaShoppingCart><span className="cartTitle">$0.00</span></div>    
      </div>
      
      </div>
    </div>








    // <nav className="navbar">
    //   <div className="">
    //     <div className="left"><SiWalmart></SiWalmart></div>
    //     <div className="right">        
    //     <div className="sub-left">
          
    //     </div>
    //     <div className="sub-right">
        
    //        <label htmlFor="Search"><FaSearch></FaSearch></label>
    //        <input type="Search" placeholder="Search" id="Search"/>
    //         <div><FaShoppingCart ></FaShoppingCart></div>   
    //         <div>Profile</div>
    //     </div>
          
          
    //     </div>
    //   </div>
    // </nav>
  );
}
export default Navbar;