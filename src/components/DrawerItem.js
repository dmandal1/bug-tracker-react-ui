import "./Draweritem.css";
import React from "react";
const DrawerItem = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {" "}
      {props.icon != null ? (
        <img src={props.icon} alt="Your SVG" width={"30px"} height="30px" />
      ) : (
        <div></div>
      )}
      <p className="drawer-item" style={{ paddingLeft: "16px" }}>
        {props.name}
      </p>
    </div>
  );
};

export default DrawerItem;
