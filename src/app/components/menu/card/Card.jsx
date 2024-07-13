'use client';

import Image from 'next/image';
import './card.css';
import { IoMdArrowForward } from "react-icons/io";
import Swal from 'sweetalert2';
import { useStoreCart } from '@/app/store';
import { addProduct } from './addProduct';
import prueba from '../../../images/fondo.webp'
import { useEffect, useState } from 'react';

export const Card = ({ product }) => {

  if (!product.stock) return null;

  const { addProducts } = useStoreCart();
  const { image, name, category, price } = product;
  const [textIngredient, setTextIngredient] = useState("");
  useEffect(() => {
    setTextIngredient(product.ingredients.join(' - '));
  }, []);
  let site;
  if (category === "comida") {
    site = 'comida';
  } else {
    site = 'bebida'
  }
  const openModal = () => {
    Swal.fire({
      title: name,
      text: `Ingredientes: ${textIngredient}`,
      imageUrl: image,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: name,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  const handleAdd = () => {
    addProduct(product, addProducts)
  }

  return (
    <div className='cardContainer'>

      <a href={`http://localhost:3000/${site}/${name}`}>
        <Image src={prueba} width={220} height={220} alt={name} className='imagen' />
        <p className='nombre' >{name.toUpperCase()}</p>
      </a>

      <div>
        <span className='precio' >${price}</span>
        <button onClick={handleAdd} >Añadir</button>
      </div>

      <p className='saberMas' onClick={openModal} >Saber más<span><IoMdArrowForward /></span></p>

    </div>

  )
}
