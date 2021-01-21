import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';

import { AccountProvider } from './providers/ApiDataProvider';
import { HOME_PATH, STATION_PATH } from './config';
import HomePage from './components/HomePage';
import StationPage from './components/StationPage';

const history = createBrowserHistory();
const App = () => {
  return (
    <div className="App">
      <AccountProvider>
        <Router history={history}>
          <Switch>
            <Route exact component={HomePage} path={HOME_PATH} />
            <Route exact component={StationPage} path={STATION_PATH} />
          </Switch>
        </Router>
      </AccountProvider>
    </div>
  );
};

export default App;
