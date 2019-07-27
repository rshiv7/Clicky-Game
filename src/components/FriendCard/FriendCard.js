//sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <div className = "row">
        <div className= "col md 4">
      <img alt={props.image.replace(".jpeg", " ")} src={require("../../images/" + props.image)} />
      </div>
      </div>
    </div>
  </div>
);

export default FriendCard;