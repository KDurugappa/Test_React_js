import { useState } from 'react'
import './App.css'
import UseState from './componets/Usestate'
import UseEeffect from './componets/UseEeffect'
//import Firstcomponets from './componets/Firstcomponets'

function App() {
  const [count, setCount] = useState(0)

  const person = {name:"Durugappa",age:27}

  return (
    <>
    {/* <Firstcomponets  {...person} /> */}
    {/* <UseState  {...person} />
    <UseEeffect /> */}
      <div className='text-blue-800 bg-green-400'>This is for Tailwindow CSS</div>
      <div className="bg-blue-200 px-3 py-1 rounded-full">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
