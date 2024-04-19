import { FaArrowLeft } from 'react-icons/fa';
import List from './list/List';
import './listadmin.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { searchItems } from './searchItems';

const ListAdmin = ({ title, options, arr }) => {

    const [value, setValue] = useState("");
    const [products, setProducts] = useState(arr);

    const [btnSelected, setBtnSelected] = useState({
        todos: "selected",
        comidas: "",
        bebidas: ""
    })

    const handleBtn = (option) => {
        option = option.toLowerCase();
        let finalProducts;

        if(option === "todos") {
            setBtnSelected({
                todos: "selected",
                comidas: "",
                bebidas: ""
            });
            setProducts(arr);
            return;
        }
        if(option === "comidas") {
            setBtnSelected({
                todos: "",
                comidas: "selected",
                bebidas: ""
            });
            finalProducts = arr.filter(product => product.category === "Comida" || product.category === "comida");
            setProducts(finalProducts);
            return;
        }
        if(option === "bebidas") {
            setBtnSelected({
                todos: "",
                comidas: "",
                bebidas: "selected"
            });
            finalProducts = arr.filter(product => product.category === "Bebida" || product.category === "bebida");
            setProducts(finalProducts);
            return;
        }

    }

    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value.length < 3) {
            setProducts(arr);
            return;
        }
        setProducts(searchItems(e.target.value, arr))
    }

    useEffect(() => {
        if(arr.length > 0){
            setProducts(arr);
        } 
    }, [arr])

    return (
        <>
            <div className='listAdminContainer' >
                <div className='subContainerList' >

                    <Link href="/paneladmin" >
                        <button className='buttonBack' >
                            <FaArrowLeft />
                            <span>Volver</span>
                        </button>
                    </Link>

                    <section>
                        <article>
                            <h1>{title} <span className='quantityItems' >({arr.length})</span></h1>
                        </article>

                        <article>
                            <input type="text" placeholder='Buscar...' onChange={handleChange} value={value} />
                            <div className='buttons' >
                                {
                                    options.map(option => (
                                        <button key={option} id={btnSelected[option.toLowerCase()]} onClick={() => handleBtn(option)} >{option}</button>
                                    ))
                                }
                                <Link href={"/paneladmin/productos/crear"} ><button>Crear producto</button></Link>
                            </div>
                        </article>

                    </section>

                    <List data={products} />

                </div>
            </div></>
    )
}

export default ListAdmin
