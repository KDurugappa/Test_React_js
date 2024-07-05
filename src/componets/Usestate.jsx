import React from 'react'
import {useState} from 'react'
const UseState = (props) => {

  const [count,setCount] = useState(0);

  const[name1, setName] = useState('');

  

  const increment = ()=>{

    setCount(count+1);

  }
  const decrement = ()=>{
    setCount(count-1)
  }


  return (
    <div>
      <h1>Wel come to </h1>
      <h1>{props.name},{props.age}</h1>
       <button onClick={increment}>Add</button>
       <h1>{count}</h1>
       <button onClick={decrement}>Sub</button>

       <h1>Enter here:{name1}</h1>

       <input type="text"  onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default UseState
