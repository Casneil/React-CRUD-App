import React, { Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import Articles from "./Articles";

const Router = ({ posts }) => {
  return (
    <Fragment>
      <Route to="/" render={() => <Articles posts={posts} />} />
    </Fragment>
  );
};

export default Router;
