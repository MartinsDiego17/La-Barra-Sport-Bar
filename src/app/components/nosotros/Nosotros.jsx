import Image from 'next/image';
import './nosotros.css';
import bar from '../../images/bar.webp';
import drink from '../../images/bar2.webp';
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import Redes from '../footer/redes/Redes';

export const Nosotros = () => {
    return (
        <div className='nosotrosContainer' >

            <div className='info' >
                <Image src={bar} alt='Bar' width={300} height={250} />
                <div>
                    <h5 className='semiLight' >Nosotros</h5>
                    <p>
                        La Barra Sport & Bar es el lugar favoritos de los apasionados del buen comer y beber, y del deporte. Acá podrás disfrutar los mejores platos de comida de distintas regiones y países, acompañado de unos maravillosos tragos mientras que disfrutas de un partido con amigos.
                    </p>
                </div>
            </div>

            <div className='info' >
                <div>
                    <h5 className='semiLight' >¿Donde estamos?</h5>
                    <p>Nos puedes encontrar en Avenida Francisco Bilbao 3420 de lunes a domingos de 13:00PM a 3:00AM.</p>
                </div>
                <Image src={drink} alt='Trago' width={300} height={250} />
            </div>

            <Redes />

        </div>
    )
}
