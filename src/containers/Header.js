import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';
const classSelectedKeyword = 'selected';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        homeLink: classSelectedKeyword,
        aboutLink: ''
      }
    };
  }

  componentDidMount() {
    if (window.location.hash.indexOf('about') > 0) {
      this.setState({
        navigation: {
          homeLink: '',
          aboutLink: classSelectedKeyword
        }
      });
    }
  }

  onClick = e => {
    const field = e.target.id;
    let navigation = this.state.navigation;
    for (const i in navigation) {
      navigation[i] = '';
    }
    navigation[field] = classSelectedKeyword;
    this.setState(navigation);
  }

  render() {
    return(
      <header>
        <nav>
          <ul>
            <li className={this.state.navigation.homeLink}><Link id="homeLink" to={Routes.HOME} onClick={this.onClick}>Work</Link></li>
            <li className={this.state.navigation.aboutLink}><a id="aboutLink" href="/#about" onClick={this.onClick}>About</a></li>
            <li><a href="/resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
