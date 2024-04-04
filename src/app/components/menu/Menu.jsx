"use client";

import { Productos } from './productos/Productos';
import './menu.css';
import { useEffect, useState } from 'react';
import { useStoreCart } from '@/app/store';

export const Menu = ({ products }) => {

    const { chargeProducts, productsInCart, error } = useStoreCart();
    const [localProducts, setLocalProducts] = useState([]);

    useEffect(() => {
        if (chargeProducts) {
            chargeProducts();
        }
    }, [chargeProducts]);

    if (error) console.error(error);

    return (
        <div className='menuPather' >
            <Productos products={products} />
        </div>
    )
}
