import { Button } from '../button/Button';
import './inicio.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

export const Inicio = () => {
    return (
        <div className='homeContainer'>
            <div className='detailsHome'>

                <div className='arriba'>
                    <h1>LA BARRA SPORT & BAR</h1>
                    <p>DONDE EL SABOR SE UNE A LA EMOCIÓN</p>
                </div>

                <div className='abajo' >
                    <Button text={"reservas"} />
                    <div className='locationDetails' >
                        <FaLocationDot /> Av. Francisco Bilbao 3420 
                    </div>
                </div>

            </div>
        </div>
    )
}
