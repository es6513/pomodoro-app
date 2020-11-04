import React from "react";
import { config } from "../config";

const { css } = config;
const { ROOT_CLASS } = css;

function withLayout(Component) {
  const withLayout = (props) => (
    <div className={`${ROOT_CLASS}__aside-panel__layout`}>
      <Component {...props} />
    </div>
  );

  return withLayout;
}

export default withLayout;
