import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter_value = 5;

  const[counter,SetConter] = useState(5);

const add=()=>{
  console.log('Clicked',Math.random())
  if(counter<20){
    SetConter((prev)=>prev+1);
    SetConter((prev)=>prev+1);
    SetConter((prev)=>prev+1);

  }else{
    console.log('Can Not More than 20');
  }
  
}
const remove=()=>{
  
if(counter>0){SetConter((prev)=>prev-1);}else{
   console.log('Count can not in Minus');
}
  
}
  
  return (
    <>
    <h1>Counter Add{counter}</h1>
    <button onClick={add}>Add value</button>
    <br />
    <button onClick={remove}>Remove Value</button>
      
    </>
  )
}

export default App
