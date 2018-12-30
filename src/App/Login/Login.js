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

  render() {
    const signUp =
      this.state.isActiveSignUp ?
        <SignUp closeSignUp={this.closeSignUp} /> :
        null;

    return (
      <div>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="password" placeholder="Password" />
        <button id="loginBtn">Login</button>
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
