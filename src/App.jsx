import "./App.css";
import { SearchPage } from "../src/pages/SearchPage";
import { history } from './_helpers';

import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
