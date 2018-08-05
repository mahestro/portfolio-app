import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Routes from '../constants/routes';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import WorkDetails from './WorkDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path={Routes.HOME}
            component={Home} />
          <Route
            path={Routes.WORK_DETAILS}
            component={WorkDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
