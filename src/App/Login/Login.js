import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';

import SignUp from './SignUp/SignUp';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveSignUp: false,
    };

    this.openSignUp = this.openSignUp.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
    this.login = this.login.bind(this);
  }

  openSignUp() {
    this.setState({
      isActiveSignUp: true,
    });
  }

  closeSignUp() {
    this.setState({
      isActiveSignUp: false,
    });
  }

  login() {
    axios.post('http://localhost:3000/users/login', {
      userEmail: document.getElementsByName('email')[0].value,
      userPassword: document.getElementsByName('password')[0].value,
    })
      .then((response) => {
        // Handle succes
        console.log(response.data);
        const { setToken, setUser, setView } = this.props;
        setToken(response.data.token);
        setUser(response.data.user);
        setView('home');
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  render() {
    const { isActiveSignUp } = this.state;
    const { closeSignUp, openSignUp } = this;

    const signUp = isActiveSignUp
      ? <SignUp closeSignUp={closeSignUp} />
      : null;

    return (
      <div>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button id="loginBtn" onClick={this.login} type="button">Login</button>
        <button
          id="signUpBtn"
          onClick={openSignUp}
          type="button"
        >
          Sign Up
        </button>
        {signUp}
      </div>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};

export default Login;
