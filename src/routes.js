import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Main from './components/Routes/Main';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
}

export default Routes;
