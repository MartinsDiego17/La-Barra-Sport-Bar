'use client';

import { comidas } from '@/app/comidas';
import { tragos } from '@/app/tragos';
import './productos.css';
import { Card } from '../card/Card';
import { Paginado } from '../paginado/Paginado';
import { Searchbar } from '../../searchbar/Searchbar';
import { useEffect, useState } from 'react';
import searchFn from './search';

export const Productos = () => {

    const [data, setData] = useState(comidas);
    const [btnSelected, setBtnSelected] = useState({
        comida: "btnSelected",
        bebida: ""
    });

    const [textNotFound, setTextNotFound] = useState("");

    useEffect(() => {
        if (btnSelected.comida.length > 1) {
            setTextNotFound("Lo siento, no tenemos esa comida.");
            return;
        } else if (btnSelected.bebida.length > 1) {
            setTextNotFound("Lo siento, no tenemos esa bebida.")
        }
    }, [btnSelected])

    const selectFood = () => {
        setData(comidas);
        setBtnSelected({
            bebida: "a",
            comida: "btnSelected"
        })
    }

    const selectDrink = () => {
        setData(tragos);
        setBtnSelected({
            comida: "a",
            bebida: "btnSelected"
        })
    }

    const mayor = () => {
        const newData = [...data].sort((a, b) => b.precio - a.precio);
        setData(newData);
    }

    const menor = () => {
        const newData = [...data].sort((a, b) => a.precio - b.precio);
        setData(newData);
    }

    const handleChange = (event) => {
        const selectedOption = event.target.value;

        if (selectedOption === "sinOrden") {
            if (data[0].category === "comida") {
                setData(comidas);
                return;
            }
            setData(tragos);
            return;
        }

        if (selectedOption === "mayor") {
            mayor();
        } else if (selectedOption === "menor") {
            menor();
        }
    }

    const handleSearch = (letters) => {

        let categoria;

        if (btnSelected.comida.length > 1) {
            categoria = "comida";
        } else if (btnSelected.bebida.length > 1) {
            categoria = "bebida";
        }

        if (letters.length < 4) {
            if (btnSelected.comida.length > 1) {
                setData(comidas);
                return;
            }
            setData(tragos);
            return;
        };
        setData(searchFn(categoria, letters))
        return data;
    }

    return (
        <>
            <div className='menuContainer' >

                <div >
                    <div className='optionsMenu' >
                        <h1 className='elementsMenu' >MENÚ</h1>
                        <div>
                            <button onClick={selectFood} id={btnSelected.comida} >Comidas</button>
                            <button onClick={selectDrink} id={btnSelected.bebida} >Bebidas</button>
                        </div>
                    </div>
                    <div className='elementsMenu' >
                        <span>ORDENAR</span>
                        <select name="" id="" onChange={handleChange}>
                            <option value="sinOrden">Sin orden</option>
                            <option value="mayor">Precio más alto</option>
                            <option value="menor">Precio más bajo</option>
                        </select>
                    </div>
                    <div className='elementsMenu' >
                        <Searchbar fn={handleSearch} />
                    </div>
                </div>
                <hr />

            </div>

            {
                data[0]?.id ?
                    <div className='patherProducts' >
                        <div className='productosGrid' >

                            {
                                data.map(producto => (
                                    <div key={producto.id} >
                                        <Card
                                            image={producto.image}
                                            name={producto.name}
                                            category={producto.category}
                                            precio={producto.precio}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                        <Paginado totalPages={5} />
                    </div> : <h3 className="notFound semiLight" >{textNotFound}</h3>
            }


        </>
    )
}
