import React, { useState, useEffect } from 'react';
import './list.css';
import { Oval } from 'react-loader-spinner';
import Link from 'next/link';
import { obtenerFecha } from '@/app/paneladmin/ventas/obtenerFecha';
const List = ({ data, text }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setDataRender(data);
  }, [data]);

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
    return <div><h2>No hay {text.toLowerCase()} disponibles</h2></div>;
  }

  return (
    <div className='listContainer'>
      {dataRender.length && dataRender.map((item, index) => (

        <Link
          href={item.price && text.toLowerCase() == "productos" && item.price > 0
            ? `/paneladmin/${text.toLowerCase()}/${item.name}`
            : `/paneladmin/${text.toLowerCase()}/${item.id}`} >

          <div key={item.id * index} className='itemMapped'>

            <>
              <h3>{item.name ? item.name : `ID de venta ${item.id}`}</h3>
              <p>
                {
                  item.name ? (
                    <>
                      {item.price > 0 && `$${item.price}`}
                      {item.email?.length > 0 && `usuario ${index + 1}`}
                    </>
                  ) : ( <>Total ${item.total}</> )
                }
              </p>
              {
                item.name
                  ? <div className='itemImg'>
                    <img src={item.image} width={50} height={50} />
                  </div>
                  : <h5 className='quantityProducts' >{obtenerFecha(item.date)}</h5>
              }
            </>

          </div>
        </Link >
      ))}
    </div>
  );
};

export default List;
