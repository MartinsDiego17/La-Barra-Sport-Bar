"use client";
import './product.css';
import Image from 'next/image';
import { MdVerifiedUser } from "react-icons/md";
import { Button } from '@/app/button/Button';
import visaUrl from '../../images/tarjetas/visa.png';
import masterCardUrl from '../../images/tarjetas/mastercard.png';
import americanUrl from '../../images/tarjetas/american.png';
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import { useStoreCart } from '@/app/store';
import Swal from 'sweetalert2';

const Product = ({ product }) => {

    const [productsToCart, setProductsToCart] = useState([product]);
    const { addProducts, chargeProducts, clearProducts } = useStoreCart();

    if (!product.image) return <Loader />

    const handleAdd = () => {
        if (productsToCart.length > 0 && productsToCart.length != 5) {
            const updatedProducts = [...productsToCart, product];
            setProductsToCart(updatedProducts);
        }
    };
    const handleRemove = () => {
        if (productsToCart.length < 2) return;
        const updatedProducts = [...productsToCart];
        updatedProducts.pop();
        setProductsToCart(updatedProducts);
    };
    const handleSubmit = () => {
        addProducts(productsToCart);
        setProductsToCart([product]);
    };
    const handleNow = () => {
        Swal.fire({
            title: "Comprar ahora",
            text: "Ten en cuenta que se vaciará el resto del carrito",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, comprar ahora"
        }).then((result) => {
            if (result.isConfirmed) {
                clearProducts();
                addProducts(productsToCart);
                window.location.href = "/pago";
            }
        });
    };

    return (
        <div className='patherProduct' >
            <div className="detailContainer" >


                <Image width={200} height={200} src={product.image} alt={product.name} />

                <div className='productDetails' >

                    <h1>{product.name.toUpperCase()}</h1>
                    <h5 className='stock' >EN STOCK <span><MdVerifiedUser /></span></h5>
                    <h2>${product.price}</h2>
                    <div className='productQuantity' >
                        <h5>CANTIDAD: {productsToCart.length}</h5>
                        <button onClick={handleAdd} >+</button>
                        <button onClick={handleRemove} >-</button>
                    </div>

                    <div className='buttonShop' >
                        <button onClick={handleNow} >Comprar ahora</button>
                        <button onClick={handleSubmit} >Agregar al carrito</button>
                    </div>


                    <div className='payMetods' >
                        <h5>MÉTODOS DE PAGO</h5>
                        <div>
                            <Image src={visaUrl} alt='Visa' width={35} height={20} />
                            <Image src={masterCardUrl} alt='Master Card' width={35} height={20} />
                            <Image src={americanUrl} alt='American Express' width={35} height={20} />
                        </div>
                    </div>

                    <div className='ingredientes' >
                        <h5>INGREDIENTES</h5>
                        {
                            product.ingredients &&
                            product.ingredients.map((ingrediente, index) => (
                                <span key={index} >{ingrediente} <br /></span>
                            ))
                        }
                    </div>

                    <p><span className='iconLocationProduct' ><FaLocationDot />Av. Francisco Bilbao 3420</span></p>

                </div>

            </div >
        </div>
    )
}

export default Product
