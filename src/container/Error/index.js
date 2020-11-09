import React from "react";
import { Link, Redirect } from "react-router-dom";

const NotFound = () => (
  <div>
    Not Found
    <Link to="/">111</Link>
    <Redirect replace to="/pomodoro-app" />
  </div>
);

export default NotFound;
