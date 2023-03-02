import React from 'react'
import Home from './components/Home'
import Quote from './components/Quote'
import {Route, Routes} from 'react-router-dom'




export default function App() {
  return (
    

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quote' element={<Quote/>}/>
    </Routes> 
   
    
  ) 
}
 