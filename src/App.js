import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topic';
import NotFound from './components/404';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const componentName = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topic'>Topic</Link></li>
        </ul>
        <hr/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/topic' component={Topics}/>
        <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default componentName;