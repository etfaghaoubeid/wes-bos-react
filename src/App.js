import React, { Component } from 'react';
import Header from './components/Header'
import StorePicker from './components/StorePicker'

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
