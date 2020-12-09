import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Timer from './Timer/Timer';

// TODO Redirect if user logged in

const Sign = () => {
  const [user, setUser] = React.useState(null);
  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        const userRef = firebase.database().ref(`users/${authUser.uid}`);
        userRef.on('value', (snapshot) => {
          const { currentTimeMob, currentTimeWeb } = snapshot.val();
          setUserData({ currentTimeMob, currentTimeWeb });
        });
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="signArea">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route
            exact
            path="/Timer"
            render={() => userData && <Timer user={user} userData={userData} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Sign;
