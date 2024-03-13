import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { NavBar } from "./components/navbar/NavBar"
import { Footer } from "./components/footer/Footer"
import { Nosotros } from "./components/nosotros/Nosotros"

export default function Home() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Nosotros />
      <Menu />
      <Footer />
    </>
  )
}
