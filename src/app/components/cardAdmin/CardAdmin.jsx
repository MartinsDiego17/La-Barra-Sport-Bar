import Image from 'next/image';
import './cardadmin.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CardAdmin = ({ image, title, paragraph }) => {

  let link;

  switch (title) {
    case "Lista de productos":
      link = "paneladmin/productos"
      break;
    case "Lista de usuarios":
      link = "paneladmin/usuarios"
      break;
    case "Historial de ventas":
      link = "paneladmin/ventas"
      break;
    case "Reservas restaurante/bar":
      link = "paneladmin/reservas/bar"
      break;
    case "Reservas cancha":
      link = "paneladmin/reservas/cancha"
      break;
    case "Productos más vendidos":
      link = "paneladmin/masvendidos"
      break;
  }


  return (
    <Link href={link} >
      <div className='cardAdminContainer' >
        <Image src={image} alt={title} width={200} height={220} />
        <div className='detailsCardAdmin' >
          <h4>{title}</h4>
          <p>{paragraph}</p><br />
          <h5>La Barra Sport & Bar</h5>
        </div>
      </div>
    </Link>
  )
}

export default CardAdmin
