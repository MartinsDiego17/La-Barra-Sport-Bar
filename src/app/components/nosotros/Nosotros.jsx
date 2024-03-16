import Image from 'next/image';
import './nosotros.css';
import bar from '../../images/bar.jpg';
import drink from '../../images/bar2.jpg';

export const Nosotros = () => {
    return (
        <div className='nosotrosContainer' >

            <div className='info' >
                <Image src={bar} alt='Bar' width={300} height={250} />
                <div>
                    <h5 className='semiLight' >Nosotros</h5>
                    <p>La Barra Sport & Bar es un bar deportivo dedicado a todos los apasionados del buen comer y del espíritu deportivo. Acá podrás sentir toda la emoción que transmite un partido de futbol compartido con amigos.</p>
                </div>
            </div>

            <div className='info' >
                <div>
                    <h5 className='semiLight' >¿Donde estamos?</h5>
                    <p>Nos puedes encontrar en Avenida Francisco Bilbao 3420 de lunes a domingos de 13:00PM a 3:00AM.</p>
                </div>
                <Image src={drink} alt='Trago' width={300} height={250} />
            </div>

        </div>
    )
}
