import React,{useState} from 'react'

export default function HooksUseState() {
    const [counter,setCounter]=React.useState(0)

    const [counter2,setCounter2]=useState(1)
    const [counter3,setCounter3]=useState(0)
    
    const [name, setname]=useState({firstName:"", lastName:""});
    
    const [items, setItems]=useState([])

    
    const updateCounter=()=>{
        setCounter(counter+1);
    }


    const Twice=()=>{
        setCounter2(counter2*2);
    }
    const IncrementBy10=()=>{
        for(let i=0; i<10; i++)
            // setCounter3(counter3+1); // this technique will not working with for loop
            setCounter3(prevCounter3=>prevCounter3+1); // prevCounter3 hold previous value of counter3
    }   

    
    let fname,lname;
    const handleSubmit=(e)=>{
        fname=name.firstName;
        lname=name.lastName;
        console.log(fname)
        e.preventDefault();
    }

    
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            rand: Math.floor(Math.random() * 10)
        }])
    }
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merged1 = { ...obj1, ...obj2 };
    const merged2 = Object.assign({}, obj1, obj2);

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const merged3 = arr1.concat(arr2);
    const merged4 = [...arr1, ...arr2];

    return (
        <div>
            <p className="bg-warning font-weight-bold">Spread Operator ...</p>
            <p>JavaScript itself doesn't have a built-in "merge operator," but I'm assuming you're referring to merging objects or arrays. If that's the case, you might be looking for techniques to combine objects or arrays in JavaScript. Let's cover both scenarios:</p>
            <h5>Merging Objects:</h5>
            <p>Using the spread operator:: {JSON.stringify(merged1)}</p>
            <p>Using Object.assign():: {JSON.stringify(merged2)}</p>
            <h5>Merging Arrays:</h5>
            <p>Using concat():: {JSON.stringify(merged3)}</p>
            <p>Using the spread operator:: {JSON.stringify(merged4)}</p>
            <p>
            Remember that these methods perform shallow merges, meaning nested objects or arrays will retain their references. If you need a deep merge (merging nested structures as well), you might need to implement a custom solution or use a third-party library like lodash.merge.
            </p>

            <p className="bg-warning font-weight-bold">HooksUseState (Use Hooks to use states in functional component, useState)</p>
            <a href="https://www.youtube.com/watch?v=82x4SA6_wn0&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=33">video link</a>
            <br></br>
            <button onClick={updateCounter}>update {counter}</button>



            <p className="bg-warning font-weight-bold">How to use previous state in use state</p>
            <a href="https://www.youtube.com/watch?v=Htm95LTHCiU&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=35">video link</a>
            <br></br>

            <button onClick={Twice}>Twice {counter2}</button>
            <button onClick={IncrementBy10}>IncrementBy10 - {counter3}</button>


            <p className="bg-warning font-weight-bold">Pass Object inside useState Hooks (marge operator)</p>
            <p>by default we cannot save object properly in useSatate, for this purpose we use spread operator (...)  </p>
            <a href="https://www.youtube.com/watch?v=McyDOQrZAL4&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=36">video link</a>
            <br></br>
            
            <form onSubmit={handleSubmit}>
                {/* first solution */}
                {/* <input type="text" value={name.firstName} onChange={e=>{setname({firstName: e.target.value,lastName: name.lastName})}} />
                <input type="text" value={name.lastName} onChange={e=>{setname({firstName: name.firstName,lastName: e.target.value})}} /> */}
                {/* second solution using spread operator*/}
                <input type="text" value={name.firstName} onChange={e=>{setname({...name,firstName: e.target.value})}} />
                <input type="text" value={name.lastName} onChange={e=>{setname({...name,lastName: e.target.value})}} />

                <input type="submit" value="submit" />
            </form>
            <h4>{name.firstName} <span>{name.lastName}</span></h4>
            <h4>nameState: {JSON.stringify(name)}</h4>
            <h4>{name.firstName}</h4>

            <p className="bg-warning font-weight-bold">Hooks (useState with array)</p>

            <input type="button" value="Generate random" onClick={addItem} />
            <ul>
                {items.map(item => (<li key={item.id}>{item.id} {"->"} {item.rand}</li>))}
            </ul>
            
        </div>
    )
}

