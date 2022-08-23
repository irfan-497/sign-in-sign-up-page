import React from 'react'
import Signup from './Sign up/Signup'
import Signin from './Sign in/Signin'
import {Routes,Route } from "react-router-dom"


function App() {
  return (
    <div>    
      
         <Routes>
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
       </Routes>   
    </div>
  )
}

export default App
