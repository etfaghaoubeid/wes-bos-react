import React, { Component } from 'react';
import Header from './Header'
import StorePicker from './StorePicker'

class App extends Component {

  render() {
    return (
      <>
       <Header name='atigh'/>
       <StorePicker/>
      </>
    );
  }
}

export default App;
