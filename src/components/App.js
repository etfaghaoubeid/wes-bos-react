import React, { Component } from 'react';
import Header from './Header'
import StorePicker from './StorePicker'
import Order from './Order';
import Fish from  './Fish'
import Inventory from './Inventory'

class App extends Component {

  render() {
    return (
      <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          
            <Fish
             
            />
        
        </ul>
      </div>
      <Order
       
      />
      <Inventory/>
      </div>
       
    );
  }
}

export default App;
