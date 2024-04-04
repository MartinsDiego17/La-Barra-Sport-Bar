"use client";

import { useEffect, useState } from "react";
import { getProduct } from "./getProduct";
import ProductDetail from "@/app/components/productdetail/ProductDetail";

const productPage = ({ params }) => {

  const [product, setProduct] = useState({});
  const name = decodeURIComponent(params.producto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productFound = await getProduct(name);
        setProduct(productFound)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [getProduct]);


  return (
      <ProductDetail product={product} />
  );
};

export default productPage;