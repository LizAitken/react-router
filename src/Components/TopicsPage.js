import React from 'react';
import Topic from './Topic';
import { Route, Link } from "react-router-dom";

const TopicsPage = ({match}) => {
    return (
      <div>
        <h2>Topics</h2>
        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
        </nav>
        <Route path={`${match.path}/:id`} component={Topic} />
        <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
      </div>
    )
}
export default TopicsPage;