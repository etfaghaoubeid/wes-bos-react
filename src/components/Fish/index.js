import React, { Component } from 'react'
import {formatPrice} from '../../helper'

class Fish extends Component {
    render() {
        const {image,price,desc,name} =this.props.fish
        const isAvailable = this.props.fish.status == 'available'
        return (
                <li className="menu-fish">
                    <img src={image} alt={name}/>
                    <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span> </h3>
                    <p>{desc}</p>
                    <button disabled={!isAvailable} onClick={()=>this.props.addToOrder(this.props.itemIndex)}>{isAvailable? 'ADD to cart':'sold out'}</button>

                </li>
                
            
        )
    }
}
export default  Fish;