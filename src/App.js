import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import BugLogo from "../src/assets/logs/BugLogo.svg";
import AppLogo from "../src/assets/logs/AppLogo.svg";
import MileStoneLogo from "../src/assets/logs/MileStoneLogo.svg";
import TimeSheetLogo from "../src/assets/logs/TimeSheetLogo.svg";
import RSSFeedLogo from "../src/assets/logs/RSSFeedLogo.svg";
import DrawerItem from "./components/DrawerItem";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="home-page">
          {" "}
          <div className="app-drawer">
            <img
              src={AppLogo}
              alt="Your SVG"
              style={{ height: "120px", margin: "auto" }}
            />
            <DrawerItem icon={MileStoneLogo} name="Milestone" />
            <DrawerItem icon={BugLogo} name="Bugs" />
            <DrawerItem icon={TimeSheetLogo} name="Timesheet" />
            <DrawerItem icon={RSSFeedLogo} name="Feed" />
          </div>{" "}
          <div className="project-drawer">
            <input title="Search"></input>
            <DrawerItem name="All Projects" />
            <DrawerItem name="Tune Roots" />
            <DrawerItem name="Insolvency" />
            <DrawerItem name="Finance Trip" />
          </div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
