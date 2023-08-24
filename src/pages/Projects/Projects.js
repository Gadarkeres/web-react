import React from 'react'
import Card from './Card'
import styles from './Projects.Module.css'
import { FaArrowRight } from "react-icons/fa6";
// images
import img1 from "./img1.jpg"
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'

const Projects = () => {

  //names
  const name1 = "Fabiana e Antonio"
  const name2 = "Priscilla e Pedro"
  const name3 = "Cris Mello e Wesley"
  const name4 = "Anna Clara"

  // links

  const link1 = "https://www.instagram.com/reel/CsCuiPntkJ1/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
  const link2 = "https://www.instagram.com/reel/Cq1PJEhs9wk/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
  const link3 = "https://www.instagram.com/reel/CwOF56jqDEr/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
  const link4 = "https://www.instagram.com/reel/CvjY1qHAyU_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
  



  
  return (
    <div className='principal'>
      <div className="container_box">
        <Card name = {name1} image = {img1} link={link1}/>
        <Card name = {name2} image = {img2} link = {link2} />
        <Card name = {name3} image = {img3}  link = {link3}/>
        <Card name = {name4} image = {img4} link = {link4} />
      
      </div>
    </div>
   
  )
}

export default Projects