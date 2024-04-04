import './productdetail.css';
import burga from '../../images/comidas/dragon.jpg'
import Image from 'next/image';

const ProductDetail = ({ product }) => {

    return (
        <>
            <div className='productContainerAdmin' >

                <div className='sonDetailProduct' >

                    <section>

                        <article className='fieldsProduct' >
                            <h1>{product.name?.toUpperCase()}</h1>
                            <div>
                                <p className='categoryP' >
                                    {
                                        product.category === "Comida" ? "Comida" : "Bebida"
                                    }
                                </p>
                            </div>
                            <input type="text" value={product?.name} /> <br />
                            <input type="text" value={product.price} />
                            <p className='ingredientsDetail' >
                                Ingredientes
                                <span>
                                    Carne - Lechuga - Cebolla
                                </span>
                                <button>+</button>
                                <button>-</button>
                            </p>
                            <div className='buttonsStock' >
                                <button>En stock</button>
                                <button>Sin stock</button>
                            </div>
                            <button className='buttonsChange' >Deshacer cambios</button> <br />
                            <button className='buttonsChange' >Eliminar producto</button>
                        </article>

                        <article className='imageDetail'>
                            <Image src={burga} alt={product.name} width={200} height={200} />
                            <button>Cambiar imagen</button>
                        </article>


                    </section>

                </div>


            </div>
        </>
    )
}

export default ProductDetail
