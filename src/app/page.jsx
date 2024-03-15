import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { Nosotros } from "./components/nosotros/Nosotros"
import { Contacto } from "./components/contacto/Contacto"

export default function Home() {
  return (
    <>
      <Inicio />
      {/*<Nosotros />*/}
      <Menu />
      <Contacto />
    </>
  )
}
