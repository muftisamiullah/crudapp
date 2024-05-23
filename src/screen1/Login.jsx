import React from 'react'
import {Link , useNavigate} from "react-router-dom"
import "./login.css"

const Login = () => {
const navigate = useNavigate();

const handlesubmit =(event)=>{
  event.preventDefault();
  navigate('/search');
};

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Log In </span></div>
           <form onSubmit={handlesubmit}>
          <div className="row"> 
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email or Phone" required/>
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
          <div className="pass">
          <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked"/>
          <label htmlFor="myCheckbox">Remember Me</label></div>
          <div className="row button">
            <input type="submit" value="Submit"/>
          </div>
          <div className="fgtpw-link"> <Link to="#">Forgot Password</Link></div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
