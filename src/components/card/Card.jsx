import React from "react";

import "./Card.css";

// Parent Card component that displays all the propert details in card
// This avoid repeating css and code.

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
