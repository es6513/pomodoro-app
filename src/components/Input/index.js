import React from "react";
import { PropTypes } from "prop-types";
import { ErrorMessage } from "@hookform/error-message";

function Input({ inputName, useFormRef, className, errors, ...restProps }) {
  return (
    <>
      <input
        ref={useFormRef}
        name={inputName}
        type="text"
        className={className}
        {...restProps}
      />

      <ErrorMessage
        errors={errors}
        name={inputName}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="error-message" key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />
    </>
  );
}

export default React.memo(Input);

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object,
  useFormRef: PropTypes.func,
};

Input.defaultProps = {
  inputName: "",
  className: "",
};
