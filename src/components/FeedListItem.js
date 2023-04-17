import React from "react";
import ProfileIcon from './ProfileIcon';
import PropTypes from 'prop-types';


function FeedListItem(props) {
  return (
    <React.Fragment>
      <div className="FeedListItem">
        <ProfileIcon backgroundColor={props.backgroundColor}/>
        <div className="tweet-contents">
          <div className="tweet-name">{props.name}</div>
          <div className="tweet-body">{props.body}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

FeedListItem.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string
};

export default FeedListItem;