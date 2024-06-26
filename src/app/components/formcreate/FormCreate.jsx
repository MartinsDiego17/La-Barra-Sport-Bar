"use client";

import Image from 'next/image';
import './formcreate.css';
import bg from '../../images/adminImages/whiteBg.png';
import test from '../../images/adminImages/whiteBg.png';
import { useState } from 'react';
import { updateProduct } from './update';
import Swal from 'sweetalert2';
import { createProduct } from './create';
import ButtonBack from '../buttonback/ButtonBack';

const FormCreate = ({ ingredients }) => {

    const [newProduct, setNewProduct] = useState({
        image: test,
        name: "Nombre",
        category: "",
        price: "00",
        stock: true,
        ingredientes: []
    })
    const [format, setFormat] = useState(false);
    const [newProductErrors, setNewProductErrors] = useState("");
    const [btnSelected, setBtnSelected] = useState({
        comida: "",
        bebida: ""
    });
    const [stockSelected, setStockSelected] = useState({
        conStock: "buttonStock",
        sinStock: ""
    })
    const handleBtn = (btn) => {
        setBtnSelected({
            [btn]: btn
        });
        setNewProduct({
            ...newProduct,
            category: btn
        })
    }
    const handleUpdate = (event) => {

        const { name, value } = event.target;

        setNewProductErrors(updateProduct(name, value))
        if (updateProduct(name, value)) return;

        setNewProduct({
            ...newProduct,
            [name]: value
        })

    }
    const handleStockWith = () => {
        setStockSelected({
            conStock: "buttonStock",
            sinStock: ""
        })
        setNewProduct({
            ...newProduct,
            stock: true
        })
    }
    const handleStockWithout = () => {
        setStockSelected({
            conStock: "",
            sinStock: "buttonStock"
        })
        setNewProduct({
            ...newProduct,
            stock: false
        })
    }
    const handleFormat = () => {
        setFormat(true);
        Swal.fire({
            title: "¿Está seguro de que desea revertir los cambios realizados?",
            text: "No podrás deshacer esta acción",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                setNewProduct({
                    image: bg,
                    name: "Nombre",
                    category: "",
                    price: "00",
                    stock: true
                });
                setStockSelected({
                    conStock: "buttonStock",
                    sinStock: ""
                })
                setBtnSelected({
                    comida: "",
                    bebida: ""
                })
            }
        });
    }
    const handleCancel = () => {
        Swal.fire({
            title: "¿Está seguro de que desea cancelar la creación??",
            text: "No podrás deshacer esta acción",
            showCancelButton: true,
            cancelButtonText: "Continuar la creación",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/paneladmin/productos"
            }
        });
    }
    const validationsDisabled = () => {
        const copyProduct = {
            image: newProduct.image,
            name: newProduct.name,
            category: newProduct.category,
            price: newProduct.price,
            stock: newProduct.stock,
        }
        const values = Object.values(copyProduct);
        const keys = Object.keys(copyProduct)
        for (let i = 0; i < values.length; i++) {
            if (keys[i] !== "image") {
                if (values[i].length < 1) return true;
            }
        }
        if (
            newProductErrors.length > 1 ||
            copyProduct.image === test ||
            copyProduct.price < 1 ||
            newProduct.ingredientes.length < 1
        ) return true;
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({
                    ...newProduct,
                    image: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
    }
    const handleSubmit = () => {

        const checkExistent = async () => {
            const checked = await createProduct(newProduct);
            if (!checked) return true;
        }

        if (checkExistent()) return;

        setNewProduct({
            image: test,
            name: "Nombre",
            category: "",
            price: "00",
            stock: true
        })
        setBtnSelected({
            comida: "",
            bebida: ""
        })
        createProduct(newProduct)
    };
    const handleChange = (e) => {
        const filtereds = newProduct.ingredientes.filter(ingrediente => ingrediente === e.target.value);
        if (filtereds.length > 0) {
            Swal.fire("Ya haz agregado este ingrediente.");
            return;
        }
        if (newProduct.ingredientes.length > 2) {
            Swal.fire("Puedes agregar hasta 3 ingredientes.");
            return;
        }
        setNewProduct({
            ...newProduct,
            ingredientes: [...newProduct.ingredientes, e.target.value]
        })
    }
    const handleDelete = (name) => {
        const updated = newProduct.ingredientes.filter(ingredient => ingredient != name);
        setNewProduct({
            ...newProduct,
            ingredientes: updated
        })
    }

    return (
        <>
            <div className='productContainerAdmin' >

                <div className='sonDetailProduct' >

                    <ButtonBack route={"/paneladmin/productos"} />

                    <section>

                        <article className='fieldsProduct' >

                            <h1>{newProduct.name}</h1>

                            <div className='optionsCategory' >
                                <p onClick={() => handleBtn("comida")} id={btnSelected.comida}  >Comida</p>
                                <p onClick={() => handleBtn("bebida")} id={btnSelected.bebida}  >Bebida</p>
                            </div>

                            <input value={newProduct.name} autoComplete='off' id={newProductErrors} name='name' type="text" placeholder="Ingresar nombre (Máximo 30 caracteres)" onChange={handleUpdate} /> <br />

                            <input value={newProduct.price} autoComplete='off' id={newProductErrors} name='price' type="text" placeholder="Ingresar precio (Máximo $150.000)" onChange={handleUpdate} />

                            <p className='ingredientsDetail' >
                                Agregar ingredientes

                                <select name="" id="" onChange={handleChange} >
                                    <option value=""></option>
                                    {ingredients.map(ingrediente => (
                                        <option value={ingrediente.name} >{ingrediente.name}</option>
                                    ))}
                                </select>
                            </p>
                            <p className='ingredientsSpan' >
                                {newProduct.ingredientes.map(ingrediente => (
                                    <span className='ingredient' >
                                        {ingrediente} <span onClick={() => { handleDelete(ingrediente) }} className='delete' > x</span>
                                    </span>
                                ))}
                            </p>

                            <div className='buttonsStock' >
                                <button onClick={handleStockWith} id={stockSelected.conStock} >En stock</button>
                                <button onClick={handleStockWithout} id={stockSelected.sinStock} >Sin stock</button>
                            </div>

                            <button onClick={handleFormat} className='buttonsChange'>Deshacer cambios</button> <br />
                            <button onClick={handleCancel} className='buttonsChange'>Cancelar</button>

                        </article>

                        <article className='imageDetail'>
                            <Image src={newProduct.image} alt={"image"} width={200} height={200} />
                            <form action="">
                                <input type="file" name='archivo' accept="image/*" id='file' onChange={handleFileChange} />
                                <input onClick={() => { document.getElementById('file').click() }} type="button" value={"Subir archivo"} id='cargarImg' />
                            </form>
                        </article>


                    </section>

                    <div className='divConfirmButton' >
                        <button disabled={validationsDisabled()} className="confirmButton" onClick={handleSubmit} >Confirmar</button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default FormCreate;
