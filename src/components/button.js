import React from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { ReactComponent as TomatoColor } from "../assets/icons/tomato_small_color.svg";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function button({ handleClick }) {
  return (
    <button
      onClick={() => handleClick}
      className={`${ROOT_CLASS}__aside-panel__toggle-collapse`}
    >
      <TomatoColor />
      <Arrow width="1.5rem" className={`${ROOT_CLASS}__aside-panel__arrow`} />
    </button>
  );
}

export default button;
