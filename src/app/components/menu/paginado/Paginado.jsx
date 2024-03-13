import './paginado.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Paginado = () => {
    return (
        <div className='paginadoContainer' >
            <span><IoIosArrowBack /></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span><IoIosArrowForward /></span>
        </div>
    )
}
