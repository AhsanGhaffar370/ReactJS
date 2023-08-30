import React,{useEffect,useState} from 'react'

export default function HooksUseEffect() {

    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(0)

    const Increment=()=>{
        setCounter(counter+1);
    }
    const Decrement=()=>{
        setCounter1(counter1-1);
    }

    // Effect function will run after every render 
    useEffect(()=>{
        console.log("Component HookUseEffect Updated (UseEffect)")
    },[counter,counter1]) //it means useEffect only run when only counter, counter1, counter2 updated
    return (
        <div>
            <p className="bg-warning font-weight-bold">Hooks UseEffect (useEffect Helps to implement LifeCycle in Functional Component)</p>
            <p>
                useEffect is replacement of componentDidMount and componentDidUpdate 
                <br></br>
                <a href="https://www.youtube.com/watch?v=aqheUYMUGe8&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=34">video link</a>
                <a href="https://www.youtube.com/watch?v=aqheUYMUGe8&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=34">video link</a>
            </p>
             
            <button onClick={Increment}>Increment {counter}</button>
            <button onClick={Decrement}>Decrement {counter1}</button>
        </div>
    )
}
