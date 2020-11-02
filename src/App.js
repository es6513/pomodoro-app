import React from "react";
import ModalTimer from "./container/ModalTimer";
import SideNav from "./container/SideNav";
import "./styles/main.scss";

import { config } from "./config";

const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  return (
    <div className={`${ROOT_CLASS}__main__content`}>
      <ModalTimer />
      <SideNav />
    </div>
  );
}

export default App;
