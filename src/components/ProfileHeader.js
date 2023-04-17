import React from "react";
import ProfileIcon from "./ProfileIcon";

function ProfileHeader(props) {
  return (
    <React.Fragment>
      <div className="ProfileHeader">
        <div className="banner-area">
          <div className="banner-image"></div>
          <div className="name-icon-area">
            <ProfileIcon color="salmon"/>
            <div className="profile-header-name">{props.name}</div>
          </div>

          <div className="profile-stats-area">
            <div className="profile-stat">
              <div className="stat-title">TWEETS</div>
              <div className="stat-value">12</div>
            </div>
            <div className="profile-stat">
              <div className="stat-title">FOLLOWING</div>
              <div className="stat-value">23</div>
            </div>
            <div className="profile-stat">
              <div className="stat-title">FOLOLOWERS</div>
              <div className="stat-value">3243</div>
            </div>
          </div>
        </div>

        <div className="long-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam et dolore magna aliqu
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileHeader;