import { obtenerFecha } from '@/app/paneladmin/ventas/obtenerFecha';
import './saledetail.css';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const SaleDetail = ({ sale }) => {
    return (
        <div className='salePather' >

            <div className='saleContainer' >

                <Link href="/paneladmin/ventas" ><span><FaArrowLeft /></span>volver</Link>

                <section>

                    <article>
                        <h3>Venta numero {sale.id}</h3>
                        <p className='primero'  >FECHA <span>{obtenerFecha(sale.date)}</span></p>
                        <p>TOTAL <span>$ {sale.total}</span></p>
                    </article>

                    <article>
                        <h3>Lista de productos</h3>

                        <div className="listProducts">
                            {sale?.products?.length &&
                                sale.products.map((pro, index) => (
                                    <div className={index == 0 && "primero"} key={pro.id} >
                                        <p>{pro.name.toUpperCase()}<span>$ {pro.price}</span></p>
                                    </div>
                                ))
                            }
                        </div>

                    </article>

                </section>

            </div>

        </div>
    )
}

export default SaleDetail
