import React from 'react'
import Sachin from '../images/Sachin.png'
import Ankit from '../images/Ankit.png'
import Deepanshi from '../images/Deepanshi.png'
import Avnish from '../images/Avnish.png'
export default function MeetTeam() {
  return (

      <div style={{padding:"30px"}} className='flex-collumn'>
     <h1 style={{color:"#CE1356"}}>MEET THE TEAM</h1>
     <div className='teamConatiner'>
    <img src={Sachin} alt='Fouder'/>
    <img src={Ankit} alt='CEO'/>
    <img src={Deepanshi} alt='HR'/>
    <img src={Avnish} alt='Product Designer'/>
     </div>
    </div>
  )
}
