"use client";
import Product from '@/app/components/product/Product';
import Relacionado from '@/app/components/relacionado/Relacionado';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/loader/Loader';
import { useStoreProducts } from '@/app/store';

const bebidaPage = ({ params }) => {

    const [allProducts, setAllProducts] = useState([]);
    const { getAllProducts } = useStoreProducts();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const name = decodeURIComponent(params.name);
        const fetchData = async () => {
            try {
                const products = await getAllProducts();
                let producto = products.find(bebida => bebida.name === name);
                setProduct(producto);
                setAllProducts(products)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [getAllProducts]);

    const allDrinks = allProducts.filter(producto => producto.category === "bebida");
    let relacionados = [];
    for (let i = 0; i < 5; i++) {
        if (allDrinks[i] || allDrinks[i] !== undefined) relacionados.push(allDrinks[i]);
    }

    if (allProducts.length < 1 || !product.image || !relacionados[0].id || !product) return <Loader />
    return (
        <div className='patherContainer' >
            <Product product={product} />
            <Relacionado relacionados={relacionados} />
        </div>
    );
};

export default bebidaPage;