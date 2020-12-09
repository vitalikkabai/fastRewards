import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SignButton } from '../SignStyleComponent/SignStylesComponent';
import fire from '../fire/fire';
import firebase from 'firebase';

class Timer extends React.Component {
  state = {
    isMobile: false,
  };

  componentDidMount() {
    if (window.innerWidth <= 600) {
      this.setState({ isMobile: true });
    }

    this.interval = setInterval(() => {
      const { isMobile } = this.state;
      if (isMobile) {
        this.mobileIncrement();
      } else {
        this.webIncrement();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  signOut = () => {
    fire.auth().signOut();
  };

  mobileIncrement() {
    const { user, userData: { currentTimeMob } } = this.props;
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .update(
        {
          currentTimeMob: currentTimeMob + 1,
        },
      );
  }

  webIncrement() {
    const { user, userData: { currentTimeWeb } } = this.props;
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .update(
        {
          currentTimeWeb: currentTimeWeb + 1,
        },
      );
  }

  render() {
    const { userData: { currentTimeMob, currentTimeWeb } } = this.props;
    return (
      <>
        <Link to="/">
          <SignButton type="button" onClick={this.signOut}>Sign out</SignButton>
        </Link>
        <div className="timerArea" >

          <div className="timer">
            <div className="timerBlock">
              <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNDAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM4Mi44NjcxODggMTU3LjM3ODkwNiAyMC4wNzQyMTgtMjAuMDc0MjE4YzcuODAwNzgyLTcuODAwNzgyIDcuODAwNzgyLTIwLjQ0OTIxOSAwLTI4LjI0NjA5NC03LjgwMDc4MS03LjgwMDc4Mi0yMC40NDUzMTItNy44MDA3ODItMjguMjQ2MDk0IDBsLTIwLjA3NDIxOCAyMC4wNzQyMThjLTMzLjY3OTY4OC0yOC4wNjI1LTc0LjYwNTQ2OS00NS4wMTU2MjQtMTE4LjI2MTcxOS00OC45ODQzNzR2LTQwLjE5OTIxOWgxOS4zMDg1OTRjMTEuMDMxMjUgMCAxOS45NzI2NTYtOC45NDUzMTMgMTkuOTcyNjU2LTE5Ljk3NjU2M3MtOC45NDE0MDYtMTkuOTcyNjU2LTE5Ljk3MjY1Ni0xOS45NzI2NTZoLTc4LjU2NjQwN2MtMTEuMDMxMjUgMC0xOS45NzI2NTYgOC45NDE0MDYtMTkuOTcyNjU2IDE5Ljk3MjY1NnM4Ljk0MTQwNiAxOS45NzY1NjMgMTkuOTcyNjU2IDE5Ljk3NjU2M2gxOS4zMDg1OTR2NDAuMTk5MjE5Yy0xMDkuMjgxMjUgOS45Mzc1LTE5Ni40MTAxNTYgMTAxLjc0MjE4Ny0xOTYuNDEwMTU2IDIxNS40NjQ4NDMgMCAxMTkuNTkzNzUgOTYuNzc3MzQ0IDIxNi4zODY3MTkgMjE2LjM4NjcxOSAyMTYuMzg2NzE5IDExOS41ODk4NDMgMCAyMTYuMzgyODEyLTk2Ljc3NzM0NCAyMTYuMzgyODEyLTIxNi4zODY3MTkgMC01MS4wODU5MzctMTcuNTkzNzUtOTkuNDY0ODQzLTQ5LjkwMjM0My0xMzguMjM0Mzc1em0tMTY2LjQ4NDM3NiAzMTQuNjcxODc1Yy05Ny4yODUxNTYgMC0xNzYuNDM3NS03OS4xNDg0MzctMTc2LjQzNzUtMTc2LjQzNzUgMC05Ny4yODUxNTYgNzkuMTUyMzQ0LTE3Ni40MzM1OTMgMTc2LjQzNzUtMTc2LjQzMzU5MyA5Ny4yODkwNjMgMCAxNzYuNDM3NSA3OS4xNDg0MzcgMTc2LjQzNzUgMTc2LjQzMzU5MyAwIDk3LjI4OTA2My03OS4xNDg0MzcgMTc2LjQzNzUtMTc2LjQzNzUgMTc2LjQzNzV6bTkyLjU2NjQwNy0yNjljNy44MDA3ODEgNy44MDA3ODEgNy44MDA3ODEgMjAuNDQ5MjE5IDAgMjguMjQ2MDk0bC03OC40NDE0MDcgNzguNDQxNDA2Yy03LjgwMDc4MSA3LjgwMDc4MS0yMC40NDkyMTggNy44MDA3ODEtMjguMjQ2MDkzIDAtNy44MDA3ODEtNy44MDA3ODEtNy44MDA3ODEtMjAuNDQ5MjE5IDAtMjguMjQ2MDkzbDc4LjQzNzUtNzguNDQxNDA3YzcuODAwNzgxLTcuODAwNzgxIDIwLjQ0OTIxOS03LjgwMDc4MSAyOC4yNSAwem0wIDAiLz48L3N2Zz4=" />
            </div>
            <p className="currentTime">{currentTimeWeb}</p>
          </div>
          <div>
            <div className="timerBlock">
              <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNDAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM4Mi44NjcxODggMTU3LjM3ODkwNiAyMC4wNzQyMTgtMjAuMDc0MjE4YzcuODAwNzgyLTcuODAwNzgyIDcuODAwNzgyLTIwLjQ0OTIxOSAwLTI4LjI0NjA5NC03LjgwMDc4MS03LjgwMDc4Mi0yMC40NDUzMTItNy44MDA3ODItMjguMjQ2MDk0IDBsLTIwLjA3NDIxOCAyMC4wNzQyMThjLTMzLjY3OTY4OC0yOC4wNjI1LTc0LjYwNTQ2OS00NS4wMTU2MjQtMTE4LjI2MTcxOS00OC45ODQzNzR2LTQwLjE5OTIxOWgxOS4zMDg1OTRjMTEuMDMxMjUgMCAxOS45NzI2NTYtOC45NDUzMTMgMTkuOTcyNjU2LTE5Ljk3NjU2M3MtOC45NDE0MDYtMTkuOTcyNjU2LTE5Ljk3MjY1Ni0xOS45NzI2NTZoLTc4LjU2NjQwN2MtMTEuMDMxMjUgMC0xOS45NzI2NTYgOC45NDE0MDYtMTkuOTcyNjU2IDE5Ljk3MjY1NnM4Ljk0MTQwNiAxOS45NzY1NjMgMTkuOTcyNjU2IDE5Ljk3NjU2M2gxOS4zMDg1OTR2NDAuMTk5MjE5Yy0xMDkuMjgxMjUgOS45Mzc1LTE5Ni40MTAxNTYgMTAxLjc0MjE4Ny0xOTYuNDEwMTU2IDIxNS40NjQ4NDMgMCAxMTkuNTkzNzUgOTYuNzc3MzQ0IDIxNi4zODY3MTkgMjE2LjM4NjcxOSAyMTYuMzg2NzE5IDExOS41ODk4NDMgMCAyMTYuMzgyODEyLTk2Ljc3NzM0NCAyMTYuMzgyODEyLTIxNi4zODY3MTkgMC01MS4wODU5MzctMTcuNTkzNzUtOTkuNDY0ODQzLTQ5LjkwMjM0My0xMzguMjM0Mzc1em0tMTY2LjQ4NDM3NiAzMTQuNjcxODc1Yy05Ny4yODUxNTYgMC0xNzYuNDM3NS03OS4xNDg0MzctMTc2LjQzNzUtMTc2LjQzNzUgMC05Ny4yODUxNTYgNzkuMTUyMzQ0LTE3Ni40MzM1OTMgMTc2LjQzNzUtMTc2LjQzMzU5MyA5Ny4yODkwNjMgMCAxNzYuNDM3NSA3OS4xNDg0MzcgMTc2LjQzNzUgMTc2LjQzMzU5MyAwIDk3LjI4OTA2My03OS4xNDg0MzcgMTc2LjQzNzUtMTc2LjQzNzUgMTc2LjQzNzV6bTkyLjU2NjQwNy0yNjljNy44MDA3ODEgNy44MDA3ODEgNy44MDA3ODEgMjAuNDQ5MjE5IDAgMjguMjQ2MDk0bC03OC40NDE0MDcgNzguNDQxNDA2Yy03LjgwMDc4MSA3LjgwMDc4MS0yMC40NDkyMTggNy44MDA3ODEtMjguMjQ2MDkzIDAtNy44MDA3ODEtNy44MDA3ODEtNy44MDA3ODEtMjAuNDQ5MjE5IDAtMjguMjQ2MDkzbDc4LjQzNzUtNzguNDQxNDA3YzcuODAwNzgxLTcuODAwNzgxIDIwLjQ0OTIxOS03LjgwMDc4MSAyOC4yNSAwem0wIDAiLz48L3N2Zz4=" />
            </div>
            <p className="currentTime">{currentTimeMob}</p>
          </div>
        </div>
      </>
    );
  }
}

// const Timer = () => {
//   const [currentTimeWeb, setCurrentTimeWeb] = useState(0);
//   const [currentTimeMob, setCurrentTimeMob] = useState(0);

//   useEffect(() => {
//     clearTimeout(timerId);

//     if (currentTimeWeb >= 0) {
//       timerId = setTimeout(() => {

//         if (window.innerWidth > 600) {
//           setCurrentTimeWeb(currentTimeWeb + 1000);
//         } else {
//           setCurrentTimeMob(currentTimeMob + 1000);
//         }

//       }, 1000);
//     }
//   }, [currentTimeWeb, currentTimeMob, isRunning]);

//   const SignOut = () => {
//     fire.auth().signOut();
//   };

//   // const handleRunning = () => setIsRunning(!isRunning);

//   return (

//   );
// };

export default Timer;
