import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = ()=>{
    setCounter(counter + 1);
  } 
  const reset = ()=>{
      setCounter(0);
  } 
  const decrease = ()=>{
    if(counter>0){
      setCounter(counter - 1);
    }
  } 

  return (
    <div className='container'>
      <h1 className='counterHeading'>Assignment-2 Counter Application</h1>
      <h1 className='counter'>{counter}</h1>
      <div>
        <button onClick={increase}>Increase +</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease -</button>
      </div>
    </div>
  )
}
export default App
