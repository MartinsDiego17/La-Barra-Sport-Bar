"use client";

import { useEffect, useState } from 'react';
import { Button } from '../../button/Button';
import { useStoreCart } from '../../store';
import './carrito.css';
import EmptyCart from '../emptyCart/EmptyCart';
import CardCart from '../cardCart/CardCart';

const Carrito = () => {

    const { productsInCart, chargeProducts, clearProducts, removeProduct } = useStoreCart();
    const [localProducts, setLocalProducts] = useState([]);
    const [overflowStyle, setOverflowStyle] = useState('hidden');
    const [cartCleared, setCartCleared] = useState(false);

    const empty = () => {
        clearProducts();
        setCartCleared(!cartCleared);
    }

    useEffect(() => {
        if (localProducts.length > 5) {
            setOverflowStyle('scroll');
        } else {
            setOverflowStyle('hidden');
        }
    }, [localProducts.length]);

    const handleRemove = (id) => {
        removeProduct(id)
        setCartCleared(!cartCleared);
    }

    useEffect(() => {
        if (chargeProducts) {
            setLocalProducts(chargeProducts())
        }
    }, [chargeProducts, cartCleared]);


    const handleGoHome = () => {
        window.location.href = "/";
    }

    let subtotal = 0;

    localProducts.forEach(local => {
        subtotal += local.price
    })

    return (
        <section className='cartContainer' >

            {
                localProducts.length < 1 && <article className='empty' id='empty' ><EmptyCart /></article>
            }

            {
                localProducts.length > 0
                &&
                <>
                    <article className='mappeds' style={{ overflowY: overflowStyle }} >
                        {
                            localProducts.map((local, index) => (
                                <div key={local.id * index} >
                                    <CardCart
                                        id={local.id}
                                        name={local.name}
                                        price={local.price}
                                        image={local.image}
                                        quantity={local.quantity}
                                        fn={handleRemove}
                                    />
                                </div>
                            ))
                        }
                    </article>
                    <article className='subtotal' >
                        <h2>Subtotal</h2>
                        <p>${subtotal}</p>
                        <Button text={"Ir a pagar"} />
                        <Button text={"Vaciar carrito"} fn={empty} />
                        <Button text={"Seguir comprando"} fn={handleGoHome} />
                    </article>
                </>
            }


        </section>
    )
}

export default Carrito
