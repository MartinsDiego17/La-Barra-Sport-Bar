import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { Nosotros } from "./components/nosotros/Nosotros"
import { Contacto } from "./components/contacto/Contacto"
import ParticlesWall from "./components/particulas/ParticlesWall"

export default function Home() {
  return (
    <>
      <ParticlesWall />
      <Inicio />
      <Nosotros />
      <Menu />
      <Contacto />
    </>
  )
}
