import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    
  return (
    
    <div className='home--container'>
        <h1 className='home--heading'>WELCOME <br/> TO <br/> RANDOM QUOTES MACHINE</h1>
        <Link to='/quote'><button className='home--button'>START</button></Link>
    </div>
    
  )
}



 
    
 

