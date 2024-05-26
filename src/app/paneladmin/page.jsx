"use client";
import CardAdmin from '../components/cardAdmin/CardAdmin';
import './paneladmin.css';
import { FaArrowLeft } from "react-icons/fa";
import users from '../../app/images/adminImages/users.webp'
import history from '../../app/images/adminImages/history.webp';
import { LuLayoutPanelLeft } from "react-icons/lu";
import Link from 'next/link';
import productos from '../../app/images/adminImages/productosAdmin.jpg';
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from 'react';
import { useStoreAdmin, useStoreProducts } from '../store';
import Loader from '../components/loader/Loader';

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

        const path = window.location.href.split("/");
        if (path) {
          const style = document.createElement('style');
          style.textContent = `
            body::-webkit-scrollbar {
              width: 15px;
            }
        
            body::-webkit-scrollbar-track {
              background-color: #aaa;
            }
        
            body::-webkit-scrollbar-thumb {
              background-color: #222;
            }
        
            body::-webkit-scrollbar-thumb:hover {
              background-color: #b10303;
            }
          `;
          document.head.appendChild(style);
        }

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


    /*     if (isAdmin !== undefined && !isAdmin) {
            window.location.href = "/";
            return;
        } */

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
                            <CardAdmin image={productos} title={"Lista de productos"} paragraph={`Productos totales: ${localProducts.length}`} />
                            <CardAdmin image={users} title={"Lista de usuarios"} paragraph={"Usuarios totales: 24"} />
                            <CardAdmin image={history} title={"Historial de ventas"} paragraph={"Ventas totales: 87"} />
                        </article>

                    </section>

                </div>

            </div>
        </div>
    )
}

export default page
