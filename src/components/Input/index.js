import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames/bind";

function Input({ inputName, className, ...restProps }) {
  return (
    <>
      <input
        name="todoItem"
        type="text"
        className={classNames}
        {...restProps}
      />
    </>
  );
}

export default Input;

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  inputName: "",
  className: "",
};
