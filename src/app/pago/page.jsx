"use client";
import './pago.css';
import tb from '../../app/images/transbank.webp';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useStoreCart } from '../store';

const page = () => {

    const { chargeProducts } = useStoreCart();
    const [localProducts, setLocalProducts] = useState([]);
    const [text, setText] = useState("Ir a pagar");
    const [delivery, setDelivery] = useState(0);
    const [option, setOption] = useState({
        delivery: "",
        local: "",
    })
    const [disabled, setDisabled] = useState(true);
    let subtotal = 0;
    chargeProducts().forEach(product => {
        subtotal += product.price;
    })
    let total = subtotal + delivery;

    useEffect(() => {
        setLocalProducts(chargeProducts());
    }, []);

    const handleOption = (op) => {

        setDisabled(false);

        if (op === 1) {
            setDelivery(2000);
            setOption({
                delivery: "selected"
            });
            setText("Ir a pagar");
            return;
        }
        setDelivery(0);
        setOption({
            local: "selected"
        })
        setText("Confirmar pedido");
    }

    return (
        <>
            {
                localProducts.length > 0 ?
                    <div className='payContainer' >

                        <section className='optionsAndResume' >

                            <article className='optionsPay' >
                                <h3>Selecciona la opción de entrega</h3>
                                <div onClick={() => { handleOption(1) }} id={option.delivery} >
                                    <h5>DELIVERY</h5>
                                    <p>Consultar costos de envío</p>
                                </div>
                                <div onClick={() => { handleOption(2) }} id={option.local} >
                                    <h5>RETIRO EN LOCAL</h5>
                                </div>
                                <h3 className='metods' >Métodos de pago</h3>
                                <ul>
                                    <li><Image src={tb} width={70} height={21} /></li>
                                    <li><h4>EFECTIVO</h4></li>
                                </ul>
                            </article>

                            <article className='resumePay' >
                                <h3>Resumen de compra</h3>
                                <h5>
                                    {
                                        localProducts.length > 1 ? `Productos (${localProducts.length})`
                                            : `Producto (${localProducts.length})`
                                    }
                                    <span>$ {subtotal}</span>
                                </h5>
                                <h5>
                                    Costos de envío <span>$ {delivery}</span>
                                </h5>
                                <h5>Pagas <span>$  {total}</span></h5>

                                <h3 className='timeTarget' >
                                    Tiempo de espera estimado  <span className="time">45 minutos</span>
                                </h3>
                                <button disabled={disabled} className='buttonResume' >{text}</button>
                            </article>

                        </section>

                    </div>
                    :
                    <div className='noProducts' >
                        <h1>Aún no haz agregado productos al carrito.</h1>
                        <button onClick={() => { window.location.href = "/" }} >Ir a comprar</button>
                    </div>
            }
        </>
    )
}

export default page 
