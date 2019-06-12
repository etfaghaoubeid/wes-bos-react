import React, { Component } from 'react';
import Header from './Header'
import Order from './Order';
import Fish from  './Fish'
import Inventory from './Inventory'
import fishes from '../sample-fishes';

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
  loadSampleFishes=()=>{
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
          
            {Object.keys(this.state.fishes).map(fish=>(
              <Fish />
            ))}
        </ul>
      </div>
      <Order
       
      />
      <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
       
    );
  }
}

export default App;
