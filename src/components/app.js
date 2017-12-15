import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from '../reducers';
import PostIndex from "../components/post_index";
import PostNew from "../components/post_new";
import PostShow from "../components/post_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostNew} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/" component={PostIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
