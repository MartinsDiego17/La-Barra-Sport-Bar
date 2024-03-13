import './paginado.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Paginado = ({ totalPages }) => {

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className='paginadoContainer' >
            <span><IoIosArrowBack /></span>
            {
                pages.map((page, index) => (
                    <span>{index+1}</span>
                ))
            }
            <span><IoIosArrowForward /></span>
        </div>
    )
}
