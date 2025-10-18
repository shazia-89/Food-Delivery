import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Food Online</h2>
        <p>
          Choose your favorite food from our menu and get it delivered fast
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;