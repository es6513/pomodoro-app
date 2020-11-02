import React from "react";
import { config } from "../../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function NewTask() {
  return <div className={`${ROOT_CLASS}__side__nav__new-task`}>NewTask</div>;
}

export default NewTask;
