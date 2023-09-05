import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../images/logo.jpg'
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";


const Header = ({setMenuisvisible}) => { 

  return (
    <header className={styles.nav}>
        <div>
            <NavLink to={"/"}><img src={logo} alt="Logo" className={styles.logo} /></NavLink>
            
        </div>
        <div>
            <AiOutlineMenu onClick={() => setMenuisvisible(true)} className={styles.icon_menu}/>
        </div>
        <nav>
            <ul className={styles.linklist}>
                <li>
                   <NavLink to={"/"} className={({isActive}) => (isActive ? styles.active: '')}>Inicio</NavLink>
                </li>
                <li>
                   <NavLink to={"/sobre"}className={({isActive}) => (isActive ? styles.active: '')} >Quem somos</NavLink>
                </li>
                <li>
                   <NavLink to={"/projetos"}className={({isActive}) => (isActive ? styles.active: '')} >Nosso trabalho</NavLink>
                </li>
                <li>
                    <a className={styles.button} href="#" target='blank' > <FaWhatsapp/>CONTATO</a>
                    <div>
               
                     </div>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header