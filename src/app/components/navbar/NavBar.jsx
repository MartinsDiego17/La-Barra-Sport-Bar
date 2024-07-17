'use client';

import Link from 'next/link';
import './navbar.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { FaUser } from 'react-icons/fa';
import { useStoreAdmin, useStoreCart } from '@/app/store';

export const NavBar = () => {

    const [admin, setAdmin] = useState();
    const [liSelect, setLiSelect] = useState({
        inicio: "",
        menu: "",
        reservas: "",
        contacto: ""
    })
    const [loading, setLoading] = useState(true);
    const { chargeProducts } = useStoreCart();
    const { checkAdmin, isAdmin } = useStoreAdmin();
    const user = useUser();
    const path = usePathname();
    const isLogin = user?.isSignedIn;

    useEffect(() => {
        if (!user.user || admin) return;
        const checkAdminStatus = async () => {
            if (!user.user) return;
            try {
                const isAdminUser = await checkAdmin(user);
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
        }, 1500);
    }, [setLoading])

    const handleRoute = (route) => {
        window.location.href = route;
    }
    const inicioFn = () => {
        setLiSelect({
            inicio: "activate"
        })
        if (path === "/") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        window.location.href = "/";
    }
    const reservasFn = (ruta) => {
        handleRoute(ruta);
        setLiSelect({
            reservas: "activate"
        })
        if (path === "/") return;
        window.location.href = "/";
    }
    const contactoFn = () => {
        setLiSelect({
            contacto: "activate"
        })
        if (path !== "/") {
            window.location.href = "/";
            return;
        }
        window.scrollTo({
            top: 10000,
            behavior: 'smooth'
        });
    }
    const goCart = () => {
        window.location.href = "/carro";
    }

    const changeRoute = (route) => {
        if (path != `/paneladmin/${route}` && route) window.location.href = `/paneladmin/${route}`;
        if (!route && path != `/paneladmin`) window.location.href = "/paneladmin";
    }

    const renderNavbar = () => {
        if (path.startsWith("/paneladmin")) {
            if (admin) {
                return (
                    <nav className='navbarAdmin'>
                        <section>

                            <article>
                                <ul>
                                    <li onClick={() => changeRoute("productos")} >Productos</li>
                                    <li onClick={() => changeRoute(0)} >Inicio</li>
                                </ul>
                            </article>

                            <article>
                                <h1><Link href="/" >La Barra</Link></h1>
                            </article>

                            <article>
                                <ul>
                                    <li onClick={() => changeRoute("usuarios")} >Usuarios</li>
                                    <li onClick={() => changeRoute("ventas")} >Ventas</li>
                                </ul>
                            </article>

                        </section>
                    </nav>
                );
            }
        }
        else {
            return (
                <nav className='navContainer'>
                    {path !== "/" ? (
                        <a href="/"><h1 className='semiLight' onClick={() => scroll()} >LA BARRA</h1></a>
                    ) : (
                        <h1 className='semiLight' onClick={() => scroll()} >LA BARRA</h1>
                    )}

                    {path !== "/comidas/:name" &&
                        <ul className='itemsNav' >
                            <li onClick={inicioFn} className={liSelect.inicio} >Inicio</li>
                            <li onClick={() => reservasFn("/reservas")} className={liSelect.reservas} >Reservas</li>
                            <li onClick={contactoFn} className={liSelect.contacto} >Contacto</li>
                        </ul>
                    }

                    <ul className='userAndCart' > 
                        {
                            isLogin ? (
                                <>
                                    <a className='linkUserNav' >
                                        <UserButton
                                            className="rounded-full items-center "
                                            afterSignOutUrl="/"
                                        />
                                    </a>
                                    <h4 className="font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 ">
                                    </h4>
                                </>
                            ) : (
                                <a
                                    href="/sign-in"
                                    className="linkUserNav   text-white rounded-sm my-1.5 mx-1.5 place-content-center text-sm h-6.5 text-center "
                                >
                                    <span className='iconUserNav' ><FaUser /></span>
                                </a>
                            )
                        }
                        <li onClick={goCart}>Carrito <span className='quantityProducts' >({0/* {chargeProducts().length} */})</span></li>
                    </ul> 
                </nav>
            );
        }
    }
    return renderNavbar();

}   