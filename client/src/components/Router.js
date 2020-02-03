import React, { Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import Articles from "./Articles";
import AddArticle from "./AddArticle";
import Article from "./Article";

const Router = ({ posts }) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Articles posts={posts} />} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/add_new" component={AddArticle} />
      </Switch>
    </Fragment>
  );
};

export default Router;
