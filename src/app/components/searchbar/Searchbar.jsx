import './searchbar.css';

export const Searchbar = ({ fn }) => {
    const handleChange = (event) => {
        fn(event.target.value);
    };

    return (
        <input className='searchbar' onChange={handleChange} type="text" placeholder='¿Qué estás buscando?' />
    );
};
