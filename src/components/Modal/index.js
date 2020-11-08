import React from "react";
import { PropTypes } from "prop-types";

function Modal({
  className,
  handelCofirm,
  handleCancel,
  children,
  ...restProps
}) {
  return (
    <div className="modal" {...restProps}>
      <div className="modal-content">
        <div className="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  className: PropTypes.string,
  handelCofirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: "",
  handelCofirm: () => null,
  handleCancel: () => null,
};
