import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { Nosotros } from "./components/nosotros/Nosotros"
import { Contacto } from "./components/contacto/Contacto"
import ParticlesWall from "./components/particulas/ParticlesWall"
import Options from "./components/options/Options"

export default function Home() {
  return (
    <>
      <ParticlesWall />
      <Inicio />
      <Options />
      <Menu />
      <Nosotros />
      <Contacto />
    </>
  )
}
