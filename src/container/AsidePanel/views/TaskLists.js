import React from "react";
import { config } from "../../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function TaskLists() {
  return (
    <div className={`${ROOT_CLASS}__side__nav__task-lists`}>TaskLists</div>
  );
}

export default TaskLists;
