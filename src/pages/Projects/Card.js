import React from 'react'
import './Card.css'


const Card = ({name, image, link}) => {
  return (
    <div className='container_project'>
        <a href={link} target='_blank'>
          <div className='image_project'><img src={image} alt={name}></img></div>
        </a>
        <div className='referencias'>
            <h3>{name}</h3>
            <a href={link} target='_blank'>Veja no nosso instagram!</a>
        
        </div>
    </div>
  )
}

export default Card