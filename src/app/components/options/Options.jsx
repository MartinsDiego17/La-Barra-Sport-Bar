"use client";
import './options.css';

const Options = () => {

    const handleRoute = (op) => {
        if (op === 0) window.location.href = "/reservas/cancha";
        if (op === 1) window.location.href = "/reservas/restaurant";
    }

    return (
        <div className='optionsContainer' >

            <div className='cancha' >
                <div id='infoOption' >
                    <h2 className='light' >Cancha de Futbol 5</h2>
                    <p>de lunes a domingos</p>
                    <p>de 9:00AM a 18:00PM</p>
                    <button onClick={() => handleRoute(0)} >Reservar ahora</button>
                </div>
            </div>

            <div className='bar' >
                <div id='infoOption' >
                    <h2 className='light' >Restaurante / Bar</h2>
                    <p>de lunes a domingos</p>
                    <p>de 9:00AM a 18:00PM</p>
                    <button onClick={() => handleRoute(1)} >Reservar ahora</button>
                </div>
            </div>

        </div>
    )
}

export default Options
