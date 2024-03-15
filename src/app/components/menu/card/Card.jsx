'use client';

import Image from 'next/image';
import './card.css';
import { Button } from '../../button/Button';

export const Card = ({ image, name, category, precio }) => {

  let site;

  if(category === "comida") {
    site = 'comida';
  } else {
    site = 'bebida'
  }

  return (
    <a href={`http://localhost:3000/${site}/${name}`}>
      <div className='cardContainer' >
        <Image src={image} width={220} height={220} alt='Hamburguesa' className='imagen' />
        <p className='nombre' >{name.toUpperCase()}</p>

        <div>
          <span className='precio' >${precio}</span>
          <div className='gestion' >
            <button>-</button>
            <button>+</button>
          </div>
        </div>

      </div>
    </a>
  )
}
