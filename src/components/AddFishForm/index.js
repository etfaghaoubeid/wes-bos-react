import React from 'react'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef()
    statusRef = React.createRef()
    imageRef = React.createRef()
    descriptionRef = React.createRef()
    
    

    handleSubmit = (event)=>{
        event.preventDefault()
        const fish ={
            name : this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            description : this.descriptionRef.current.value,
            image : this.imageRef.current.value
        }
        this.props.addFish(fish)
        event.currentTarget.reset()
        

    }
    render(){
        return (<div>
            <form  className="fish-edit"  onSubmit={this.handleSubmit}>
                <input type="text " ref={this.nameRef} name ='name' placeholder="name"/>
                <input type="text " ref={this.priceRef} name ='price' placeholder="Price"/>
                <select name="status" ref={this.statusRef} >
                    <option value="available">Fresh</option>
                    <option value="unavailable"> Sold out</option>
                </select>
                <textarea name="description" ref={this.descriptionRef}placeholder="descrption"></textarea>
                <input type="text " name ='image' ref={this.imageRef}placeholder="image url"/>
                <button type="submit">Add </button>
    
            </form>
                <button onClick={this.props.loadSampleFishes}>Load Sample fishes</button>
                </div>
        )

    }
   
}

export default AddFishForm
