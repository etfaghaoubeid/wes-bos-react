import React from 'react';
class StorePicker extends React.Component{
    myInput= React.createRef()
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.myInput);
    }
    handleChange=(e)=>{
        e.target.value= this.myInput
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <input type="text" ref={this.myInput} onChange={this.handleChange}/>
                <button type='submit'> click me</button>
                </form>
            </div>
        )

    }
   
}
export default StorePicker;