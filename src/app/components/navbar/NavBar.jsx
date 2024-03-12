import './navbar.css';

export const NavBar = () => {
    return (
        <nav className='navContainer' >
            <h1 className='semiLight' >LA BARRA</h1>
            <ul>
                <li>INICIO</li>
                <li>MENÚ</li>
                <li>RESERVAS</li>
                <li>DELIVERY</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    )
}
