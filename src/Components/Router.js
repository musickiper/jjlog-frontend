import React from "react";
import PropTypes from "prop-types";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Project from "../Routes/Project";

const LoggedInRoutes = () => <><Route exact path={"/"} component={Project}/></>;

const LoggedOutRoutes = () => <><Route exact path={"/"} component={Auth}/></>;

const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>
    </Router>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;