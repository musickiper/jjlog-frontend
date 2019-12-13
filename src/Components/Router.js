import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectsContainer from "../Routes/Projects";
import AuthContainer from "../Routes/Auth";
import AboutMe from "../Routes/AboutMe";
import Categories from "../Routes/Categories";
import ProjectContainer from "../Routes/Project";
import NotFound from "../Routes/NotFound";

// const LoggedInRoutes = () => <><Route exact path={"/"} component={Project}/></>;

// const LoggedOutRoutes = () => <><Route exact path={"/"} component={AuthContainer}/></>;

const AppRouter = ({ isLoggedIn }) => (
  <>
    {/* <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch> */}
    <Switch>
      <Route exact path={"/"} component={ProjectsContainer} />
      <Route path={"/login"} component={AuthContainer} />
      <Route path={"/aboutme"} component={AboutMe} />
      <Route path={"/projects/:category"} component={ProjectsContainer} />
      <Route path={"/projects"} component={ProjectsContainer} />
      <Route path={"/project"} component={ProjectContainer} />
      <Route path={"/categories"} component={Categories} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default AppRouter;
