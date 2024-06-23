import { useEffect, useState } from 'react';
import './reservas.css';
import Swal from 'sweetalert2';

const Reservas = ({ type, days, mes, hours, options }) => {
    const [selectedHours, setSelectedHours] = useState({});
    const [month, setMonth] = useState('');
    const [renderedDays, setRenderedDays] = useState([]);
    const [selectedTable, setSelectedTable] = useState();

    const monthNames = [
        '', 'enero', 'febrero', 'marzo', 'abril', 'mayo',
        'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const getMaxDays = (month) => {
        switch (month) {
            case 2: return 28;
            case 4: case 6: case 9: case 11: return 30;
            default: return 31;
        }
    };
    useEffect(() => {

        let currentMonth = mes;
        let currentDay = days[0];
        const newRenderedDays = [];

        days.forEach(day => {
            if (currentDay > getMaxDays(currentMonth)) {
                currentDay = 1;
                currentMonth = currentMonth === 12 ? 1 : currentMonth + 1;
            }
            newRenderedDays.push({ day: currentDay, month: currentMonth });
            currentDay++;
        });

        setMonth(monthNames[currentMonth]); 
        setRenderedDays(newRenderedDays);
    }, [mes, days]);
    const handleHourClick = (day, month, hour) => {
        setSelectedHours({ day, month, hour });
    };
    const validationsDisabled = () => {
        if (type && type === "bar") {
            if (
                !selectedTable ||
                selectedTable === undefined ||
                Object.keys(selectedHours).length === 0) return true;
        }
        if (type && type === "cancha") {
            if (
                Object.keys(selectedHours).length === 0) return true;
        }
    };
    const handleMessage = () => {
        const { day, month, hour } = selectedHours;
        const phoneNumber = '3417506932';
        let message;

        if (type && type === "bar") message = `Hola! Quisiera reservar la mesa ${selectedTable} en el restaurant para el día ${day} de ${month} a las ${hour}HS.¿Podría confirmarme la disponibilidad? ¡Gracias!`;
        if (type && type === "cancha") message = `Hola! Quisiera reservar la cancha para el día ${day} de ${month} a las ${hour}HS.¿Podría confirmarme la disponibilidad? ¡Gracias!`;

        const url = `https://wa.me/549${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    const handleCancel = () => {
        Swal.fire({
            title: "¿Quieres cancelar la reserva?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            }
        });
    };
    const handleTable = (table) => {
        setSelectedTable(table);
    };

    return (
        <div className='reservasContainer'>
            <section>
                <article className='title'>
                    <h1>
                        {
                            type &&
                            type === "bar" && "RESERVA TU MESA" ||
                            type === "cancha" && "RESERVA DE CANCHA"
                        }
                    </h1>
                    <p>Las reservas se pueden hacer hasta con una semana de anticipación</p>
                </article>

                <article className='fechas'>
                    {renderedDays.map(({ day, month }, index) => (
                        <div key={index} className='day'>
                            <h4>{day} de {monthNames[month]}</h4>
                            {hours.map(hour => (
                                <div key={hour}>
                                    <button
                                        className={selectedHours.day === day && selectedHours.hour === hour ? 'selected' : ''}
                                        onClick={() => handleHourClick(day, monthNames[month], hour)}
                                    >
                                        {hour}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </article>

                {type && tables.length > 0 && type === 'bar' && (
                    <div className='tablesFather'>
                        <h3>MESAS</h3>
                        <div className='tablesContainer' >
                            {
                                tables.map(table => (
                                    <div key={table} >
                                        <button onClick={() => handleTable(table)} className={selectedTable === table ? 'selected' : ''} >
                                            {table}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}

                <article className='buttonsReserva'>
                    <button onClick={handleMessage} disabled={validationsDisabled()}>Consultar disponibilidad</button>
                    <button onClick={handleCancel} >Cancelar reserva</button>
                </article>
            </section>
        </div>
    );
};

export default Reservas;
