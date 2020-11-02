import React from "react";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function SideNav() {
  return <aside className={`${ROOT_CLASS}__side__nav`}>Side Nav</aside>;
}

export default SideNav;
