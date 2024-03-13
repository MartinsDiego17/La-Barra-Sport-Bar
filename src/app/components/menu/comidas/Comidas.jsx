'use client';

import { comidas } from '@/app/comidas';
import './comidas.css';
import { Card } from '../card/Card';
import { Paginado } from '../paginado/Paginado';
import { Searchbar } from '../../searchbar/Searchbar';

export const Comidas = () => {


    return (
        <>
            <div className='menuContainer' >

                <div >
                    <h1 className='elementsMenu' >COMIDAS</h1>
                    <div className='elementsMenu' >
                        <span>ORDENAR</span>
                        {/*                         <select name="" id="">
                            <option value="">PRECIO MÁS BAJO</option>
                            <option value="">PRECIO MÁS ALTO</option>
                            <option value="">MAYOR RELEVANCIA</option>
                            <option value="">MENOR RELEVANCIA</option>
                        </select> */}
                    </div>
                    <div className='elementsMenu' >
                        <Searchbar />

                    </div>
                </div>
                <hr />
                
            </div>

            <div className='productosGrid' >

                {
                    comidas.map(comida => (
                        <div key={comida.id} >
                            <Card
                                image={comida.image}
                                name={comida.name}
                                category={comida.category}
                                precio={comida.precio}
                            />
                        </div>
                    ))
                }

            </div>

            <Paginado totalPages={5} />

        </>
    )
}