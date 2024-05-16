import Link from 'next/link';
import './buttonback.css';
import { FaArrowLeft } from 'react-icons/fa';

const ButtonBack = ({ route }) => {
    return (
        <Link href={route} >
            <button className='buttonBack'>
                <FaArrowLeft />
                <span>Volver</span>
            </button>
        </Link>
    )
}

export default ButtonBack
