'use client';

import { comidas } from '@/app/comidas';
import { tragos } from '@/app/tragos';
import './productos.css';
import { Card } from '../card/Card';
import { Paginado } from '../paginado/Paginado';
import { Searchbar } from '../../searchbar/Searchbar';
import { useState } from 'react';

export const Productos = () => {

    const [data, setData] = useState(comidas);
    const [btnSelected, setBtnSelected] = useState({
        comida: "btnSelected",
        bebida: ""
    });


        const selectFood = () => {
        setData(comidas);
        setBtnSelected({
            comida: "btnSelected"
        })
    }

    const selectDrink = () => {
        setData(tragos);
        setBtnSelected({
            bebida: "btnSelected"
        })
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
                    </div>
                    <div className='elementsMenu' >
                        <Searchbar />

                    </div>
                </div>
                <hr />

            </div>

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

        </>
    )
}
