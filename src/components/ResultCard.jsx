import React from "react";

const ResultCard = (props) => {
  return (
    <div className={`${props.class} + result-box`}>
      <h3>{props.head}</h3>
      <img src={props.img} alt="" />
      <p>{props.para}</p>
    </div>
  );
};

export default ResultCard;
