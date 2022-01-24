import React from "react";

function Container({ name, website, image, likes }) {
  return (
    <div className="resort-card">
      <a href={website}>{name}</a>
      <img src={image} alt={name} />
      <button onClick={likes}>👍 Votes:</button>
      <button onClick={likes}>👎 Votes:</button>
    </div>
  );
}

export default Container;
