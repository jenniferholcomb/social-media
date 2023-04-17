import React from "react";
import IconImg from "./../img/acct-icon.png";

function ProfileIcon(props) {
  return (
    <React.Fragment>
      <div style={{backgroundColor: props.backgroundColor}} className="ProfileIcon">
        <img src={IconImg} alt="Icon profile" />
      </div>
    </React.Fragment>
  );
}

export default ProfileIcon;