import React from 'react'

export default function HooksUseState() {
    const [counter,setState]=React.useState(0)

    const updateCounter=()=>{
        setState(counter+1);
    }
    return (
        <div>
            <p className="bg-warning font-weight-bold">HooksUseState (Use Hooks to use states in functional component, useState)</p>
             
            <button onClick={updateCounter}>update {counter}</button>
        </div>
    )
}
