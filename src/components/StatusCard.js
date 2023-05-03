import React from "react";
import './StatusCard.css'
const StatusCard = (props) => {
  return (
    <div
      className="status-card"
      style={{
        background: props.color,
      }}
    >
      <h1>{props.items}</h1>
      <p>{props.name}</p>
    </div>
  );
};

export default StatusCard;
