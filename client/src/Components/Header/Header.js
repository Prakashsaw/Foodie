import React from "react";
// rafce
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header-container" >
        <div className="header">
          <div className="logo-container">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s"
              alt="Logo Loading"
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
