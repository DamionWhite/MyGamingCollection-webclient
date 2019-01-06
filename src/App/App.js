import React from 'react';
import axios from 'axios';
import '../index.css';

import Login from './Login/Login';
import Home from './Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.views = {
      login: 'login',
      home: 'home',
    };

    this.state = {
      token: null,
      user: null,
      view: this.views.login,
    };

    this.setToken = this.setToken.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setView = this.setView.bind(this);

    // Check if token is stored
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      //  Get user
      axios.post('http://localhost:3000/users/get_by_token', {
        token,
      })
        .then((response) => {
          // Handle success
          console.log('Found Token');
          const { user } = response.data;
          this.setState({
            user,
            token,
            view: this.views.home,
          });
        })
        .catch((error) => {
          console.log({ error });
        });
    } else {
      this.state.view = this.views.login;
    }
  }

  setView(view) {
    this.setState({
      view,
    });
  }

  setUser(user) {
    this.setState({
      user,
    });
  }

  setToken(token) {
    this.setState({
      token,
    });
    sessionStorage.setItem('token', token);
  }

  render() {
    let viewJSX = null;
    const { view, user } = this.state;

    // Set view
    if (view === this.views.login) {
      // VIEW: LOGIN
      viewJSX = (
        <Login
          setToken={this.setToken}
          setView={this.setView}
          setUser={this.setUser}
        />
      );
    } else if (view === this.views.home) {
      // VIEW: HOME
      viewJSX = (
        <Home
          user={user}
        />
      );
    }

    return (
      <div id="App">
        {viewJSX}
      </div>
    );
  }
}

export default App;
