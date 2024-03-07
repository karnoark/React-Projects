import React from "react";
import "./styles.css";
import logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./profileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

// const Header = () => {
//   return (
//     <div className='navbar'>

//     </div>
//   )
// }

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo"></img>
      <div className="search-bar">
        <div className="search-bar-text">Any where</div>
        <div className="search-bar-text">Any week</div>
        <div className="search-bar-text2">Add guests</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="globe-div">
          <LanguageIcon sx={{ fontSize: "1.5rem" }} />
        </div>
        <div className="profile-div">
          {/* following is the simple html, css implementation of drop down menu */}
          {/* <div className='dropdown'>
                    <span>Profile</span>
                    <div className='dropdown-content'>
                        <p>Sign up</p>
                        <p>Log in</p>
                        <p>Airbnb your home</p>
                        <p>Help Center</p>
                    </div>
                </div> */}

          {/* following is the mui component */}
          <BasicMenu />
        </div>
      </div>
        {/* <MobileSearchBar/> */}
      <SimpleBottomNavigation />
    </div>
  );
};

export default Header;
