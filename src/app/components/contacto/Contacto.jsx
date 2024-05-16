import { Button } from '../../button/Button';
import './contacto.css';

export const Contacto = () => {
    return (
        <div className='contactContainer' >
            <h1>
                ¿TE QUEDASTE CON DUDAS O INQUIETUDES? <br />
                <span className='semiLight' >NO DUDES EN CONTACTARNOS</span>
            </h1>
            <a href='https://wa.me/543417506932' target='_blank' ><Button text={"ENVIAR MENSAJE"} /></a>
        </div>
    )
}
