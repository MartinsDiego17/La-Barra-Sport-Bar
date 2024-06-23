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
import ComingSoon from "./components/comingSoon/ComingSoon";

export default function Home() {

  const { getAllProducts } = useStoreProducts();
  const { checkAdmin } = useStoreAdmin();
  const [allProducts, setAllProducts] = useState([]);
  const [localAdmin, setLocalAdmin] = useState("verify");
  const user = useUser();

  useEffect(() => {
    const fetchAdmin = async () => {
      if (user.isLoaded) {
        const is = await checkAdmin(user);
        setLocalAdmin(is);
      }
    }
    fetchAdmin();
  }, [setLocalAdmin]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("ERROR: ", error.message);
      }
    }

    fetchProducts();

  }, [setAllProducts]);

  useEffect(() => {

    const fetchUser = async () => {
      try {
        let data = {};
        if (user?.user) {
          data = await createUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="toComputer" >
        <ParticlesWall />
        <Inicio />
        <Options />
        <Menu products={allProducts} />
        <Nosotros />
        <Contacto />
      </ div>
      <div className="comingSoon" >
        <ComingSoon />
      </div>
    </>
  )
}