import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import HeadTitle from "../HeadTitle";
import Button from "../Button";

function DoneLightBox({ className, handleDond, handleClose }) {
  const handleConfirm = () => {
    handleDond();
    handleClose();
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [handleClose]);
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
  handleDond: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

DoneLightBox.defaultProps = {
  className: "",
};
