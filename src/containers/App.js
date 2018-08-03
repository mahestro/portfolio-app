import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
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
          <Route exact path="/" component={Home} />
          <Route path="/work/:string" component={WorkDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
