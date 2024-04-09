import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './list.css';
import burga from '../../../images/comidas/dragon.webp';
import { Oval } from 'react-loader-spinner';
import Link from 'next/link';

const List = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='loader'>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#0099ff"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          secondaryColor='transparent'
        />
      </div>
    );
  }

  if (data.length < 1) {
    return <div><h2>No hay productos disponibles</h2></div>;
  }

  return (
    <div className='listContainer'>
      {data.map((item) => (
        <Link href={`/paneladmin/productos/${item.name}`} >
          <div key={item.id} className='itemMapped'>
            <h3>{item.name}</h3>
            <p>${item.price}{item.price === 19 && "00"}</p>
            <div className='itemImg'>
              <Image src={item.image} width={50} height={50} />
            </div>
          </div>
        </Link >
      ))}
    </div>
  );
};

export default List;
