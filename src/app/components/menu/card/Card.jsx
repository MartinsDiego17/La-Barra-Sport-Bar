'use client';

import Image from 'next/image';
import './card.css';
import { IoMdArrowForward } from "react-icons/io";
import Swal from 'sweetalert2';
import { useStoreCart } from '@/app/store';
import { addProduct } from './addProduct';

export const Card = ({ product }) => {

  const { addProducts } = useStoreCart();
  const { image, name, category, price } = product;
  let site;
  if (category === "comida") {
    site = 'comida';
  } else {
    site = 'bebida'
  }
  const openModal = () => {
    Swal.fire({
      title: "Custom animation with Animate.css",
      imageUrl: image.src,
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
    <div className='cardContainer' >

      <a href={`http://localhost:3000/${site}/${name}`}>
        <Image src={image} width={220} height={220} alt='Hamburguesa' className='imagen' />
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
