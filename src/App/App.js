import React from 'react';
import axios from 'axios';
import '../index.css';

import Login from './Login/Login';
import Home from './Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      user: null,
      view: this.views.login
    };

    this.setToken = this.setToken.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setView = this.setView.bind(this);

    // Check if token is stored
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      //  Get user
      axios.post('http://localhost:3000/users/get_by_token', {
        token: token
      })
        .then(response => {
          // Handle success
          console.log('Found Token');
          const { user } = response.data;
          this.setState({
            user: user,
            token: token,
            view: this.views.home
          });
        })
        .catch(error => {
          console.log({ error });
        })
    } else {
      this.state.view = this.views.login;
    }
  }

  views = {
    login: 'login',
    home: 'home'
  }

  setView(view) {
    this.setState({
      view: view
    });
  }

  setUser(user) {
    this.setState({
      user: user
    });
  }

  setToken(token) {
    this.setState({
      token: token
    });
    sessionStorage.setItem('token', token);
  }

  render() {
    let view = null;

    // Set view
    // VIEW: LOGIN
    if (this.state.view === this.views.login) {
      view = (
        <Login
          setToken={this.setToken}
          setView={this.setView}
          setUser={this.setUser}
        />
      );
    }
    // VIEW: HOME
    else if (this.state.view === this.views.home) {
      view = (
        <Home
          user={this.state.user}
        />
      );
    }

    return (
      <div id='App'>
        {view}
      </div>
    );
  }
}

export default App;
