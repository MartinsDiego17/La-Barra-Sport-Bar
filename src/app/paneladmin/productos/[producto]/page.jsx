"use client";

require('dotenv').config();
import { useEffect, useState } from "react";
import { getProduct } from "./getProduct";
import ProductDetail from "@/app/components/productdetail/ProductDetail";
import axios from "axios";

const productPage = ({ params }) => {

  const [product, setProduct] = useState({});
  const [ingredientes, setIngredientes] = useState([]);
  const name = decodeURIComponent(params.producto);

  useEffect(() => {

    const fetchIngredients = async () => {
      try {
        const url = process.env.NODE_ENV === "development" ?
          process.env.NEXT_PUBLIC_GET_INGREDIENTES_LOCAL :
          process.env.NEXT_PUBLIC_GET_INGREDIENTES;
        const { data } = await axios(url);
        setIngredientes(data);
      } catch (error) {
        console.error("Error fetching ingredients: ", error);
      }
    };
    const fetchData = async () => {
      try {
        const productFound = await getProduct(name);
        setProduct(productFound)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchIngredients();
    fetchData();

  }, [getProduct]);

  if (product?.name?.length > 1) {
    return (
      <ProductDetail product={product} ingredients={ingredientes} />
    );
  }

};

export default productPage;