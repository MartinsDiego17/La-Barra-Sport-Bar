import './cardcart.css';
import burga from '../../images/comidas/dragon.jpg'
import Image from 'next/image';
import { FaTrash } from "react-icons/fa6";
import { useStoreCart } from '@/app/store';
import { useEffect } from 'react';

const CardCart = ({ id, name, /* image, */ price, fn }) => {

    const image = burga;

    return (
        <div className='cardCartContainer' >
            <h4>{name.toUpperCase()}</h4>
            <h4>${price}</h4>
            <Image src={image} alt='name' width={50} height={50} />
            <h4 className='trash semiLight' onClick={() => fn(id)} ><FaTrash /></h4>
        </div>
    )
}

export default CardCart
