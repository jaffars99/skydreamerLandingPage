import React from 'react'
import Image1 from '../images/IMG_1901 1.png'
import Image2 from '../images/IMG_1917 1.png'
import Image3 from '../images/IMG_1909 1.png'
export default function Philosophy() {
  return (
    <div style={{padding:"30px"}} className='flex-collumn'>
    <h1 style={{color:"#CE1356"}}>OUR PHILOSOPHY</h1>
   <p style={{padding:"2%"}}>
   When countless young minds collaborate tirelessly, day and night, a remarkable creation emerges.
   </p>
  <div className='container_philos'>
  <div className='philos_card'>
   <h3>We engage in <br></br>collective planning</h3>
   <img src={Image1} alt='image1'/>
  </div>
  <div className='philos_card'>
   
   <img src={Image3} alt='image2'/>
   <h3>make decisions as a cohesive unit</h3>
  </div>
  <div className='philos_card'>
   <h3>above all, revel in the sheer enjoyment of our work!</h3>
   <img src={Image2} alt='image3'/>
  </div>

  </div>

    </div>
  )
}
