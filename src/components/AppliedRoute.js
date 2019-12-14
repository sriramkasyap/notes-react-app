import React from "react";
import { Route } from "react-router-dom";

const AppliedRoute = ({ component: C, appProps, ...rest }) => {
  return (
    <Route {...rest} render={props => <C {...props} {...appProps}></C>}></Route>
  );
};

export default AppliedRoute;
