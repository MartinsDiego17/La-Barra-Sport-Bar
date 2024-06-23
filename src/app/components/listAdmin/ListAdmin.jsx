import { FaArrowLeft } from 'react-icons/fa';
import List from './list/List';
import './listadmin.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { searchItems } from './searchItems';

const ListAdmin = ({ title, options, arr }) => {

    const [value, setValue] = useState("");
    const [items, setItems] = useState(arr);
    const [currentCategory, setCurrentCategory] = useState("");

    const [btnSelected, setBtnSelected] = useState({
        todos: "selected",
        comidas: "",
        bebidas: "",
        admin: ""
    })

    const handleBtn = (option) => {
        option = option.toLowerCase();
        let finalItems;
        setValue("");

        if (option === "todos") {
            setBtnSelected({
                todos: "selected",
                comidas: "",
                bebidas: ""
            });
            setItems(arr);
            return;
        }
        if (option === "comidas") {
            setBtnSelected({
                todos: "",
                comidas: "selected",
                bebidas: ""
            });
            finalItems = arr.filter(product => product.category === "Comida" || product.category === "comida");
            setCurrentCategory("comida");
            setItems(finalItems);
            return;
        }
        if (option === "bebidas") {
            setBtnSelected({
                todos: "",
                comidas: "",
                bebidas: "selected"
            });
            finalItems = arr.filter(product => product.category === "Bebida" || product.category === "bebida");
            setCurrentCategory("bebida");
            setItems(finalItems);
            return;
        }
        if (option === "admin") {
            setBtnSelected({
                todos: "",
                comidas: "",
                bebidas: "",
                admin: "selected"
            });
            finalItems = arr.filter(user => user.isAdmin);
            setCurrentCategory("admin");
            setItems(finalItems);
            return;
        }


    }

    const handleChange = (e) => {
        setValue(e.target.value);

        if(e.target.value <= 3) {
            setItems(arr);
            return;
        }

        if (title === "Ventas" && e.target.value.length) {
            if (e.target.value == 0) setItems(arr);
            setItems(searchItems(0, arr, e.target.value));
            return;
        }

        if (e.target.value.length < 3) {

            const foods = arr.filter(product => product.category === "comida");
            const drinks = arr.filter(product => product.category === "bebida");
            const admins = arr.filter(user => user.isAdmin);

            if (currentCategory === "comida") setItems(foods);
            else if (currentCategory === "bebida") setItems(drinks);
            else if (currentCategory === "admin") setItems(admins);
            else if (currentCategory === "todos") setItems(arr);

            return;
        }

        setItems(searchItems(e.target.value, items))
    }

    useEffect(() => {
        if (arr.length > 0) {
            setCurrentCategory("todos");
            setItems(arr);
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
                                        <button key={option} id={btnSelected[option.toLowerCase()]} onClick={() => handleBtn(option)} >
                                            {option}
                                        </button>
                                    ))
                                }
                                {title === "Productos" &&
                                    <Link href={"/paneladmin/productos/crear"} >
                                        <button className='createProduct' >Crear producto</button>
                                    </Link>
                                }
                            </div>
                        </article>

                    </section>

                    <List data={items} text={title} />

                </div>
            </div>
        </>
    )
}

export default ListAdmin
