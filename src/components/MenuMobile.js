
import {Container} from './Styles'
import { IoClose } from 'react-icons/io5'
//Header
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

const MenuMobile = ({ menuisvisible, setMenuisvisible }) => {
    return (
        <Container isVisible={menuisvisible}>
            <IoClose size={45} className='close' onClick={() => setMenuisvisible(false) } /> {/*<<< alterando o estado do manu para false*/}
            <nav>
                <ul>
                    
                    <li>
                        <NavLink onClick={() => setMenuisvisible(false) }to={"/"}>Inicio</NavLink> {/* <<< também fechará o menu*/}
                    </li>
                    <li>
                        <NavLink onClick={() => setMenuisvisible(false) } to={"/sobre"}>Quem somos</NavLink> {/* <<< também fechará o menu*/}
                    </li>
                    <li>
                     <NavLink onClick={() => setMenuisvisible(false) } to={"/projetos"}>Nosso trabalho</NavLink>{/* <<< também fechará o menu*/}
                    </li>
                    <li>
                        <a className='button' href="#" target='blank' > <FaWhatsapp />CONTATO</a>
                       
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default MenuMobile