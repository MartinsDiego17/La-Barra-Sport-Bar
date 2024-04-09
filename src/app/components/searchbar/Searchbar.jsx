import { useEffect, useState } from 'react';
import './searchbar.css';

export const Searchbar = ({ fn, change }) => {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        fn(event.target.value);
    };

    useEffect(() => {
        setValue("");
    }, [change])

    return (
        <input value={value} className='searchbar' onChange={handleChange} type="text" placeholder='¿Qué estás buscando?' />
    );
};
