import React from 'react'
import Card from './card'

export default function ServiceHead() {
  return (
     <div className='service_heading  flex-collumn'>
        <div style={{ width: "100%", textAlign: "center", paddingBottom: "3rem",marginTop:"2rem" }} className='black fade-in'>

<h1 className='services-heading_2' style={{ fontSize: "5rem" }}>OUR</h1>

<h1 className='services-heading_1' style={{ fontSize: "5rem" }}>SERVICES</h1>

</div>
  <div className='flex-collumn'>
  <h1 style={{color:"#CE1356"}}>Brand identity</h1>
  <p style={{width:"40%",textAlign:"center",lineHeight:"30px"}}>
  Skydreamers is not just a team of passionately driven creators, we
are a club that cultivates ideas, crafts strategies, and delivers
results that disrupt market trends and drive sales.
  </p>

  </div>
  <div className='services-content'>
  <Card tittle="App Development" content = "Our specialist developers are capable of creating attractive and engaging apps for you, regardless of their complexity." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
   <Card tittle="Graphic Designing" content = "Our team of expert 2D/3D craftsmen delivers a balance of perfection and artistry that will captivate the hearts of your audience." />
  </div>
     </div>
  )
}
