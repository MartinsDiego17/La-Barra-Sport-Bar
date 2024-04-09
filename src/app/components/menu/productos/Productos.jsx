'use client';

import './productos.css';
import { Card } from '../card/Card';
import { Paginado } from '../paginado/Paginado';
import { Searchbar } from '../../searchbar/Searchbar';
import { useEffect, useState } from 'react';
import searchFn from './search';
import { changePage } from './paginado';

export const Productos = ({ products }) => {

    const [data, setData] = useState([]);
    let comidas = [];
    let bebidas = [];
    if (products.length > 0) {
        comidas = products.filter(product => product.category === "Comida" || product.category === "comida");
        bebidas = products.filter(product => product.category === "Bebida" || product.category === "bebida");
    }

    const pages = Math.ceil(data.length / 12);
    const [btnSelected, setBtnSelected] = useState({
        comida: "btnSelected",
        bebida: ""
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [textNotFound, setTextNotFound] = useState("");
    useEffect(() => {
        if (btnSelected.comida.length > 1) {
            setTextNotFound("No tenemos comidas que coincidan con tu búsqueda");
            return;
        } else if (btnSelected.bebida.length > 1) {
            setTextNotFound("No tenemos bebidas que coincidan con tu búsqueda")
        }
    }, [btnSelected])
    useEffect(() => {
        if (comidas.length > 0) {
            setData(comidas);
        }
    }, [products]);
    const selectFood = () => {
        setData(comidas);
        setBtnSelected({
            bebida: "a",
            comida: "btnSelected"
        })
    }
    const selectDrink = () => {
        setData(bebidas);
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
            setData(bebidas);
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
            setData(bebidas);
            return;
        };
        setData(searchFn(data, letters))
        return data;
    }
    const handlePage = (oper) => {

        const prev = currentPage - 1;
        const next = currentPage + 1;

        if (oper === "prev" && currentPage > 1) {
            setData(changePage(data, prev))
            setCurrentPage(prev);
            return;
        } else if (oper === "next" && currentPage !== pages) {
            setData(changePage(data, next));
            setCurrentPage(next);
        }
    }

    let dataRender = data.slice(0, 13);

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
                        <Searchbar fn={handleSearch} change={btnSelected} />
                    </div>
                </div>
                <hr />

            </div>
            {
                data.length > 0 &&
                    data[0]?.id ?
                    <div className='patherProducts' >
                        <div className='productosGrid' >

                            {
                                dataRender.map(producto => (
                                    producto.stock &&
                                    <div key={producto.id} >
                                        <Card
                                            product={producto}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                        <Paginado totalPages={pages} fn={handlePage} />
                    </div > :
                    <div className='divNotFound' >
                        <h3 className="notFound semiLight" >{textNotFound}</h3>
                        <p><span className='semiLight' >-</span>Revisa la ortografía de la palabra</p>
                        <p><span className='semiLight' >-</span>Utiliza palabras más genéricas o menos palabras </p>
                    </div>
            }


        </>
    )
}
