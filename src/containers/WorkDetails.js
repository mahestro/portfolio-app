import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

class WorkDetails extends Component {
  render() {
    let page = this.props.match.params.string;

    return (
      <div>
        <div className="prefooter">
          <Link className="link" to="/"><Icon id="arrowback" className="icon icon--xsmall" /> Back to All Projects</Link>
        </div>
      </div>
    );
  }
}

export default WorkDetails;
