import React from 'react'
import { formatPrice } from '../../helper';


export default class Order extends React.Component {
    renderOrderItem = (item)=>{
        let fish = this.props.fishes[item]
        let count = this.props.order[item]
        const isAvailable = fish && fish.status ==='available'
        if(!isAvailable ||!fish){
            return(
                <li>Sory {fish.name? 'is Not abvailable':'fish' } </li>
            )
        }else{
            return(
                <li key={item}>
                    <span> {count}{  fish.name}</span>
                    <span className="price">{formatPrice(count*fish.price)}</span>
                </li>
                
            )
        }
        
    }
    render(){
        const orderId  = Object.keys(this.props.order)
        let total = orderId.reduce((prevTotal,item)=>{
            let fish = this.props.fishes[item]
            let count = this.props.order[item]
            const isAvailable = fish && fish.status ==='available'
            if(isAvailable){
                return prevTotal+(count*fish.price)
            }else{
               return  prevTotal
            }

        },0)
       

        
    return (
        <div className="order-wrap">
            <h1>Order</h1>
            <ul className="order">
                {
                orderId.map(this.renderOrderItem)
                }
                <li><span><strong> {formatPrice(total)} </strong></span></li>
                
            </ul>
        

            
        </div>
    )

    }
 


}
