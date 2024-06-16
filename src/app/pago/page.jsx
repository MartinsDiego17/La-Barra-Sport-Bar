"use client";
import './pago.css';
import tb from '../../app/images/transbank.webp';
import Image from 'next/image';
import { useStoreCart } from '../store';
import { RiCustomerService2Fill } from "react-icons/ri";
import { getCost } from './getLocation';

import { useState, useEffect } from "react";

const page = () => {

    const { chargeProducts } = useStoreCart();
    const [localProducts, setLocalProducts] = useState([]);
    const [text, setText] = useState("Ir a pagar");
    const [delivery, setDelivery] = useState(0);
    const [option, setOption] = useState({
        delivery: "",
        local: "",
    })
    const [code, setCode] = useState(0);
    const [confirm, setConfirm] = useState(false);
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
        const fetchCost = async () => {
            try {
                const deliveryCost = await getCost();
                setDelivery(deliveryCost);
                if (deliveryCost === 0.1) {
                    setDelivery(0);
                    setDisabled(true);
                }
                return deliveryCost;
            } catch (error) {
                console.error("Error al obtener el costo del delivery:", error);
                return null;
            }
        };
        if (op === 1) {
            fetchCost();
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
    };

    const handlePay = () => {
        setConfirm(true);
        setCode(1234);
    }

    if (confirm && option.local) return (
        <div id='boxPay' className='localConfirm' >
            <div>
                <button>PAGAR CON TRANSBANK</button>
                <h3>HAZ CONFIRMADO EXITOSAMENTE TU PEDIDO</h3>
                <p>TU CÓDIGO DE ENTREGA ES <span className='codigo' >{code}</span></p>
                <h4>MUÉSTRALE EL CÓDIGO A CUALQUIER GARZÓN Y RETIRA TU PEDIDO</h4>
            </div>
        </div>
    )
    if (confirm && option.delivery) return (
        <div id='boxPay'  >
            <h1>DELIVERY</h1>
        </div>
    )

    return (
        <>
            {
                localProducts.length > 0 ?
                    <div className='payContainer' id='boxPay' >

                        <section className='optionsAndResume' >

                            <article className='optionsPay' >
                                <h3>Selecciona la opción de entrega</h3>
                                <div onClick={() => { handleOption(1) }} id={option.delivery} >
                                    <h5>DELIVERY</h5>
                                    <span className='circleCheck' ></span>
                                </div>
                                <div onClick={() => { handleOption(2) }} id={option.local} >
                                    <h5>RETIRO EN LOCAL</h5>
                                    <span className='circleCheck' ></span>
                                </div>
                                <h3 className='metods' >Métodos de pago</h3>
                                <ul>
                                    <li><Image src={tb} width={100} height={80} /></li>
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
                                    Costos de envío
                                    <p className='messageDelivery' >(a partir de 1.5km)</p>
                                    <span>$ {delivery}</span>
                                </h5>
                                <h5>Pagas <span>$  {total}</span></h5>

                                <h3 className='timeTarget' >
                                    Tiempo de espera estimado  <span className="time">45 minutos</span>
                                </h3>
                                <button onClick={handlePay} disabled={disabled} className='buttonResume' >
                                    {text}
                                </button>
                                <h6 className='atention'>
                                    Servicio al cliente <span><RiCustomerService2Fill /></span>
                                </h6>
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
