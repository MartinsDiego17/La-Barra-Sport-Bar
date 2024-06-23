"use client";

import Image from "next/image";
import mp from '../../../images/mp.webp';
import { useEffect, useState } from "react";

const OpcionesEntrega = ({ handleOption, option, setDisabled, direcciones, setDirecciones }) => {

    useEffect(() => {
        if (option.delivery) {
            if (
                direcciones.direccion.length < 1 ||
                direcciones.primerEntrecalle.length < 1 ||
                direcciones.segundaEntrecalle.length < 1
            ) {
                setDisabled(true);
                return;
            }
            setDisabled(false);
        }
    }, [option, direcciones]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setDirecciones({
            ...direcciones,
            [name]: value
        });
        if (
            direcciones.direccion.length < 1 ||
            direcciones.primerEntrecalle.length < 1 ||
            direcciones.segundaEntrecalle.length < 2
        ) {
            setDisabled(true);
            return;
        }
        setDisabled(false);
    }

    return (
        <article className='optionsPay' >
            <h3>Selecciona la opción de entrega</h3>

            <div onClick={() => { handleOption(1) }} id={option.delivery} >
                <h5>DELIVERY</h5>
                <span className='circleCheck' ></span>
            </div>
            <input value={direcciones.direccion}
                name="direccion"
                type="text"
                placeholder="Ingresar dirección"
                onChange={handleChange}
                className={option.delivery && direcciones.direccion.length < 1 && "emptyInput"}
                autoComplete="off"
            />

            <input value={direcciones.primerEntrecalle}
                name="primerEntrecalle"
                type="text"
                placeholder="Ingresar primer entrecalle"
                onChange={handleChange}
                className={option.delivery && direcciones.primerEntrecalle.length < 1 && "emptyInput"}
                autoComplete="off"
            />

            <input value={direcciones.segundaEntrecalle}
                name="segundaEntrecalle"
                type="text"
                placeholder="Ingresar segunda entrecalle"
                onChange={handleChange}
                className={option.delivery && direcciones.segundaEntrecalle.length < 1 && "emptyInput"}
                autoComplete="off"
            />

            <div onClick={() => { handleOption(2) }} id={option.local} >
                <h5>RETIRO EN LOCAL</h5>
                <span className='circleCheck' ></span>
            </div>

            <h3 className='metods' >Métodos de pago</h3>
            <ul>
                <li className="imgMetod" ><Image alt="metodo" src={mp} width={100} height={25} /></li>
            </ul>
        </article>
    )
}

export default OpcionesEntrega;
