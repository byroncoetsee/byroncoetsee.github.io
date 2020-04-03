import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-tabs/style/react-tabs.css";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Products from "./views/Products";
import Product from "./views/Product";
import NotFound from "./views/NotFound";
import { PublicRoute, PrivateRoute } from "./AuthGuard.js";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
    };
};

function App(props) {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/products" component={Products} authenticated={props.authenticated} />
                <PrivateRoute exact path="/product/:id" component={Product} authenticated={props.authenticated} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} authenticated={props.authenticated} />
                <PublicRoute exact path="/" component={Login} authenticated={props.authenticated} />
                <PublicRoute exact path="/register" component={Register} authenticated={props.authenticated} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default connect(mapStateToProps)(App);
