import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

export default class Routes extends Component {

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }

};
