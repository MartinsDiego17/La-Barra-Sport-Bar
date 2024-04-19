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


export default function Home() {

  const { getAllProducts } = useStoreProducts();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [getAllProducts]);

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
