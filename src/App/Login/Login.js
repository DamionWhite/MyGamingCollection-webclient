import axios from 'axios';
import React from 'react';

import SignUp from './SignUp/SignUp';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveSignUp: false
    };

    this.openSignUp = this.openSignUp.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
    this.login = this.login.bind(this);
  }

  openSignUp() {
    this.setState({
      isActiveSignUp: true
    });
  }

  closeSignUp() {
    this.setState({
      isActiveSignUp: false
    });
  }

  login() {
    axios.post('http://localhost:3000/users/login', {
      userEmail: document.getElementsByName('email')[0].value,
      userPassword: document.getElementsByName('password')[0].value
    })
      .then((response) => {
        // Handle succes
        console.log(response.data);
        this.props.setToken(response.data.token);
        this.props.setUser(response.data.user);
        this.props.setView('home');
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  render() {
    const signUp =
      this.state.isActiveSignUp ?
        <SignUp closeSignUp={this.closeSignUp} /> :
        null;

    return (
      <div>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button id="loginBtn" onClick={this.login}>Login</button>
        <button
          id="signUpBtn"
          onClick={this.openSignUp}
        >
          Sign Up
        </button>
        {signUp}
      </div>
    );
  }
}

export default Login;
