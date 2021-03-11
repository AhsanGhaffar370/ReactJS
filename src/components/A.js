import React,{useEffect,useState} from 'react';
import B from "./B"
import C from "./C"
export const mycontext=React.createContext();

const A = () => {

    const [student,setStudent]=useState({name:"ahsan",roll:20})
    // const [student,setStudent]=useState("ahsan")

    const counterfunc=()=>{
        console.log("update counter A ")
        // setStudent("ghaffar")
        setStudent({roll:student.roll+1})
    }

    const [contVal,setcontVal]=useState({
        data: student,
        counterfunc: counterfunc
    })

    // useEffect(()=>{
    //     console.log("Component Updated (UseEffect)")
    // },[student])

    return (
        <div>
            <h1>A Component</h1>
            
            <button onClick={counterfunc}>increment A -{student.roll}</button>
            <mycontext.Provider value={contVal}>
                <B/>
                <C/>
            </mycontext.Provider>
        </div>
    );
}

export default A;
