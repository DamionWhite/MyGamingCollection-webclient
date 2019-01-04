import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  signUpUser() {
    axios.post('http://localhost:3000/users/signup', {
      userName: document.getElementsByName('newUserName')[0].value,
      userEmail: document.getElementsByName('newUserEmail')[0].value,
      userPassword: document.getElementsByName('newUserPassword')[0].value
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
    return (
      <div id='signUp'>
        <button onClick={this.props.closeSignUp}>X</button>
        <h1>Sign Up</h1>
        <input
          type='text'
          name='newUserName'
          placeholder='Username'
        ></input>
        <input
          type='text'
          name='newUserEmail'
          placeholder='Email'
        ></input>
        <input
          type='password'
          name='newUserPassword'
          placeholder='Password'
        ></input>
        <button
          onClick={this.signUpUser}
        >
          Create Account
        </button>
      </div>
    );
  }
}

export default SignUp;