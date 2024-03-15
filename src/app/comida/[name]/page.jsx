import { comidas } from '@/app/comidas';
import './details.css';
import Image from 'next/image';
import { MdVerifiedUser } from "react-icons/md";
import { Button } from '@/app/components/button/Button';

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

                <h5>15KM DELIVERY</h5>
                <div className='ingredientes' >
                    <h5>INGREDIENTES</h5>
                    {
                        comida.ingredientes.map(ingrediente => (
                            <span>{ingrediente} <br /></span>
                        ))
                    }
                </div>

            </div>

        </div >
    );
};

export default comidaPage;
