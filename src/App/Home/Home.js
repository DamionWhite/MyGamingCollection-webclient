import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;

    this.state = {
      user,
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>
          {`Welcome ${user.name}`}
        </h1>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Home;
