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

            {window.location.pathname == "/" ? (
                            <ul className='itemsNav' >
                            <li onClick={() => scroll()} >Inicio</li>
                            <li onClick={() => scroll()} >Menú</li>
                            <li onClick={() => scroll()} >Nosotros</li>
                            <li onClick={() => scroll()} className='liprueba' >Contacto</li>
                        </ul>
            ) : (
                <ul className='itemsNav' >
                <li onClick={() => scroll()} >Inicio</li>
                <li onClick={() => scroll()} >Productos relacionados</li>
                <li onClick={() => scroll()} >Contacto</li>
            </ul>
            )}

            <ul className='userAndCart' >
                <li onClick={() => scroll()} >Ingresar</li>
                <li onClick={() => scroll()} >Carrito de compras</li>
            </ul>

        </nav>
    )
}
