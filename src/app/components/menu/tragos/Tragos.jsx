'use client';

import { tragos } from '@/app/tragos';
import './tragos.css';
import { Card } from '../card/Card';
import { Paginado } from '../paginado/Paginado';
import { Searchbar } from '../../searchbar/Searchbar';

export const Tragos = () => {
    return (
        <>
            <div className='menuContainer' >

                <div >
                    <h1 className='elementsMenu' >BEBIDAS</h1>
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
                    tragos.map(trago => (
                        <div key={trago.id} >
                            <Card
                                image={trago.image}
                                name={trago.name}
                                category={trago.category}
                                precio={trago.precio}
                            />
                        </div>
                    ))
                }

            </div>

            <Paginado totalPages={5} />

        </>
    )
}
