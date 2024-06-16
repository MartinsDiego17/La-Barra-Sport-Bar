"use client";

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
        const { data } = await axios("http://localhost:3002/getIngredients");
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