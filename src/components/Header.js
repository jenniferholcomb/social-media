import React from "react";
import Button from './Button';
import SearchBar from "./SearchBar";

function Header() {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="header-button-area">
          <Button label="Home" />
          <Button label="Notifications" />
          <Button label="Messages" />

        </div>
        <div>
          <SearchBar />
          <Button label="Tweet" round="true" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;