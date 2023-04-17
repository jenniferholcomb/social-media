import React from "react";
import FeedListItem from "./FeedListItem";
import ProfileIcon from "./ProfileIcon";

const tweets = [
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet."},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nullam"},
];


function Feed() {
  return (
    <React.Fragment>
      <div className="Feed">
        <div className="feed-header">
          <ProfileIcon /> 
          <input type="text" className="feed-input" placeholder="What's happening?" />
        </div>
        {tweets.map((tweet, index) =>
          <FeedListItem
            name={tweet.name}
            body={tweet.body}
            key={index} 
          />
        )}
      
      </div>
    </React.Fragment>
  );
}

export default Feed;

