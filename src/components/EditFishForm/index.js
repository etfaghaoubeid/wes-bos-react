import React from 'react'
import AddFishForm from '../AddFishForm';

export default function EditFishForm() {
 let p ={
     name:'atigh'
 }
    return (
        <div>
            <h1>Add fish form component</h1>
            <AddFishForm names ={p}/>
        </div>
    )
}
