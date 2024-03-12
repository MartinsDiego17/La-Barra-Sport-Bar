import './footer.css';
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

export const Footer = () => {
    return (
        <>
            <div className='footerContainer' >

                <div>
                    <h3>Categorías</h3>
                    <p>Productos</p>
                    <p>Delívery</p>
                    <p>Reservas</p>
                    <p>Contacto</p>
                </div>

                <div>
                    <h3>Contáctanos</h3>
                    <p><span><FaWhatsapp /></span>+54 11 4322 8376</p>
                    <p><span><LuPhone /></span>+54 11 4322 8376</p>
                    <p><span><MdOutlineMail /></span>labarra@hotmail.com</p>
                    <p><span><CiLocationOn /></span>Av. Francisco Bilbao 3420</p>
                </div>

                <div>
                    <h3>Síguenos en nuestras <br /> redes sociales y enterate  <br />de todas las novedades</h3>
                    <div className='redes' >
                        <h4><FaInstagram /></h4>
                        <h4><TiSocialFacebook /></h4>
                    </div>
                </div>

            </div>
            <div className='programadores' >
                <p>
                    Copyright © La Barra Sport & Bar. Todos los derechos reservados. <br />
                    Desarrollado por <span className='light' >Gonzalo Martins</span> y <span className='light' >Diego Martins</span>.
                </p>
            </div>
        </>
    )
}
