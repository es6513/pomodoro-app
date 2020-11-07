import React from "react";
import { PropTypes } from "prop-types";
import Icons from "../../components/Icon";

function TaskInfo({
  className,
  handelCLick,
  children,
  isDone,
  isCurrent,
  ...resrProps
}) {
  return (
    <div className={className} onClick={handelCLick} {...resrProps}>
      {children}
      <div
        className={`task-info--prefix task-info--prefix-${
          isDone ? "done" : isCurrent ? "current" : null
        }`}
      >
        {isDone ? (
          <Icons.Complete width="15" />
        ) : isCurrent ? (
          <Icons.TomatoColor width="10" />
        ) : null}
      </div>
    </div>
  );
}

export default TaskInfo;

TaskInfo.propTypes = {
  className: PropTypes.string,
  handelCLick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isDone: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

TaskInfo.defaultProps = {
  className: "",
  handelCLick: () => null,
};
