import React from 'react'

export default function Card(props) {

 


  return (
    <div className='card-continer flex-collumn '>
    <h3>{props.tittle}</h3>
    <div className='card' >
    <p>{props.content}</p>
    </div>
    </div>
  )
}
