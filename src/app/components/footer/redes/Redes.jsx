import './redes.css';
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Redes = () => {
    return (
        <div className='redes' >
            <a target='_BLANK' href='https://www.instagram.com/labarraboulevard/'><h4><FaInstagram /></h4></a>
            <a target='_BLANK' href='https://www.facebook.com/LaBarraSportBarIqq' ><h4><TiSocialFacebook /></h4></a>
        </div>
    )
}

export default Redes
