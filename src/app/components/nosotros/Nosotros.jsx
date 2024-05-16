import Image from 'next/image';
import './nosotros.css';
import bar from '../../images/bar.webp';
import drink from '../../images/bar2.webp';
import Redes from '../footer/redes/Redes';
import Link from 'next/link';

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
                    <p>Nos puedes encontrar en Avenida Francisco Bilbao 3420 de lunes a domingos de 13:00PM a 3:00AM. <Link target='_blank' href={"https://www.google.com/maps/place/La+Barra+Sport+%26+Bar+-+Avenida+Francisco+Bilbao,+Iquique,+Chile/@-34.8201308,-58.470054,17z/data=!4m5!3m4!1s0x91521501c5150c77:0x7c775fb8f2859142!8m2!3d-20.2564345!4d-70.1331212?entry=ttu"} ><span>ver en el mapa</span></Link></p>
                </div>
                <Image src={drink} alt='Trago' width={300} height={250} />
            </div>

            <Redes />

        </div>
    )
}
