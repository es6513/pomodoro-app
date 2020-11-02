import React from "react";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function ModalTimer() {
  return <div className={`${ROOT_CLASS}__modal__timer`}>Modal Timer</div>;
}

export default ModalTimer;
