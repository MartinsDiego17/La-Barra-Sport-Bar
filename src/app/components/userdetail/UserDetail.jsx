"use client";
import Link from 'next/link';
import './userdetail.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect } from 'react';

const UserDetail = ({ user }) => {

    useEffect(() => {
        console.log("Usuario actual: ", user);
    }, []);

    return (
        <div className='userDetailContainer'>
            <div className='userDetailChildren'>
                <div>
                    <Link href="/paneladmin/usuarios" ><span><FaArrowLeft /></span>volver</Link>
                </div>
                <img src={user.image} alt={user.name} />
                <h1>{user.name}</h1>
                <p className='first' >ID<span>{user.id}</span></p>
                <p>Email<span>{user.email}</span></p>
                <p>Tipo de usuario<span>{user.isAdmin ? "Administrador" : "Común"}</span></p>
            </div>
        </div>
    )
}

export default UserDetail
