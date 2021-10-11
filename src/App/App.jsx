import { SearchPage } from '../pages/SearchPage';
import { Router, Route, Switch } from "react-router-dom";
import React from 'react';
import { history } from '../_helpers';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch >
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export { App };
