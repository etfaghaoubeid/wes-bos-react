import React from 'react'

class AddFishForm extends React.Component {
    nameRaf = React.createRef();
    priceRaf = React.createRef()
    statusRef = React.createRef()
    descriptionRef = React.createRef()
    
    

    handleSubmit = (event)=>{
        event.preventDefault()
        const fish ={
            nameRaf : this.name.value.value,
            priceRaf : this.price.value.value,
            statusRef : this.status.value.value,
            descriptionRef : this.description.value.value
        }
        console.log(fish);


    }
    render(){
        return (
            <form  onSubmit={this.handleSubmit}>
                <input type="text " name ='name'/>
                <input type="text " name ='price'/>
                <select name="status" id="">
                    <option value="available">Fresh</option>
                    <option value="unavailable"> Sold out</option>
                </select>
                <textarea name="description"></textarea>
                <input type="text " name ='image'/>
                <button type="submit"></button>
    
            </form>
        )

    }
   
}

export default AddFishForm
