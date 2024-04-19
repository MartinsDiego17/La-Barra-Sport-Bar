"use client";
import CardAdmin from '../components/cardAdmin/CardAdmin';
import './paneladmin.css';
import { FaArrowLeft } from "react-icons/fa";
import products from '../../app/images/adminImages/productosAdmin.webp'
import { LuLayoutPanelLeft } from "react-icons/lu";
import Link from 'next/link';
import productos from '../../app/images/adminImages/productosCard.jpeg';
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from 'react';
import { useStoreAdmin, useStoreProducts } from '../store';
import Loader from '../components/loader/Loader';
import Image from 'next/image';

const page = () => {

    const [loading, setLoading] = useState(true);
    const user = useUser();
    const [admin, setAdmin] = useState();
    const { checkAdmin, isAdmin } = useStoreAdmin();
    const [userData, setUserdata] = useState("");
    const [lengths, setLengths] = useState({
        products: 0,
        users: 0,
        sells: 0,
        rr: 0,
        rc: 0,
        moreSell: 0
    })
    const { getAllProducts } = useStoreProducts();
    const [localProducts, setLocalProducts] = useState([]);
    const [userImg, setUserImg] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getAllProducts();
                setLocalProducts(products)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [getAllProducts]);
    useEffect(() => {
    }, [])
    useEffect(() => {

        const checkAdminStatus = async () => {
            if (!user.user) return;
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
                            <h2>Panel de administrador<span><LuLayoutPanelLeft /></span></h2>
                            <Link href={"/"} ><button><span><FaArrowLeft /></span>VOLVER AL INICIO</button></Link>
                        </article>

                        <article className='gridItemsAdmin' >
                            <CardAdmin image={productos} title={"Lista de productos"} paragraph={`Productos totales: ${localProducts.length}`} />
                            <CardAdmin image={products} title={"Lista de usuarios"} paragraph={"Usuarios totales: 24"} />
                            <CardAdmin image={products} title={"Historial de ventas"} paragraph={"Ventas totales: 87"} />
                            <CardAdmin image={products} title={"Reservas restaurante/bar"} paragraph={"Reservas totales: 2"} />
                            <CardAdmin image={products} title={"Reservas cancha"} paragraph={"Reservas totales: 6"} />
                            <CardAdmin image={products} title={"Productos más vendidos"} paragraph={"Tragos y comidas"} />
                        </article>

                    </section>

                </div>

            </div>
        </div>
    )
}

export default page
