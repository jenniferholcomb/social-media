import React from "react";
import FriendsListItem from "./FriendsListItem";

const friends = [
  { name: "Donec eu orci et", backgroundColor: "#d2c78a"},
  { name: "Donec eu orci et", backgroundColor: "lightgreen"},
  { name: "Donec eu orci et", backgroundColor: "teal"}
];

function Friends() {
  return (
    <React.Fragment>
      <div className="Friends">
        <div className="friends-header">
          Lorem ipsum
        </div>
        {friends.map((friend, index) =>
          <FriendsListItem
            name={friend.name}
            backgroundColor={friend.backgroundColor}
            key={index} 
          />
        )}
      
      </div>
    </React.Fragment>
  );
}

export default Friends;