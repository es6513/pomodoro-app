import React from "react";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import withAsideLayout from "../../../hoc/withAsideLayout";

const { css } = config;
const { ROOT_CLASS } = css;

function TaskLists() {
  return (
    <div className={`${ROOT_CLASS}__aside-panel__task-lists`}>
      <HeadTitle>TASK LISTS</HeadTitle>
    </div>
  );
}

export default withAsideLayout(TaskLists);
