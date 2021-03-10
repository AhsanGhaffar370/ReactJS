import React,{useState} from 'react'

export default function HooksUseState() {
    const [counter,setState]=React.useState(0)
    const [name, setname]=useState({firstName:"", lastName:""});
    const [items, setItems]=useState([])

    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            rand: Math.floor(Math.random() * 10)
        }])
    }
    
    const updateCounter=()=>{
        setState(counter+1);
    }

    let fname,lname;
    const handleSubmit=(e)=>{
        fname=name.firstName;
        lname=name.lastName;
        console.log(fname)
        e.preventDefault();
    }



    return (
        <div>
            <p className="bg-warning font-weight-bold">HooksUseState (Use Hooks to use states in functional component, useState)</p>
            <button onClick={updateCounter}>update {counter}</button>

            <p className="bg-warning font-weight-bold">Pass Object inside useState Hooks (marge operator)</p>
            
            <form onSubmit={handleSubmit}>
                <input type="text" value={name.firstName} onChange={e=>{setname({...name,firstName: e.target.value})}} />
                <input type="text" value={name.lastName} onChange={e=>{setname({...name,lastName: e.target.value})}} />
                <input type="submit" value="submit" />
            </form>
            <h4>{name.firstName} <span>{name.lastName}</span></h4>

            <p className="bg-warning font-weight-bold">Hooks (useState with array)</p>

            <input type="button" value="Generate random" onClick={addItem} />
            <ul>
                {items.map(item => (<li key={item.id}>{item.rand}</li>))}
            </ul>
            
        </div>
    )
}

