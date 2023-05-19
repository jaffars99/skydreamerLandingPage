import React from 'react'
// import click from '../images/1 click -Logo for Light BG 10.png'
import Appolo from '../images/Apollo-Tyre-Logo-PNG-HD-New 1.png'
import Azure from '../images/image 82 (1) 1.png'
import Syska from '../images/syska 1.png'
// import JwMArriot from '../images/pngegg 1.png'
// import UNS from '../images/image_105-removebg-preview 1.png'
// import Atus from '../images/image 104 1.png'
export default function ColaboratedClient() {
  return (
    <div style={{padding:"30px"}} className='flex-collumn'>
     <h1 style={{color:"#CE1356"}}>TESTIMONIALS</h1>
     <div className='clientConatiner'>
        <div className='client_card'>
        <img src={Azure} alt='Azure'/>
       <p>
       Thanks to their genius, our brand has
become an unforgettable experience,
and our competitors are left scrambling to catch up.
       </p>
        </div>
        <div className='client_card'>
        <img src={Appolo} alt='Azure'/>
       <p>
       If marketing were an art form, SKYDREAMERS 
would be the Picasso of the industry. 
Their ability to blend strategic thinking with 
artistic brilliance is unparalleled. Every campaign
they create is a masterpiece that
leaves our audience spellbound.
       </p>
        </div>
        <div className='client_card'>
        <img src={Syska} alt='Azure'/>
       <p>
       With their enchanting ideas and unrivaled expertise,
they transformed our brand from a mere whisper 
to a resounding roar. They waved their creative wands
 and conjured up campaigns that left our audience awestruck.
       </p>
        </div>
     </div>
    </div>
  )
}
