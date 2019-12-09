import React from "react";
import {Route, Switch} from "react-router-dom";
import ProjectsContainer from "../Routes/Projects";
import AuthContainer from "../Routes/Auth";
import AboutMe from "../Routes/AboutMe";
import Categories from "../Routes/Categories";

// const LoggedInRoutes = () => <><Route exact path={"/"} component={Project}/></>;

// const LoggedOutRoutes = () => <><Route exact path={"/"} component={AuthContainer}/></>;

const AppRouter = () => (
    <>
        {/* <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch> */}
        <Switch>
            <Route exact path={"/"} component={ProjectsContainer}/>
            <Route path={"/login"} component={AuthContainer}/>
            <Route path={"/aboutme"} component={AboutMe}/>
            <Route path={"/projects"} component={ProjectsContainer}/>
            <Route path={"/categories"} component={Categories}/>
        </Switch>
    </>
);

export default AppRouter;
