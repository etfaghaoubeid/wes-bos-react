import React, { Component } from 'react';
import Header from './Header'
import Order from './Order';
import Fish from  './Fish'
import Inventory from './Inventory'
import fishes from '../sample-fishes';

class App extends Component {
  state={
    fishes:{},
    order:{}
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
  addToOrder=(itemIndex)=>{
    // copy state 
    let order = {...this.state.order}
    order[itemIndex] = order[itemIndex] +1 || 1
    this.setState({order})
  }
  render() {
    return (
      <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          
            {Object.keys(this.state.fishes).map(fish=>(
              <Fish key={fish} fish={this.state.fishes[`${fish}`]}  addToOrder = {this.addToOrder} itemIndex={fish}/>
            ))}
        </ul>
      </div>
      <Order fishes ={this.state.fishes} order ={this.state.order}
       
      />
      <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
       
    );
  }
}

export default App;
