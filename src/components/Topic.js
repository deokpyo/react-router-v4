import React from 'react';
import {Link, Route} from 'react-router-dom';

const Empty = () => {
    return (
        <h1>Please Select a Topic.</h1>
    );
};

const Topic = ({match}) => {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
};

const Topics = ({match}) => {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
            </ul>
            <Route exact path={match.url} component={Empty} />
            <Route path={`${match.url}/:topicId`} component={Topic} />
            
        </div>
    );
};
export default Topics;