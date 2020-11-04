import React from "react";
import ModalTimer from "./container/ModalTimer";
import AsidePanel from "./container/AsidePanel";
import "./styles/main.scss";

import { config } from "./config";

const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  return (
    <div className={`${ROOT_CLASS}`}>
      <ModalTimer />
      <AsidePanel />
    </div>
  );
}

export default App;
