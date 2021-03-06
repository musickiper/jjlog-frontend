import React from "react";
import {Route, Switch} from "react-router-dom";
import ProjectsContainer from "../Routes/Projects";
import AuthContainer from "../Routes/Auth";
import AboutMe from "../Routes/AboutMe";
import Categories from "../Routes/Categories";
import ProjectContainer from "../Routes/Project";
import NotFound from "../Routes/NotFound";
import Search from "../Routes/Search/Search";
import Profile from "../Routes/Profile";
import AddPost from "../Routes/AddProject";

const AppRouter = () => (
    <>
        <Switch>
            <Route exact path={"/"} component={ProjectsContainer}/>
            <Route path={"/login"} component={AuthContainer}/>
            <Route path={"/profile"} component={Profile}/>
            <Route path={"/aboutme"} component={AboutMe}/>
            <Route path={"/projects/:category"} component={ProjectsContainer}/>
            <Route path={"/projects"} component={ProjectsContainer}/>
            <Route path={"/project"} component={ProjectContainer}/>
            <Route path={"/categories"} component={Categories}/>
            <Route path={"/search"} component={Search}/>
            <Route path={"/addproject"} component={AddPost}/>
            <Route component={NotFound}/>
        </Switch>
    </>
);

export default AppRouter;
