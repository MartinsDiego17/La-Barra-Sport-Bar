import CardAdmin from '../components/cardAdmin/CardAdmin';
import './paneladmin.css';
import { FaArrowLeft } from "react-icons/fa";
import products from '../../app/images/adminImages/productosAdmin.webp'
import { LuLayoutPanelLeft } from "react-icons/lu";
import Link from 'next/link';
import productos from '../../app/images/adminImages/productosCard.jpeg';

const page = () => {

    return (
        <div className='panelAdminContainer' >

            <div className='subContainerAdmin' >

                <section>

                    <article className='titleAndButton' >
                        <h2>Panel de administrador<span><LuLayoutPanelLeft /></span></h2>
                        <Link href={"/"} ><button><span><FaArrowLeft /></span>VOLVER AL INICIO</button></Link>
                    </article>

                    <article className='gridItemsAdmin' >
                        <CardAdmin image={productos} title={"Lista de productos"} paragraph={"Productos totales: 19"} />
                        <CardAdmin image={products} title={"Lista de usuarios"} paragraph={"Usuarios totales: 24"} />
                        <CardAdmin image={products} title={"Historial de ventas"} paragraph={"Ventas totales: 87"} />
                        <CardAdmin image={products} title={"Reservas restaurante/bar"} paragraph={"Reservas totales: 2"} />
                        <CardAdmin image={products} title={"Reservas cancha"} paragraph={"Reservas totales: 6"} />
                        <CardAdmin image={products} title={"Productos más vendidos"} paragraph={"Tragos y comidas"} />
                    </article>

                </section>

            </div>

        </div>
    )
}

export default page
