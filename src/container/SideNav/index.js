import React from "react";
import NewTask from "./views/NewTask";
import TaskLists from "./views/TaskLists";
import NavItem from "../../components/NavItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function SideNav() {
  return (
    <aside className={`${ROOT_CLASS}__side__nav`}>
      <Router>
        <ul className={`${ROOT_CLASS}__side__nav__controll`}>
          <NavItem to="/add" />
          <NavItem to="/todo" />
        </ul>

        <div className={`${ROOT_CLASS}__side__nav__content`}>
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
