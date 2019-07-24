import React from "react";
import showIcon from "../img/list-icon-min.png";

const CharacterCard = props => {
  const name = props.chaDet;
  return (
    <div className="profile_card" id={props.chaId}>
      <div className="profile_image">
        <img src={props.imgLink} alt={name} />
      </div>
      <div className="profile_content">
        <h3>{name}</h3>
        <a href="#" className="read_more">
          <img src={showIcon} />
          &nbsp;Show More
        </a>
      </div>
    </div>
  );
};

export default CharacterCard;
