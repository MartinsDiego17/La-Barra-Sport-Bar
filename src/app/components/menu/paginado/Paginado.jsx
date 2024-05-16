import './paginado.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Paginado = ({ totalPages, fn, dsf, dsl, current     }) => {

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    if (pages.length == 1) {
        dsf = true;
        dsl = true;
    }

    const handleNumber = (numberPage) => {
        fn(null, numberPage)
    }

    return (
        <div className='paginadoContainer' id='paginadoID' >

            <button disabled={dsf} onClick={() => { fn("prev") }} >
                <div>
                    <a  ><IoIosArrowBack /></a>
                </div>
            </button>

            {
                pages.map((page, index) => (
                    <button onClick={() => { handleNumber(index) }} key={index} id={index + 1 == current && "currentPage"} >
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
