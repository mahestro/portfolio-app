import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render((
  <ParallaxProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ParallaxProvider>
), document.getElementById('root'));

registerServiceWorker();
