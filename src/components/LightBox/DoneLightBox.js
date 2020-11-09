import React, { useEffect, useCallback } from "react";
import { PropTypes } from "prop-types";
import HeadTitle from "../HeadTitle";
import Button from "../Button";

function DoneLightBox({ className, handleDone, handleClose }) {
  const handleConfirm = () => {
    handleDone();
    handleClose();
  };

  const handleClick = useCallback(
    (event) => {
      const target = event.target;
      const lightBox = document.querySelector(".pomodoro__light-box");
      if (target === lightBox) handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
  return (
    <div className={className}>
      <div className="light-box-content">
        <div className="light-box-header">
          <HeadTitle headTag="h3">Hooray!</HeadTitle>
        </div>
        <div className="light-box-body">
          <p>You can check this task in done list.</p>
          <br />
          <p>Don’t forget to select next task to continue.</p>
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

export default DoneLightBox;

DoneLightBox.propTypes = {
  className: PropTypes.string,
  handleDone: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

DoneLightBox.defaultProps = {
  className: "",
};
