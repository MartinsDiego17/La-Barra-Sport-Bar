import './paginado.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Paginado = ({ totalPages, fn, dsf, dsl }) => {

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className='paginadoContainer' id='paginadoID' >

            <button disabled={dsf} onClick={() => { fn("prev") }} >
                <div>
                    <a  ><IoIosArrowBack /></a>
                </div>
            </button>

            {
                pages.map((page, index) => (
                    <button key={index} >
                        <div key={index}>
                            {index + 1}
                        </div>
                    </button>
                ))
            }

            <button disabled={dsl} onClick={() => { fn("next") }} >
                <div>
                    <a> <IoIosArrowForward /></a>
                </div>
            </button>

        </div>
    )
}
