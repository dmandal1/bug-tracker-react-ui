import React from "react";
import StatusCard from "../components/StatusCard";
import "./Home.css";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <StatusCard items="12" name="Active" color="red" />
      <StatusCard items="122" name="Fixed" color="blue" />
      <StatusCard items="3" name="Recent" color="grey" />
    </div>
  );
};

export default Home;
