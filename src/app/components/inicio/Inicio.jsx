import './inicio.css';
import { FaLocationDot } from "react-icons/fa6";


export const Inicio = () => {
    return (
        <div className='homeContainer'>
            <div className='detailsHome'>

                <h1>LA BARRA SPORT & BAR</h1>
                <p>CADA TRAGO CUENTA UNA HISTORIA</p>
                <button><span>RESERVAS</span></button>
                <div className='locationDetails' >
                    <FaLocationDot /> Av. Francisco Bilbao 3420
                </div>

            </div>
        </div>
    )
}
