import Link from 'next/link';
import './emptycart.css';
import { PiHandbagLight } from "react-icons/pi";

const EmptyCart = () => {
    return (
        <div className='emptyContainer' >
            <h5><PiHandbagLight /></h5>
            <p>EMPIEZA UN CARRITO DE COMPRAS</p>
            <Link href={"/"} ><button>IR A COMPRAR</button></Link>
        </div>
    )
}

export default EmptyCart
