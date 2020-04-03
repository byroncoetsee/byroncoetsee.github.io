import { Route, Redirect } from "react-router";
import React from "react";

export const PublicRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      render={props =>

        !authenticated ? <Component {...props} /> : <Redirect to="/dashboard" push/>
      }
      {...rest}
    />
  )
}

export const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      render={props =>

        authenticated ? <Component {...props} /> : <Redirect to="/" push/>
      }
      {...rest}
    />
  )
}
