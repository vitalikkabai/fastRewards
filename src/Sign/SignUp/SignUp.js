import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import {
  SignTitle,
  InputStyleComponent,
  SignButton,
} from '../SignStyleComponent/SignStylesComponent';
import fire from '../fire/fire';

class SignUp extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    id: (Math.floor(Math.random() * (10000 - 1000)) + 1000),
    email: '',
    password: '',
    passError: '',
    emailError: '',
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClick = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            this.setState({ emailError: err.message });
            break;
          case 'auth/week-password':
            this.setState({ passError: err.message });
            break;
        }
      });

    firebase.database().ref('users/' + this.state.id).set(
      {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,

      },
    );
  };

  render() {
    return (
      <form className="signUp">
        <SignTitle>Register</SignTitle>
        <InputStyleComponent
          name="firstName"
          type="text"
          halfWidth
          placeholder="First name"
          onChange={this.onChange}
        />

        <InputStyleComponent
          name="lastName"
          type="text"
          halfWidth
          placeholder="Last name"
          onChange={this.onChange}
        />

        <InputStyleComponent
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.onChange}
        />
        <InputStyleComponent
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.onChange}
        />

        <span className="buttonSpan">
          <Link to="/">
            <SignButton type="button" onClick={this.onClick}>
              Sign up
            </SignButton>
          </Link>
          <p className="smallBtnSignIn">
            <Link to="/" className="signInBtn">
              Already register? Log in
            </Link>
          </p>
        </span>
      </form>
    );
  }
}

export default SignUp;
