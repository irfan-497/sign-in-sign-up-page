import React from 'react'
import './sign in.css'
import { Link } from "react-router-dom";
function Signin() {
  return (
    <>    
      <div>
         <h1>
          Sign in
        </h1>
       </div>
       <div>
        <form>
         <div className='style'>
           <label>
            Email
          </label><br></br>
          <input type="text" required placeholder='Enter email'></input><br></br>
           <label>
            Password
          </label><br></br>
          <input type="password" required placeholder='Enter password'></input><br></br>
          <input type="checkbox"></input>
          <label>
            Remember me
          </label>
          <div class="clearfix">
          <button type="submit" class="signupbtn">Sign In</button>
          </div>
         </div>
        </form>
      </div>
          <div className='ani'> 
        <span>
        Not Registerd please Back to ,
        </span>
        <Link to="/signup" style={{fontSize:"20px"}}>Sign up</Link>
      </div>
    </>
  )
}

export default Signin