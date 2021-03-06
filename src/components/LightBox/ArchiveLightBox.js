import React, { useEffect, useCallback } from "react";
import { PropTypes } from "prop-types";
import HeadTitle from "../HeadTitle";
import Button from "../Button";

function ArchiveLightBox({ className, handleArchive, handleClose }) {
  const handleConfirm = () => {
    handleArchive();
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
          <HeadTitle headTag="h3">Archive Task</HeadTitle>
        </div>
        <div className="light-box-body">
          Are you sure you want to archive this task?
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
            ARCHIVE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveLightBox;

ArchiveLightBox.propTypes = {
  className: PropTypes.string,
  handleArchive: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

ArchiveLightBox.defaultProps = {
  className: "",
};
