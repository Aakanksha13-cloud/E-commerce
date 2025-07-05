import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'; 
import './navbarBelt.css';

const NavbarBelt = () => {
  return (
    <div className="navbar-belt">
      <div className="components">
        <div className="allMenu"><MenuIcon></MenuIcon>
        <div>All</div>
        </div>

        <div className="allMenu">
        <div>Home</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>BestSellers</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>Reels</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>Today's Deal</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>Customer Services</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>New Releases</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>

        <div className="allMenu">
        <div>Fresh</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>


      </div>
    </div>
  )
}

export default NavbarBelt
