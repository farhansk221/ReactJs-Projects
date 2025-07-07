import React, { useState } from 'react'

function Main() {

    const [state,setState] = useState('');
    const[number,setNumber]=useState([]);

    function onHandleChange(e){
        setState(e.target.value);
    }

    const onClickChange=()=>{
        setNumber([...number,state]);
        setState('')
    }




  return (
    <div> 
        <h1>Enter A Number</h1>
        <input placeholder='Add Number' value={state} onChange={onHandleChange}></input>
        <button onClick={onClickChange}>Add</button>

        <div>
            <ul>
                {number.map((t,i)=>(
                    <li key={i}>{t}

                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Main