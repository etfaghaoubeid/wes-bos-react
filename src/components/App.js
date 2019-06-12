import React, { Component } from 'react';
import Header from './Header'
import Order from './Order';
import Fish from  './Fish'
import Inventory from './Inventory'

class App extends Component {
  state={
    fishes:{},
    orders:{}
  }
  addFish =fish=>{
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish;

    this.setState({
      fishes
    })


  }
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
      <Inventory addFish={this.addFish}/>
      </div>
       
    );
  }
}

export default App;
