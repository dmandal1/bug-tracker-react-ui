import React, { useState } from "react";
import AuthPage from "../Auth/AuthPage";
import Home from "../Home";

const InitialPage = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return <div>{isAuthenticated ? <Home /> : <AuthPage />}</div>;
};

export default InitialPage;
