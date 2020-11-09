import React from "react";
import { PropTypes } from "prop-types";
import HeadTitle from "../HeadTitle";
import Button from "../Button";

function LightBox({ className, handleConfirm, handleClose }) {
  return (
    <div className={className}>
      <div className="light-box-content">
        <div className="light-box-header">
          <HeadTitle headTag="h3">Hooray!</HeadTitle>
        </div>
        <div className="light-box-body">
          You can check this task in done list.
          <br />
          Don’t forget to select next task to continue.
        </div>
        <div className="light-box-button-group">
          <Button
            data-size="big"
            data-color="gray"
            data-radius="general"
            handleClick={handleClose}
          >
            CANCEL
          </Button>
          <Button
            data-size="big"
            data-color="primary"
            data-radius="general"
            handleClick={handleConfirm}
          >
            SELECT NEXT TASK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LightBox;

LightBox.propTypes = {
  className: PropTypes.string,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

LightBox.defaultProps = {
  className: "",
};
