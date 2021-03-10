import React,{useState, useEffect} from 'react';

const MousePos = () => {

    const [pos,setpos]=useState({x:0, y:0})

    // It works as componentDidMount
    useEffect(() => {
        window.addEventListener("mousemove",mousePosition)    
    }, []); 

    // It works as componentDidUpdate
    // useEffect(() => {
    //     window.addEventListener("mousemove",mousePosition)    
    // }); 

    const mousePosition=(e)=>{
        setpos({
            x: e.clientX,
            y: e.clientY
        })
    }

    return (
        <div>
            <b>X: </b>{pos.x} - <b>Y: </b>{pos.y}
        </div>
    );
}

export default MousePos;
