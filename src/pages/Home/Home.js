import React from 'react'
import './Home.Module.css'
import imagebg from './img-bg.png'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
      
<div className='background' style={{ backgroundImage: `url(${imagebg})` }}>
        <div className='caixa-main'>
          <div className='caixa'>
              <h1>Eternizando momentos com <br /> <span>HD FILMES</span></h1>
          </div>
          <div className='caixa-botao'><Link to={'/sobre'}>Conheça nosso trabalho <FaArrowRightLong style={{position:'relative', top:'2', left: '0'}}/> </Link></div>
        </div>
      </div>
   
  )
}

export default Home;