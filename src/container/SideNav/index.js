import React, { useState } from "react";
import classNames from "classnames";
import NavMenu from "../../components/NavMenu";
import NavItem from "../../components/NavItem";
import NewTask from "./views/NewTask";
import TaskLists from "./views/TaskLists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from "./icons";
import { config } from "../../config";
const { css } = config;
const { ROOT_CLASS } = css;

const slideNavs = [
  {
    path: "/add",
    iconSrc: Icons.AddWhite,
    component: NewTask,
  },
  {
    path: "/todo",
    iconSrc: Icons.ListWhite,
    component: TaskLists,
  },
];

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const asideClass = classNames({
    [`${ROOT_CLASS}__side-nav`]: true,
    [`${ROOT_CLASS}__side-nav__collapse`]: isCollapsed,
  });

  return (
    <aside className={asideClass}>
      <button
        onClick={() => setIsCollapsed((prevCollapsed) => !prevCollapsed)}
        className={`${ROOT_CLASS}__side-nav__toggle-collapse`}
      >
        <img src={Icons.TomatoColor} alt="arrow" />
        <img
          src={Icons.Arrow}
          alt="arrow"
          className={`${ROOT_CLASS}__side-nav__arrow`}
          width="20px"
        />
      </button>
      <Router>
        <NavMenu className={`${ROOT_CLASS}__side-nav__menu`}>
          {slideNavs.map((nav) => (
            <NavItem
              className={`${ROOT_CLASS}__side-nav__menu-item`}
              to={nav.path}
              key={nav.path}
            >
              <img src={nav.iconSrc} alt={nav.path}></img>
            </NavItem>
          ))}
        </NavMenu>

        <div className={`${ROOT_CLASS}__side-nav__content`}>
          <Switch>
            {slideNavs.map((nav) => (
              <Route key={nav.path} path={nav.path} component={nav.component} />
            ))}
          </Switch>
        </div>
      </Router>
    </aside>
  );
}

export default SideNav;
