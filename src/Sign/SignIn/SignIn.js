import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SignTitle,
  InputStyleComponent,
  SignButton,
} from '../SignStyleComponent/SignStylesComponent';
import fire from '../fire/fire';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    passError: '',
    emailError: '',
    logIn: false,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClick = () => {
    const { email, password, logIn } = this.state;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            this.setState({ emailError: err.message });
            break;
          case 'auth/wrong-password':
            this.setState({ passError: err.message });
            break;
        }
      });
    const { history } = this.props;
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logIn: !logIn });
        history.push('/Timer');
      }
    });
  };

  render() {
    const { emailError, passError } = this.state;
    return (
      <form className="signIn">
        <SignTitle>Login</SignTitle>

        <InputStyleComponent
          placeholder="Email"
          name="email"
          type="text"
          onChange={this.onChange}
        />
        <p style={{ color: 'red' }}>{emailError}</p>
        <InputStyleComponent
          placeholder="Password"
          name="password"
          type="password"
          onChange={this.onChange}
        />
        <p style={{ color: 'red' }}>{passError}</p>

        <span className="buttonSpan">
          <SignButton type="button" onClick={this.onClick}>Login</SignButton>
        </span>

        <span className="helpLine">
          <p className="smallBtnSignUp">
            <Link to="/signUp" className="signUpBtn">
              Don`t have an account yet? Register
            </Link>
          </p>
        </span>
      </form>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

SignIn.defaultProps = {};

export default SignIn;
