import React from 'react'
import AddFishForm from '../AddFishForm'

class  Inventory extends React.Component {
    render(){
        return (
            <div>
            <AddFishForm addFish={this.props.addFish}  loadSampleFishes={this.props.loadSampleFishes}/>
    
            </div>
        )

    }
   
}
export default Inventory;
