'use client';

import './navbar.css';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export const NavBar = () => {

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav className='navContainer' >
            {window.location.pathname !== "/" ? (
                <a href="/"><h1 className='semiLight' onClick={() => scroll()} >LA BARRA</h1></a>
            ) : (
                <h1 className='semiLight' onClick={() => scroll()} >LA BARRA</h1>
            )}
            <ul>
                <li onClick={() => scroll()} >INICIO</li>
                <li onClick={() => scroll()} >NOSOTROS</li>
                <li onClick={() => scroll()} >MENÚ</li>
                <li onClick={() => scroll()} >CONTACTO</li>
                <li onClick={() => scroll()} >RESERVAS</li>
                <li className='iconNav' onClick={() => scroll()} ><span className='light' ><FaUser /></span></li>
                <li className='iconNav' onClick={() => scroll()} ><span className='light' ><FaShoppingCart /></span></li>
            </ul>
        </nav>
    )
}
