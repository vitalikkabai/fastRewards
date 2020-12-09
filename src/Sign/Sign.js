import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Timer from './Timer/Timer';

const Sign = () => (
  <div className="signArea">
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/Timer" component={Timer} />
      </Switch>
    </Router>
  </div>
);

export default Sign;
