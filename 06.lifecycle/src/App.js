import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';


class App extends Component {
  state = {
    color: '#000000', // black
  }

  handleClick = () => {
    this.setState({color: getRandomColor})
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
