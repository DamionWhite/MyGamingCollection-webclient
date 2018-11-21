import React from 'react';
import Register from './Register/Register';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveRegister: false
    };
    this.openRegister = this.openRegister.bind(this);
  }

  openRegister() {
    this.setState({
      isActiveRegister: true
    });
  }

  render() {
    const register = this.state.isActiveRegister ? <Register /> : null;

    return (
      <div>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="password" placeholder="Password" />
        <button id="loginBtn">Login</button>
        <button
          id="registerBtn"
          onClick={this.openRegister}
        >
          Register
        </button>
        {register}
      </div>
    );
  }
}

export default Login;
