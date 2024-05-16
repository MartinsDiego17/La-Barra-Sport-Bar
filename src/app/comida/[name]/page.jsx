"use client";
import Product from '@/app/components/product/Product';
import Relacionado from '@/app/components/relacionado/Relacionado';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/loader/Loader';
import { useStoreProducts } from '@/app/store';

const comidaPage = ({ params }) => {

    const [allProducts, setAllProducts] = useState([]);
    const { getAllProducts } = useStoreProducts();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const name = decodeURIComponent(params.name);
        const fetchData = async () => {
            try {
                const products = await getAllProducts();
                let producto = products.find(comida => comida.name === name);
                setProduct(producto);
                setAllProducts(products)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [getAllProducts]);

    const allFoods = allProducts.filter(producto => producto.category === "comida");
    const relacionados = [allFoods[0], allFoods[1], allFoods[2], allFoods[3]]


    if (allProducts.length < 1 || !product.image || !relacionados[0].id) return <Loader />
    return (
        <div className='patherContainer' >
            <Product product={product} />
            <Relacionado relacionados={relacionados} />
        </div>
    );
};

export default comidaPage;