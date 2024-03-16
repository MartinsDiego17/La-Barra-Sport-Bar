import { comidas } from '@/app/comidas';
import './details.css';
import Image from 'next/image';
import { MdVerifiedUser } from "react-icons/md";
import { Button } from '@/app/components/button/Button';
import visaUrl from '../../images/tarjetas/visa.png';
import masterCardUrl from '../../images/tarjetas/mastercard.png';
import americanUrl from '../../images/tarjetas/american.png';
import { FaLocationDot } from "react-icons/fa6";

const comidaPage = ({ params }) => {

    const name = decodeURIComponent(params.name);


    const comida = comidas.find(comida => comida.name === name);

    return (
        <div className="detailContainer" >


            <Image width={200} height={200} src={comida?.image} alt={comida?.name} />

            <div className='productDetails' >

                <h1>{comida.name.toUpperCase()}</h1>
                <h5 className='stock' >EN STOCK <span><MdVerifiedUser /></span></h5>
                <h2>${comida.precio}</h2>
                <div className='productQuantity' >
                    <h5>CANTIDAD: 1</h5>
                    <button>+</button>
                    <button>-</button>
                </div>

                <div className='buttonShop' >
                    <Button text={'COMPRAR AHORA'} /> <br />
                    <Button text={'AGREGAR AL CARRITO'} />
                </div>


                <div className='payMetods' >
                    <h5>MÉTODOS DE PAGO</h5>
                    <div>
                        <Image src={visaUrl} alt='Visa' width={35} height={20} />
                        <Image src={masterCardUrl} alt='Master Card' width={35} height={20} />
                        <Image src={americanUrl} alt='American Express' width={35} height={20} />
                    </div>
                </div>

                <div className='ingredientes' >
                    <h5>INGREDIENTES</h5>
                    {
                        comida.ingredientes.map(ingrediente => (
                            <span>{ingrediente} <br /></span>
                        ))
                    }
                </div>

                <p><span className='iconLocationProduct' ><FaLocationDot />Av. Francisco Bilbao 3420</span></p>

            </div>

        </div >
    );
};

export default comidaPage;
