import Image from 'next/image';
import './formcreate.css';
import burga from '../../images/comidas/dragon.jpg';

const FormCreate = () => {
    return (
        <>
            <div className='productContainerAdmin' >

                <div className='sonDetailProduct' >

                    <section>

                        <article className='fieldsProduct' >
                            <h1>Nombre</h1>
                            <div className='optionsCategory' >
                                <p>Comida</p>
                                <p>Bebida</p>
                            </div>
                            <input type="text" placeholder="Ingresar nombre" /> <br />
                            <input type="text" placeholder="Ingresar precio" />
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
                            <button className='buttonsChange' >Cancelar</button>
                        </article>

                        <article className='imageDetail'>
                            <Image src={burga} alt={"image"} width={200} height={200} />
                            <button>Cargar imagen</button>
                        </article>


                    </section>

                </div>


            </div>
        </>
    )
}

export default FormCreate;
