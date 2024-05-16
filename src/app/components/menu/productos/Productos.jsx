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
    const [currentPage, setCurrentPage] = useState(1);
    const [textNotFound, setTextNotFound] = useState("");
    const [btnSelected, setBtnSelected] = useState({
        comida: "btnSelected",
        bebida: ""
    });
    const [pages, setPages] = useState(Math.ceil(products.length / 12));
    const [disabled, setDisabled] = useState({
        dsf: true,
        dsl: false
    })
    let comidas = [];
    let bebidas = [];
    if (products.length > 0) {
        comidas = products.filter(product => product.category === "Comida" || product.category === "comida");
        bebidas = products.filter(product => product.category === "Bebida" || product.category === "bebida");
    }
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
    useEffect(() => {
        setPages(Math.ceil(data.length / 12));
    }, [products]);
    useEffect(() => {
        const category = data[0]?.category;
        let arr = products.filter(product => product.category === category);
        setPages(Math.ceil(arr.length / 12));
    }, [data]);
    useEffect(() => {
        if (pages > 0) {
            setDisabled({
                dsf: true,
                dsl: false
            })
        }
    }, [pages]);
    useEffect(() => {
        setPages(Math.ceil(products.length / 12));
    }, []);
    const selectFood = () => {
        if (pages === 0) {
            setDisabled({
                dsf: true,
                dsl: true
            })
        }
        setCurrentPage(1);
        setData(comidas);
        setBtnSelected({
            bebida: "a",
            comida: "btnSelected"
        })
        if (comidas.length < 12) {
            setDisabled({
                dsf: true,
                dsl: true
            })
        }
    }
    const selectDrink = () => {
        if (setPages(Math.ceil(bebidas.length) / 12));
        if (Math.ceil(bebidas.length / 12) == 1) {
            setDisabled({
                dsf: true,
                dsl: true
            })
        }
        setCurrentPage(1);
        setData(bebidas);
        setBtnSelected({
            comida: "a",
            bebida: "btnSelected"
        })
        if (bebidas.length < 12) {
            setDisabled({
                dsf: true,
                dsl: true
            })
        }
    }
    const mayor = () => {
        let dataCopy;
        if (data[0].category === "comida") dataCopy = comidas;
        if (data[0].category === "bebida") dataCopy = bebidas;
        const newData = [...dataCopy].sort((a, b) => b.price - a.price);
        setData(newData);
    }
    const menor = () => {
        let dataCopy;
        if (data[0].category === "comida") dataCopy = comidas;
        if (data[0].category === "bebida") dataCopy = bebidas;
        const newData = [...dataCopy].sort((a, b) => a.price - b.price);
        setData(newData);
    }
    const handleChange = (event) => {


        if (pages === 1) {
            setDisabled({
                dsf: true,
                dsl: true
            })
        } else if (pages > 1) {
            setDisabled({
                dsf: true,
                dsl: false
            })
        }

        setCurrentPage(1);

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

        let dataCopy;

        if (btnSelected.comida.length > 1) {
            dataCopy = comidas;
        } else if (btnSelected.bebida.length > 1) {
            dataCopy = bebidas;
        }

        if (letters.length < 4) {
            if (btnSelected.comida.length > 1) {
                setData(comidas);
                return;
            }
            setData(bebidas);
            return;
        };
        setData(searchFn(dataCopy, letters))
        return data;
    }
    const handlePage = (oper, numberPage) => {

        const prev = currentPage - 1;
        const next = currentPage + 1;

        if (numberPage || numberPage == 0) {

            if (numberPage + 1 == 1) {
                setDisabled({
                    dsf: true,
                    dsl: false
                })
            }

            if (numberPage + 1 == pages) {
                setDisabled({
                    dsf: false,
                    dsl: true
                })
            }

            if (pages == 1) {
                setDisabled({
                    dsf: true,
                    dsl: true
                })
            }

            setCurrentPage(numberPage + 1)

            let dataOrder;

            if (data[0].category == "comida") setData(changePage(comidas, null, numberPage));
            if (data[0].category == "bebida") setData(changePage(bebidas, null, numberPage));

            return;
        }

        const category = data[0].category;
        let arr = products.filter(product => product.category === category);

        if (oper === "prev" && currentPage > 1) {
            setData(changePage(arr, prev))
            if (currentPage === 2) {
                setDisabled({
                    dsf: true,
                    dsl: false
                })
            }
            setCurrentPage(prev);
            return;
        } else if (oper === "next" && currentPage !== pages) {
            setData(changePage(arr, next));
            if (next === pages) {
                setDisabled({
                    dsf: false,
                    dsl: true
                })
            }
            setCurrentPage(next);
        }

    }

    let dataRender = data.slice(0, 12);

    return (
        <>
            <div className='menuContainer' >

                <div >
                    <div className='optionsMenu' >
                        <h1 className='elementsMenu' id='MENU' >MENÚ</h1>
                        <div>
                            <button onClick={selectFood} id={btnSelected.comida} >Comidas</button>
                            <button onClick={selectDrink} id={btnSelected.bebida} >Bebidas</button>
                        </div>
                    </div>
                    <div className='elementsMenu' >
                        <span>ORDENAR</span>
                        <select name="" id="selectOrder" onChange={handleChange}>
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
                        <Paginado
                            totalPages={pages}
                            fn={handlePage}
                            dsf={disabled.dsf}
                            dsl={disabled.dsl}
                            current={currentPage}
                        />
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
