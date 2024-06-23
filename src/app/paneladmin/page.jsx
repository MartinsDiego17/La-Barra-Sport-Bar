"use client";
import CardAdmin from '../components/cardAdmin/CardAdmin';
import './paneladmin.css';
import { FaArrowLeft } from "react-icons/fa";
import users from '../../app/images/adminImages/users.webp'
import history from '../../app/images/adminImages/history.webp';
import Link from 'next/link';
import productos from '../../app/images/adminImages/productosAdmin.jpg';
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from 'react';
import { useStoreAdmin, useStoreProducts, useStoreUsers } from '../store';
import Loader from '../components/loader/Loader';
import { fetchVentas } from './ventas/fetchVentas';

const page = () => {

    const [loading, setLoading] = useState(true);
    const user = useUser();
    const [admin, setAdmin] = useState();
    const { checkAdmin, isAdmin } = useStoreAdmin();
    const [userData, setUserdata] = useState("");
    const { getAllProducts } = useStoreProducts();
    const { getAllUsers } = useStoreUsers();
    const [localProducts, setLocalProducts] = useState([]);
    const [localUsers, setLocalUsers] = useState([]);
    const [localSales, setLocalSales] = useState([]);
    const [userImg, setUserImg] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const products = await getAllProducts();
                const users = await getAllUsers();
                const sales = await fetchVentas();
                setLocalProducts(products)
                setLocalUsers(users)
                setLocalSales(sales);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [getAllProducts, getAllUsers, fetchVentas]);
    useEffect(() => {
    }, [])
    useEffect(() => {

        const checkAdminStatus = async () => {
            if (!user.user || admin) return;
            try {
                const isAdminUser = await checkAdmin(user);
                setUserImg(user.user.imageUrl);
                setUserdata(user.user.fullName);
                setAdmin(isAdminUser);
            } catch (error) {
                console.error("Error al verificar el estado de administrador:", error);
            }
        };

        checkAdminStatus();

    }, [user]);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    if (loading) {
        return <Loader />
    }

    if (isAdmin !== undefined && !isAdmin) {
        window.location.href = "/";
        return;
    }
    return (
        <div className='patherAdmin' >

            <div className='userData' >
                <span>{userData}</span>
                <img src={userImg} alt={userData} width={30} height={30} />
            </div>

            <div className='panelAdminContainer' >

                <div className='subContainerAdmin' >

                    <section>

                        <article className='titleAndButton' >
                            <Link href={"/"} ><button><span><FaArrowLeft /></span>Volver</button></Link>
                        </article>

                        <article className='gridItemsAdmin' >

                            <CardAdmin
                                image={productos}
                                title={"Lista de productos"}
                                paragraph={`Cantidad de productos: ${localProducts.length}`} />

                            <CardAdmin
                                image={users}
                                title={"Lista de usuarios"}
                                paragraph={`Cantidad de usuarios: ${localUsers.length}`} />

                            <CardAdmin
                                image={history}
                                title={"Historial de ventas"}
                                paragraph={`Cantidad de ventas: ${localSales.length}`} />

                        </article>

                    </section>

                </div>

            </div>
        </div>
    )
}

export default page