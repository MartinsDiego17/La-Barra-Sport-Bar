"use client";

require('dotenv').config();
import { useEffect, useState } from "react";
import { getProduct } from "./getProduct";
import ProductDetail from "@/app/components/productdetail/ProductDetail";
import { getIngredients } from "./getIngredients";

const productPage = ({ params }) => {

  const [product, setProduct] = useState({});
  const [ingredientes, setIngredientes] = useState([]);
  const name = decodeURIComponent(params.producto);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const ingredientsLocal = await getIngredients();
        setIngredientes(ingredientsLocal);
        const productFound = await getProduct(name);
        setProduct(productFound)
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };
    fetchData();

  }, [getProduct, getIngredients]);

  if (product?.name?.length > 1) {
    return (
      <ProductDetail
        product={product}
        ingredients={ingredientes}
        setIngredientes={setIngredientes}
      />
    );
  }

};

export default productPage;