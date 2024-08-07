"use client";

import ListAdmin from "@/app/components/listAdmin/ListAdmin"
import { useStoreProducts } from "@/app/store"
import { useEffect, useState } from "react";

const page = () => {

  const { getAllProducts } = useStoreProducts();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();

        const foods = products.filter(product => product.category === "Comida" || product.category === "comida");
        const drinks = products.filter(product => product.category === "Bebida" || product.category === "bebida");
        const newArr = [...foods, ...drinks];

        setProductos(newArr);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [getAllProducts]);

  return (
    <ListAdmin
      title={"Productos"}
      options={["Todos", "Comidas", "Bebidas"]}
      arr={productos}
    />
  )
}

export default page
