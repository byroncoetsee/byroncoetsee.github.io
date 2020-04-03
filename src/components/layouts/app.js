import React, { useState } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, Redirect, useParams, withRouter } from "react-router-dom";
import "../../App.css";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import { useHistory as history, useLocation } from "react-router-dom";
import { storeAuth, storePageNumber } from "../../state/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        storeAuth: (auth) => dispatch(storeAuth(auth)),
        storePageNumber: (pageNumber) => dispatch(storePageNumber(pageNumber)),
    };
}

const AppLayout = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [route, setRoute] = useState("");
    const [selected] = useState(window.location.pathname.substring(1));
    const logout = () => {
        // e.preventDefault()
        props.storePageNumber(1);
        props.storeAuth({
            authenticated: false,
            guid: "",
        });
    };

    const redir = (newRoute) => {
        if (window.location.pathname !== newRoute) {
            setRoute(newRoute);
            setRedirect(true);
        }
    };
    if (redirect) return <Redirect to={route} push />;

    return (
        <div className="App">
            <SideNav style={{ position: "fixed" }}>
                <Toggle />
                <Nav defaultSelected={selected}>
                    <NavItem eventKey="dashboard" onClick={() => redir("/dashboard")}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.25em" }} />
                        </NavIcon>
                        <NavText>Dashboard</NavText>
                    </NavItem>
                    <NavItem eventKey="products" onClick={() => redir("/products")}>
                        <NavIcon>
                            <i className="fas fa-shopping-cart" style={{ fontSize: "1.25em" }} />
                        </NavIcon>
                        <NavText>Products</NavText>
                    </NavItem>
                </Nav>
            </SideNav>
            <div className="row">
                <div className="col-12 text-left">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse" style={{ marginLeft: "3.5em" }}>
                            <button className="navbar-brand" href="#">
                                <img
                                    src="http://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                                Pricebeater
                            </button>
                        </div>
                        <li className="nav-item navbar-nav dropdown">
                            <button className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </button>
                            <div className="dropdown-menu  dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item">Your details</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        </li>
                    </nav>
                </div>
            </div>
            {props.children}
            <footer className="py-2 bg-secondary text-white">
                <div className="container text-center">
                    <small>Copyright &copy; pricebeater | Version 1.0.1</small>
                </div>
            </footer>
        </div>
    );
};

export default withRouter(connect(null, mapDispatchToProps)(AppLayout));
