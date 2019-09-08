import React from "react";
import PropTypes from "prop-types";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Project from "../Routes/Project";
import AuthContainer from "../Routes/Auth";

const LoggedInRoutes = () => <><Route exact path={"/"} component={Project}/></>;

const LoggedOutRoutes = () => <><Route exact path={"/"} component={AuthContainer}/></>;

const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>
    </Router>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;