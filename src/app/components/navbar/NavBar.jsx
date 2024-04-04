'use client';

import Link from 'next/link';
import './navbar.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { FaUser } from 'react-icons/fa';

export const NavBar = () => {

    const user = useUser();
    const isLogin = user?.isSignedIn;

    const path = usePathname();
    const [liSelect, setLiSelect] = useState({
        inicio: "",
        menu: "",
        reservas: "",
        contacto: ""
    })

    const inicioFn = () => {
        setLiSelect({
            inicio: "activate"
        })
        if(path === "/") return;
        window.location.href = "/";
    }
    const reservasFn = () => {
        setLiSelect({
            reservas: "activate"
        })
        if(path === "/") return;
        window.location.href = "/";
    }
    const contactoFn = () => {
        setLiSelect({
            contacto: "activate"
        })
        if(path === "/") return;
        window.location.href = "/";
    }
    const menuFn = () => {

        window.scrollTo({
            top: 1500,
            behavior: 'smooth'
        });
        
        setLiSelect({
            menu: "activate"
        })
        if(path === "/") return;
        window.location.href = "/";

    }
    const goCart = () => {
        window.location.href = "/carro";
    }

    const renderNavbar = () => {
        if (path.startsWith("/paneladmin")) {
            return (
                <nav className='navbarAdmin'>
                    <section>

                        <article>
                            <ul>
                                <li>Productos</li>
                                <li>Usuarios</li>
                            </ul>
                        </article>

                        <article>
                            <h1><Link href="/" >La Barra</Link></h1>
                        </article>

                        <article>
                            <ul>
                                <li>Ventas</li>
                                <li>Reservas</li>
                            </ul>
                        </article>

                    </section>
                </nav>
            );
        } else {
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
                            <li onClick={menuFn} className={liSelect.menu} >Menú</li>
                            <li onClick={reservasFn} className={liSelect.reservas} >Reservas</li>
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
                        <li onClick={goCart}>Mi carrito</li>
                    </ul>
                </nav>
            );
        }
    }

    return renderNavbar();

}
