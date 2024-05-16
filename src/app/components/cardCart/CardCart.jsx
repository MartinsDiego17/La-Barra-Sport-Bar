import './cardcart.css';
import burga from '../../images/comidas/dragon.webp'
import Image from 'next/image';
import { FaTrash } from "react-icons/fa6";
import { useStoreCart } from '@/app/store';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CardCart = ({ id, name, image, price, fn, comentario, index }) => {

    const [option, setOption] = useState("Agregar");
    const { addComent } = useStoreCart();
    const [comentary, setComentary] = useState(comentario);

    useEffect(() => {
        setComentary(comentario);
    }, [comentary, setComentary]);

    useEffect(() => {
        if (comentario.length > 0) {
            setOption("Editar");
        }
    }, []);

    const handleModal = () => {

        const text = comentario.length > 0 ? "Editar comentario" : "Agregar comentario";
        const text2 = comentario.length > 0 ? "Haz editado el comentario" : "Haz agregado el comentario";

        Swal.fire({
            title: text,
            input: "text",
            inputValue: comentario,
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Confirmar",
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                addComent(index, result.value);
                setComentary(comentario);
                Swal.fire({
                    title: text2,
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        });


    }

    return (
        <div className='patherCard' >
            <div className='cardCartContainer' >
                <h4>{name.toUpperCase()}</h4>
                <h4>${price}</h4>
                <div><Image src={image} alt='name' width={50} height={50} /></div>
                <h4 className='trash semiLight' onClick={() => fn(id)} ><FaTrash /></h4>
            </div>
            <p onClick={handleModal} >{option} comentario</p>
        </div>
    )
}

export default CardCart
