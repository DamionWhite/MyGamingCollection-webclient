import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.user.name}</h1>
      </div>
    )
  }
}

export default Home;
