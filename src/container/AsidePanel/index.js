import React, { useState } from "react";
import classNames from "classnames";
import PanelMenu from "../../components/PanelMenu";
import MenuItem from "../../components/MenuItem";
import MenuLink from "../../components/MenuLink";
import NewTask from "./views/NewTask";
import TaskLists from "./views/TaskLists";
import NotFound from "../Error";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Icons from "../../components/Icon";

import { config } from "../../config";
const { css } = config;
const { ROOT_CLASS } = css;

const slideNavs = [
  {
    path: "/add",
    iconComponent: Icons.AddWhite,
    component: NewTask,
  },
  {
    path: "/todo",
    iconComponent: Icons.ListWhite,
    component: TaskLists,
  },
];

function AsidePanel() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const asideClass = classNames({
    [`${ROOT_CLASS}__aside-panel`]: true,
    [`${ROOT_CLASS}__aside-panel__collapse`]: isCollapsed,
  });

  return (
    <aside className={asideClass}>
      <button
        onClick={() => setIsCollapsed((prevCollapsed) => !prevCollapsed)}
        className={`${ROOT_CLASS}__aside-panel__toggle-collapse`}
      >
        <Icons.TomatoColor />
        <img
          src={Icons.Arrow}
          alt="arrow"
          className={`${ROOT_CLASS}__aside-panel__arrow`}
          width="20px"
        />
      </button>
      <Router>
        <PanelMenu className={`${ROOT_CLASS}__aside-panel__menu`}>
          {slideNavs.map((nav) => (
            <MenuItem
              key={nav.path}
              className={`${ROOT_CLASS}__aside-panel__menu-item`}
              handelClick={() =>
                setIsCollapsed((prevCollapsed) =>
                  prevCollapsed ? !prevCollapsed : prevCollapsed
                )
              }
            >
              <MenuLink
                to={nav.path}
                activeClassName={`${ROOT_CLASS}__aside-panel__menu-item__active`}
              >
                <nav.iconComponent />
              </MenuLink>
            </MenuItem>
          ))}
        </PanelMenu>

        <div className={`${ROOT_CLASS}__aside-panel__content`}>
          <Switch>
            {slideNavs.map((nav) => (
              <Route key={nav.path} path={nav.path} component={nav.component} />
            ))}
            <Route component={NotFound} />

            <Redirect replace to={slideNavs[0].path} />
          </Switch>
        </div>
      </Router>
    </aside>
  );
}

export default AsidePanel;
