import React from 'react'
import Bird from '../images/DIAMOND1c 3.png'
export default function Navbar() {
  return (
    <>
    
    <img src={Bird} alt='Logo' />
    <span className='line'></span>
    <div className='navbarSection'>
 

  <nav>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
    </ul>
  </nav>


    </div>
    </>
  )
}
