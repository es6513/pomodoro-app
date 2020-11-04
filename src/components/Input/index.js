import React from "react";
import { PropTypes } from "prop-types";

function Input({ inputName, className, ...restProps }) {
  return (
    <>
      <input name="todoItem" type="text" className={className} {...restProps} />
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
