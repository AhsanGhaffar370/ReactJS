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
        setStudent({
            name:"ahsan",
            roll:student.roll+1
        })
    }

    const [contVal,setcontVal]=useState({
        data: student,
        counterfunc: counterfunc
    })

    useEffect(()=>{
        console.log("Component Updated (UseEffect)")
        setcontVal({
            data: {
                name:"ahsan",
                roll:student.roll
            }
            
        })
    },[])

    return (
        <div>
            <h1>A Component</h1>
            
            <button onClick={counterfunc}>increment A -{student.roll}</button>
            <p>{student.name}</p>
            <mycontext.Provider value={contVal}>
                <C/>
                <B/>
            </mycontext.Provider>
        </div>
    );
}

export default A;
