import React,{useEffect,useState} from 'react';
import B from "./B"
import C from "./C"
import {Provider} from './context';

const A = (props) => {

    const [student,setStudent]=useState({name:"ahsan",roll:20})
    // const [student,setStudent]=useState("ahsan")

    const counterfunc=()=>{
        console.log("update counter A ")
        // setStudent("ghaffar")
        setStudent({
            name:"ahsan updated",
            roll:student.roll+1
        })
    }

    const [contVal,setcontVal]=useState({
        data: student,
        counterfunc: counterfunc
    })

    useEffect(()=>{
        // console.log(contVal.counterfunc);
        console.log("Component A Updated (UseEffect)")
        // setcontVal({
        //     data: {
        //         name:"ahsan21",
        //         roll:student.roll
        //     }
        // })
    },[])

    return (
        <div>
        <p className="bg-warning font-weight-bold">Context Api (replacement of passing prop from A Component to B to C)</p>
        <a href="https://www.youtube.com/watch?v=mrPT9svnNfs&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=43">video link</a>
            <h1>A Component</h1>
            
            {/* <button onClick={counterfunc}>update student State</button> */}
            <p>Student State: {student.name} - {student.roll}</p>
            <p>contVal State: {contVal.data.name}</p>
            <Provider value={contVal}>
                <B/>
                <C/>
            </Provider>
        </div>
    );
}

export default A;
