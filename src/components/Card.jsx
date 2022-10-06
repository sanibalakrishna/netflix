import React from "react";

function Card(props) {
  return <img src={props.img} className="h-10 w-24 md:h-24 md:w-96 " />;
}

export default Card;
