import React, { Component } from 'react';
import Header from './Header'
import Order from './Order';
import Fish from  './Fish'
import Inventory from './Inventory'
import fishes from '../sample-fishes';

import base from '../config/base'

class App extends Component {
  
  state={
    fishes:{},
    order:{}
  }

  componentWillMount(){
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{context:this,state:'fishes'})
    const localStorageRef = localStorage.getItem(`${this.props.match.params.storeId}`)
    this.setState({order:JSON.parse(localStorageRef)})
  }
  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
  componentWillUpdate(nextProps,nextState){
     localStorage.setItem(`${this.props.match.params.storeId}`,JSON.stringify(nextState))
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
    console.log(this.props.match.params.storeId)
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
      <Order fishes ={this.state.fishes} 
          order ={this.state.order}
          params={this.props.match.params}
       
      />
      <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
       
    );
  }
}

export default App;
