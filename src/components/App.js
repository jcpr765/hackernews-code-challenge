import React, { Component } from 'react';
import StoryContainer from './StoryContainer';

class App extends Component {

  render() {
    return (
      <div>
        <StoryContainer {...this.props}/>
      </div>
    );
  }
}

export default App;
