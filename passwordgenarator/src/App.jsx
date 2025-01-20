import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [cherecterallowed, setCherecterallowed] = useState(false);
  const [password, setPassword] = useState("");

  //UseRef Hook storing as a variable
  const passRef = useRef(null);

  //Password generated method 
  const passwordGenarator =useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str +='0123456789';
    if(cherecterallowed) str +='~!@#$%^&*()_+{}><?';
    for(let i=1; i<=length;  i++){
      let char = Math.floor(Math.random() * str.length + 1);


      pass +=  str.charAt(char);
    }
    setPassword(pass);


   
  },[length,numberallowed,cherecterallowed,setPassword]);

  const copypass= useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{passwordGenarator()},[length,numberallowed,cherecterallowed,passwordGenarator]);

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Genarator</h1>

     <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"  value={password} className='outline-none w-full py-1 px-3' placeholder='Password' ref={passRef} readOnly/>
  <button onClick={copypass} className='bg-blue-800 text-white'>Copy</button>
  
</div>
<div className=' flex text-sm gap-x-2'>
  <div className=' flex items-center gap-x-1' >
    <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} /><label htmlFor="">Length : {length}</label>
  </div>
  <div className=' flex text-sm gap-x-2'>
    <input type="checkbox" defaultChecked={numberallowed} id="numInput" onChange={()=>{setNumberallowed((prev)=>!prev);}} /><label>Number</label>
  </div>
  <div className=' flex text-sm gap-x-2'>
    <input type="checkbox" defaultChecked={cherecterallowed} id="cherInput" onChange={()=>{setCherecterallowed((prev)=>!prev);}} /><label>Charecter</label>
  </div>
</div>
     </div>
    </>
  )
}

export default App
