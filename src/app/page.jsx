import { Card } from "./components/menu/card/Card"
import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { NavBar } from "./components/navbar/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Menu />
    </>
  )
}
