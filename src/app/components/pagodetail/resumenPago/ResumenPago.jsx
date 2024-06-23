import { RiCustomerService2Fill } from "react-icons/ri";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { crearPreferencia } from "@/app/pago/pago";
import { useEffect, useState } from "react";
initMercadoPago("APP_USR-4a3ad9e7-3ca4-49e1-ba8f-c502b2a909cf", { locale: "es-AR" });

const ResumenPago = ({
    products,
    subtotal,
    deliveryPrice,
    total,
    handlePay,
    disabled,
    direcciones
}) => {

    const [preferenceId, setPreferenceId] = useState(null);
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");

    const handleLocalPay = async () => {
        if (count) return;
        setCount(1);
        const id = await crearPreferencia(products, total, username, direcciones);
        if (id) {
            setPreferenceId(id);
        }
    }

    useEffect(() => {
        setUsername(username);
    }, [username, setUsername]);

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <article className='resumePay' >
            <h3>Resumen de compra</h3>
            <h5>
                {
                    products.length > 1 ? `Productos (${products.length})`
                        : `Producto (${products.length})`
                }
                <span>$ {subtotal}</span>
            </h5>
            <h5>
                Costos de envío
                <span>$ {deliveryPrice}</span>
            </h5>
            <h5>Pagas <span>$  {total}</span></h5>

            <input
                type="text"
                placeholder="Ingresa tu nombre"
                className={`checkUsername ${!username.length && "emptyCheckusername"}`}
                onChange={handleNameChange}
            />

            <button
                id="checkout-btn"
                onClick={handleLocalPay}
                disabled={disabled || !username.length}
                className='buttonResume'>
                Pagar
            </button>
            <h6 className='atention'>
                <a href='https://wa.me/543417506932' target='_blank' >
                    Servicio al cliente <span><RiCustomerService2Fill /></span>
                </a>
            </h6>
            {
                preferenceId && username.length > 0 && !disabled && <Wallet
                    initialization={{ preferenceId: preferenceId }}
                    customization={{ texts: { valueProp: 'smart_option' } }} />
            }
        </article>
    )
}

export default ResumenPago
