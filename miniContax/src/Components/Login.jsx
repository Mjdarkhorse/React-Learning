import React,{useState,useContext } from 'react'
import UserContext from '../Contax/UserContax'

const Login = () => {
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const{setUser} = useContext(UserContext);
    const handelSubmit=(e)=>{
e.preventDefault()
setUser({userName,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input value={userName} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Username'/>{" "}
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password'/>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
 