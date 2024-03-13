'use client';

import './navbar.css';

export const NavBar = () => {

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav className='navContainer' >
            <h1 className='semiLight' onClick={() => scroll()} >LA BARRA</h1>
            <ul>
                <li onClick={() => scroll()} >INICIO</li>
                <li onClick={() => scroll()} >NOSOTROS</li>
                <li onClick={() => scroll()} >MENÚ</li>
                <li onClick={() => scroll()} >CONTACTO</li>
                <li onClick={() => scroll()} >RESERVAS</li>
            </ul>
        </nav>
    )
}
