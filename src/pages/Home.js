import { Button } from "@mui/base";
import React from "react";
import StatusCard from "../components/StatusCard";
import "./Home.css";
const Home = () => {
  return (
    <div
      style={{
        margin: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          My Bugs
        </p>
        <Button
          variant="contained"
          style={{
            width: "120px",
            background: "red",
            borderRadius: "16px",
            marginLeft: "auto",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Submit Bug
        </Button>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <StatusCard items="12" name="Open" color="red" />
        <StatusCard items="2" name="Critical" color="red" />
        <StatusCard items="3" name="Due Today" color="blue" />
        <StatusCard items="3" name="New" color="grey" />
      </div>
      <p>
        A bug tracker application is a software tool that helps software
        development teams manage and track the progress of reported issues, or
        bugs, in their applications. Bug tracking is an essential part of
        software development, as it allows developers to identify and fix issues
        that can affect the performance, security, and user experience of their
        software. Bug tracker applications typically provide a centralized
        location for team members to report, track, and prioritize bugs. When a
        bug is reported, it is assigned a unique identifier and categorized by
        severity, priority, and other relevant criteria. Team members can then
        track the progress of each bug, including its current status, who is
        assigned to fix it, and any comments or updates. A bug tracker
        application is a software tool that helps software development teams
        manage and track the progress of reported issues, or bugs, in their
        applications. Bug tracking is an essential part of software development,
        as it allows developers to identify and fix issues that can affect the
        performance, security, and user experience of their software. Bug
        tracker applications typically provide a centralized location for team
        members to report, track, and prioritize bugs. When a bug is reported,
        it is assigned a unique identifier and categorized by severity,
        priority, and other relevant criteria. Team members can then track the
        progress of each bug, including its current status, who is assigned to
        fix it, and any comments or updates. A bug tracker application is a
        software tool that helps software development teams manage and track the
        progress of reported issues, or bugs, in their applications. Bug
        tracking is an essential part of software development, as it allows
        developers to identify and fix issues that can affect the performance,
        security, and user experience of their software. Bug tracker
        applications typically provide a centralized location for team members
        to report, track, and prioritize bugs. When a bug is reported, it is
        assigned a unique identifier and categorized by severity, priority, and
        other relevant criteria. Team members can then track the progress of
        each bug, including its current status, who is assigned to fix it, and
        any comments or updates. A bug tracker application is a software tool
        that helps software development teams manage and track the progress of
        reported issues, or bugs, in their applications. Bug tracking is an
        essential part of software development, as it allows developers to
        identify and fix issues that can affect the performance, security, and
        user experience of their software. Bug tracker applications typically
        provide a centralized location for team members to report, track, and
        prioritize bugs. When a bug is reported, it is assigned a unique
        identifier and categorized by severity, priority, and other relevant
        criteria. Team members can then track the progress of each bug,
        including its current status, who is assigned to fix it, and any
        comments or updates. A bug tracker application is a software tool that
        helps software development teams manage and track the progress of
        reported issues, or bugs, in their applications. Bug tracking is an
        essential part of software development, as it allows developers to
        identify and fix issues that can affect the performance, security, and
        user experience of their software. Bug tracker applications typically
        provide a centralized location for team members to report, track, and
        prioritize bugs. When a bug is reported, it is assigned a unique
        identifier and categorized by severity, priority, and other relevant
        criteria. Team members can then track the progress of each bug,
        including its current status, who is assigned to fix it, and any
        comments or updates.
      </p>
    </div>
  );
};

export default Home;
