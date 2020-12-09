import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    webVersion: true,
    logIn: false,
  };

  // componentDidMount() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log(user);
  //     } else {
  //       alert('loh');
  //     }
  //   });
  // }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClick = () => {
    console.log(this.props.history);
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
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
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logIn: !this.state.logIn });
        this.props.history.push('/Timer');
      }
    });
  };

  render() {
    // console.log(window.innerWidth);
    return (
      <form className="signIn">
        <SignTitle>Login</SignTitle>

        <InputStyleComponent
          placeholder="Email"
          name="email"
          type="text"
          onChange={this.onChange}
        />
        <p style={{ color: 'red' }}>{this.state.emailError}</p>
        <InputStyleComponent
          placeholder="Password"
          name="password"
          type="password"
          onChange={this.onChange}
        />
        <p style={{ color: 'red' }}>{this.state.emailError}</p>

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

export default SignIn;
