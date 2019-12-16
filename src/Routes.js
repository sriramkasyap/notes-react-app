import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <AppliedRoute appProps={appProps} path="/" exact component={Home} />
      <AppliedRoute appProps={appProps} path="/login" exact component={Login} />
      <AppliedRoute appProps={appProps} component={NotFound} />
    </Switch>
  );
};

export default Routes;
