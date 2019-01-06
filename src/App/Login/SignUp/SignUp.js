import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SignUp extends React.Component {
  static signUpUser() {
    axios.post('http://localhost:3000/users/signup', {
      userName: document.getElementsByName('newUserName')[0].value,
      userEmail: document.getElementsByName('newUserEmail')[0].value,
      userPassword: document.getElementsByName('newUserPassword')[0].value,
    })
      .then((response) => {
        // Handle succes
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  render() {
    const { closeSignUp } = this.props;
    return (
      <div id="signUp">
        <button onClick={closeSignUp} type="button">X</button>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="newUserName"
          placeholder="Username"
        />
        <input
          type="text"
          name="newUserEmail"
          placeholder="Email"
        />
        <input
          type="password"
          name="newUserPassword"
          placeholder="Password"
        />
        <button
          onClick={this.signUpUser}
          type="button"
        >
          Create Account
        </button>
      </div>
    );
  }
}

SignUp.propTypes = {
  closeSignUp: PropTypes.func.isRequired,
};

export default SignUp;
