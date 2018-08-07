import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';
import Icon from '../components/Icon';
import WorkDejavu from './WorkDejavu';
import WorkNasa from './WorkNasa';
import WorkLmp from './WorkLmp';
import WorkSquidjob from './WorkSquidjob';
import WorkConcepts from './WorkConcepts';

const WorkDetails = ({ match }) => {
  const selectComponent = (id) => {
    switch(id) {
      case Routes.WORK_DETAILS_DEJAVU:
        return <WorkDejavu />;

      case Routes.WORK_DETAILS_NASA:
        return <WorkNasa />;

      case Routes.WORK_DETAILS_LMP:
        return <WorkLmp />;

      case Routes.WORK_DETAILS_SQUIDJOB:
        return <WorkSquidjob />;

      case Routes.WORK_DETAILS_CONCEPTS:
        return <WorkConcepts />;

      default:
        break;
    }
  }

  return (
    <div>
      { selectComponent(match.params.id) }
      <div className="prefooter">
        <Link className="link" to="/"><Icon id="arrowback" className="icon icon--xsmall" /> Back to All Projects</Link>
      </div>
    </div>
  );
}

export default WorkDetails;
