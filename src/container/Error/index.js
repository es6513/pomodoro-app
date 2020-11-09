import React from "react";
import { Redirect } from "react-router-dom";

const NotFound = () => (
  <div>
    <Redirect replace to="/pomodoro-app" />
  </div>
);

export default NotFound;
