import React from 'react';
import '../index.css';

class App extends React.Component {

  clicked() {
    console.log('Clicked');
    //

    var request = new XMLHttpRequest();
    var url = 'http://localhost:3000';

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        this.games = JSON.parse(request.response).games;
        console.dir(this.games);
      }
    };

    request.open('GET', `${url}/games`, true);
    request.send();
  }

  render() {
    return (
      <div>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    );
  }
}

export default App;
