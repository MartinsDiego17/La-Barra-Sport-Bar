"use client";
import { Inicio } from "./components/inicio/Inicio"
import { Menu } from "./components/menu/Menu"
import { Nosotros } from "./components/nosotros/Nosotros"
import { Contacto } from "./components/contacto/Contacto"
import ParticlesWall from "./components/particulas/ParticlesWall"
import Options from "./components/options/Options"
import { useStoreProducts, useStoreAdmin } from "./store"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createUser } from "./createUser";

export default function Home() {

  const { getAllProducts } = useStoreProducts();
  const { checkAdmin, isAdmin } = useStoreAdmin();
  const [usuario, setUsuario] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [infoUser, setInfoUser] = useState({});
  const [localAdmin, setLocalAdmin] = useState("verify");
  const user = useUser();

  //SETEA EL ESTADO LOCAL DE BOOLEANO
  useEffect(() => {
    const fetchAdmin = async () => {
      if (user.isLoaded) {
        const is = await checkAdmin(user);
        setLocalAdmin(is);
      }
    }
    fetchAdmin();
  }, [user, checkAdmin, isAdmin]);


  useEffect(() => {
    if (!user.isLoaded) setUsuario(user);
  }, [user, setUsuario, usuario]);

  useEffect(() => {

    if (infoUser?.id && infoUser.id > 0) return;

    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        let data;
        if (user.user) data = await createUser(user);
        setInfoUser(data);
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [getAllProducts, user]);

  return (
    <>
      <ParticlesWall />
      <Inicio />
      <Options />
      <Menu products={allProducts} />
      <Nosotros />
      <Contacto />
    </>
  )
}
