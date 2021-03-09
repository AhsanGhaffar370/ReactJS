import React,{useEffect,useState} from 'react'

export default function HooksUseEffect() {

    const [counter,setState]=useState(0)

    const updateCounter=()=>{
        setState(counter+1);
    }

    useEffect(()=>{
        console.log("Component Updated (UseEffect)")
    })
    return (
        <div>
            <p className="bg-warning font-weight-bold">Hooks UseEffect (useEffect Helps to implement LifeCycle in Functional Component)</p>
             
            <button onClick={updateCounter}>update {counter}</button>
        </div>
    )
}
