"use client";

import Image from 'next/image';
import './productdetail.css';
import { useEffect, useState } from 'react';
import { updateProduct } from '../formcreate/update';
import Swal from 'sweetalert2';
import ButtonBack from '../buttonback/ButtonBack';
import { deleteProduct } from './deleteProduct';
import { editProduct } from './editProduct';

const ProductDetail = ({ product, ingredients }) => {

    const alertFn = (text1, text2, fn) => {
        Swal.fire({
            title: text1,
            text: "No podrá deshacer esta acción",
            showCancelButton: true,
            cancelButtonText: text2,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                fn()
            }
        });
    }
    const [newProduct, setNewProduct] = useState(product)
    const [format, setFormat] = useState(false);
    const [newProductErrors, setNewProductErrors] = useState("");
    const [stockSelected, setStockSelected] = useState({
        conStock: "",
        sinStock: ""
    })

    useEffect(() => {
        if (product.stock) {
            setStockSelected({
                conStock: "buttonStock"
            })
            return;
        }
        setStockSelected({
            sinStock: "buttonStock"
        })
    }, []);

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

        if (
            product.price === newProduct.price &&
            product.image === newProduct.image &&
            product.stock === newProduct.stock &&
            product.name === newProduct.name &&
            product.ingredients === newProduct.ingredients
        ) {
            Swal.fire("Aún no haz realizado cambios.");
            return;
        }

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
                setNewProduct(product);
                if (product.stock) {
                    setStockSelected({
                        conStock: "buttonStock"
                    })
                    return;
                }
                setStockSelected({
                    sinStock: "buttonStock"
                })
            }
        });
    }
    const handleCancel = () => {
        const localFn = () => {
            window.location.href = "/paneladmin/productos";
        }
        alertFn(
            "¿Estás seguro de que deseas cancelar la creación?",
            "Continuar la creación",
            localFn
        );
    }
    const validationsDisabled = () => {

        let iguales = 1;
        if (newProduct.ingredients.length < 0) return true;
        const original = product.ingredients.sort((a, b) => a.localeCompare(b));
        const update = newProduct.ingredients.sort((a, b) => a.localeCompare(b));

        if (original.length !== update.length) {
            return false;
        } else if (original.length === update.length) {
            original.forEach((ingre, index) => {
                if (ingre === update[index]) {
                    iguales = 1;
                    return true;
                } else if (ingre !== update[index]) iguales = 0;

            });
        }

        if (product.price === newProduct.price &&
            product.image === newProduct.image &&
            product.stock === newProduct.stock &&
            product.ingredients === newProduct.ingredients &&
            iguales &&
            product.name === newProduct.name) return true;

        const values = Object.values(newProduct);
        const keys = Object.keys(newProduct)
        for (let i = 0; i < values.length; i++) {
            if (keys[i] !== "image") {
                if (values[i].length < 1) return true;
            }
        }
        if (
            newProductErrors.length > 1 ||
            newProduct.price < 1
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

        const localFn = () => {
            editProduct(newProduct);
        }
        alertFn(
            "¿Estás seguro de que deseas editar el producto?",
            "Seguir editando",
            localFn
        )
    }
    const handleDelete = (id) => {
        deleteProduct(id);
    };
    const handleChange = (e) => {
        const filtereds = newProduct.ingredients.filter(ingrediente => ingrediente === e.target.value);
        const sortereds = [...newProduct.ingredients.sort((a, b) => a.localeCompare(b)), e.target.value];
        if (filtereds.length > 0) {
            Swal.fire("Ya haz agregado este ingrediente.");
            return;
        }
        if (newProduct.ingredients.length > 2) {
            Swal.fire("Puedes agregar hasta 3 ingredientes.");
            return;
        }
        setNewProduct({
            ...newProduct,
            ingredients: sortereds
        })
    }
    const handleDeleteIng = (name) => {
        const updated = newProduct.ingredients.filter(ingredient => ingredient != name);
        setNewProduct({
            ...newProduct,
            ingredients: updated
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
                                <p id="category"  >{product.category}</p>
                            </div>

                            <input value={newProduct.name} autoComplete='off' id={newProductErrors} name='name' type="text" placeholder="Ingresar nombre (Máximo 30 caracteres)" onChange={handleUpdate} /> <br />

                            <input value={newProduct.price} autoComplete='off' id={newProductErrors} name='price' type="text" placeholder="Ingresar precio (Máximo $150.000)" onChange={handleUpdate} />

                            <p className='ingredientsDetail' >
                                Lista de ingredientes

                                <select name="" id="" onChange={handleChange} >
                                    <option value=""></option>
                                    {ingredients.map(ingrediente => (
                                        <option value={ingrediente.name} >{ingrediente.name}</option>
                                    ))}
                                </select>
                            </p>

                            <p className='ingredientsSpan' >
                                {newProduct.ingredients.map(ingrediente => (
                                    <span className='ingredient' >
                                        {ingrediente} <span onClick={() => { handleDeleteIng(ingrediente) }} className='delete' > x</span>
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
                        <button className="confirmButton deleteButton" onClick={() => handleDelete(product.id)} >
                            Eliminar producto
                        </button>
                        <button disabled={validationsDisabled()} className="confirmButton" onClick={handleSubmit} >
                            Confirmar
                        </button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductDetail;
