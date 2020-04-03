import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./auth.css";

const AuthLayout = (props) => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">{props.children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
