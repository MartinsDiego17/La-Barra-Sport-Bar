"use client";

import './pagodetail.css';
import TakeAway from './takeAway/TakeAway';
import Delivery from './delivery/Delivery';
import OpcionesEntrega from './opcionesEntrega/OpcionesEntrega';
import ResumenPago from './resumenPago/ResumenPago';
import EmptyPay from './emptyPay/EmptyPay';
import { useState } from 'react';

const PagoDetail = ({
    products,
    deliveryPrice,
    option,
    codeConfirm,
    confirm,
    disabled,
    subtotal,
    total,
    handleOption,
    handlePay,
    setDisabled
}) => {

    const [direcciones, setDirecciones] = useState({
        direccion: "",
        primerEntrecalle: "",
        segundaEntrecalle: ""
    })

    if (confirm) {
        if (option.local) return <TakeAway code={codeConfirm} />;
        return <Delivery />
    }

    return (
        <>
            {
                products.length > 0 ?
                    <div className='payContainer' id='boxPay' >
                        <section className='optionsAndResume' >
                            <OpcionesEntrega
                                handleOption={handleOption}
                                option={option}
                                setDisabled={setDisabled}
                                direcciones={direcciones}
                                setDirecciones={setDirecciones}
                            />
                            <ResumenPago
                                products={products}
                                subtotal={subtotal}
                                deliveryPrice={deliveryPrice}
                                total={total}
                                handlePay={handlePay}
                                disabled={disabled}
                                direcciones={direcciones}
                            />
                        </section>
                    </div>
                    : <EmptyPay />
            }
        </>
    )
}

export default PagoDetail
