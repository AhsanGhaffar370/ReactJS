import React,{useEffect,useState} from 'react'

export default function HooksUseEffect() {

    const [counter,setState]=useState(0)
    const [counter1,setState1]=useState(0)
    const [counter2,setState2]=useState(1)

    const Increment=()=>{
        setState(counter+1);
    }
    const Decrement=()=>{
        setState1(counter1-1);
    }
    const Twice=()=>{
        setState2(counter2*2);
    }

    useEffect(()=>{
        console.log("Component Updated (UseEffect)")
    },[counter,counter1]) //it means useEffect only run when only counter and counter1 updated
    return (
        <div>
            <p className="bg-warning font-weight-bold">Hooks UseEffect (useEffect Helps to implement LifeCycle in Functional Component)</p>
             
            <button onClick={Increment}>Increment {counter}</button>
            <button onClick={Decrement}>Decrement {counter1}</button>
            <button onClick={Twice}>Twice {counter2}</button>
        </div>
    )
}
