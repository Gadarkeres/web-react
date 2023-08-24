import styles from './Footer.module.css'
import {FaSquareFacebook, FaInstagram, FaLocationDot} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className= {styles.msg}>
        <p>HD FILMES CINEMATROGRÁFICO</p>
        <p> <FaLocationDot/>Maringá, Paraná, Brasil</p>
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()} <br></br> HD Filmes Cinematográfico.</p>
        </div>
        <div className={styles.icons_container}>
           <ul className={styles.social_list}>
            <li><a href="https://www.facebook.com/filmescinematografico.com.br/?locale=pt_BR" target='_blank'><FaSquareFacebook/></a></li>
            <li><a href="https://www.instagram.com/hdfilmes_cinematografico/" target='_blank'><FaInstagram/></a></li>
           </ul>
        </div>
    </footer>
  )
}

export default Footer