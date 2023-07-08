import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";
import './login.css'

const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
    const dispatch=useDispatch()
  const handleClick=(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }
  return (
    <div className="Container">
      <div className="Wrapper">
        <h1 className="Title">SIGN IN</h1>
        <form className="Form">
          <input className="Input" placeholder="username" onChange={(e)=>{
            setUsername(e.target.value)
          }} />
          <input className="Input" placeholder="password" type="password" onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <button className="Button" onClick={handleClick} >LOGIN</button>

        </form>
      </div>
    </div>
  );
};

export default Login;