import React from 'react'
import './sign up.css'
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>    
      <div>
         <h1>
          Sign up
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
          <button type="submit" class="signupbtn">Sign Up</button>
          </div>
         </div>
        </form>
      </div>
      <div className='anis'> 
        <span>
          Already registerd ?
        </span>
        
        <Link to="/signin"  style={{fontSize:"20px"}}>Sign in</Link>
        
      </div>
    </>
  )
}

export default Signup