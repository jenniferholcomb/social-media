import React from "react";
import FeedListItem from "./FeedListItem";
import ProfileIcon from "./ProfileIcon";

const tweets = [
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam", backgroundColor: "#d2c78a"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur", backgroundColor: "#d2c78a"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet.", backgroundColor: "teal"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing", backgroundColor: "#907a4a"},
  { name: "Lorem Ipsum", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nullam", backgroundColor: "#d2c78a"},
];


function Feed() {
  return (
    <React.Fragment>
      <div className="Feed">
        <div className="feed-header">
          <ProfileIcon backgroundColor="maroon"/> 
          <input type="text" className="feed-input" placeholder="What's happening?" />
        </div>
        {tweets.map((tweet, index) =>
          <FeedListItem
            name={tweet.name}
            body={tweet.body}
            backgroundColor={tweet.backgroundColor}
            key={index} 
          />
        )}
      
      </div>
    </React.Fragment>
  );
}

export default Feed;

