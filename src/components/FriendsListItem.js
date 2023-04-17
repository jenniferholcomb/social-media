import React from "react";
import ProfileIcon from './ProfileIcon';
import PropTypes from 'prop-types';
import Button from "./Button";


function FriendsListItem(props) {
  return (
    <React.Fragment>
      <div className="FriendsListItem">
        <ProfileIcon backgroundColor={props.backgroundColor}/>
        <div className="tweet-contents">
          <div className="friend-name">{props.name}</div>
          <Button label="Button" />
        </div>
      </div>
    </React.Fragment>
  );
}

FriendsListItem.propTypes = {
  name: PropTypes.string
};

export default FriendsListItem;