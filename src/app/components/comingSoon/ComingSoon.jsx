import Link from 'next/link';
import './comingsoon.css';
import { GiGearHammer } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className='comingSoonContainer' >
      <span className='iconHammer' ><GiGearHammer /></span>
      <p>La versión móvil de nuestra aplicación está en desarrollo. Mantente atento para más actualizaciones.</p>
      <hr />
      <h4>La Barra Boulevard</h4>
      <div className="redesComingSoon">
        <Link target='_blank' href={'https://www.instagram.com/labarraboulevard/'} >
          <span><FaInstagram /></span>
        </Link>
        <Link target='_blank' href={'https://www.facebook.com/LaBarraSportBarIqq'} >
          <span><FaFacebookSquare /></span>
        </Link>
      </div>
    </div>
  )
}

export default ComingSoon
