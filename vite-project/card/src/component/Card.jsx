// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Name = ({ image, title, description }) => {
  return (
      <div className="card">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
      </div>
  );
};

export default Name;
