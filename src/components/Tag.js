import React from "react";
import { useState } from "react";

const Tag = () => {
  const [color, setTagBgColor] = useState();
  const tag = {
    margin:"auto",
    padding:"8px 16px 8px 16px",
    color: "white",
    borderRadius: "16px",
    backgroundColor: "red",
  };
  return (
    <div className="tag" style={tag}>
      <p>IOS</p>
    </div>
  );
};

export default Tag;
