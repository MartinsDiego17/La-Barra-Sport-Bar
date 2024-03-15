import './paginado.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Paginado = ({ totalPages }) => {

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className='paginadoContainer' >

            <div>
                <span><IoIosArrowBack /></span>
            </div>

            {
                pages.map((page, index) => (
                    <div key={index}>
                        <span>{index + 1}</span>
                    </div>
                ))
            }

            <div>
                <span><IoIosArrowForward /></span>
            </div>

        </div>
    )
}
