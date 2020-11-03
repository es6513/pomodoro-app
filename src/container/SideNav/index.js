import React, { useState } from "react";
import classNames from "classnames";
import NewTask from "./views/NewTask";
import TaskLists from "./views/TaskLists";
import NavItem from "../../components/NavItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

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
        Click
      </button>
      <Router>
        <ul className={`${ROOT_CLASS}__side-nav__controll`}>
          <NavItem to="/add" />
          <NavItem to="/todo" />
        </ul>

        <div className={`${ROOT_CLASS}__side-nav__content`}>
          <Switch>
            <Route path="/add">
              <NewTask />
            </Route>
            <Route path="/todo">
              <TaskLists />
            </Route>
          </Switch>
        </div>
      </Router>
    </aside>
  );
}

export default SideNav;
