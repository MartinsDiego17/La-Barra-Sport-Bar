'use client';

import Image from 'next/image';
import './card.css';
import { IoMdArrowForward } from "react-icons/io";

export const Card = ({ image, name, category, precio }) => {

  let site;

  if (category === "comida") {
    site = 'comida';
  } else {
    site = 'bebida'
  }

  return (
    <div className='cardContainer' >

      <a href={`http://localhost:3000/${site}/${name}`}>
        <Image src={image} width={220} height={220} alt='Hamburguesa' className='imagen' />
      <p className='nombre' >{name.toUpperCase()}</p>
      </a>


      <div>
        <span className='precio' >${precio}</span>
        <div className='gestion' >
          <button>-</button>
          <button>+</button>
        </div>
      </div>

      <p className='saberMas' >Saber más<span><IoMdArrowForward /></span></p>

    </div>

  )
}
