"use client";
import Product from '@/app/components/product/Product';
import Relacionado from '@/app/components/relacionado/Relacionado';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/loader/Loader';
import { useUser } from "@clerk/nextjs";
import { useStoreAdmin, useStoreProducts } from '@/app/store';

const comidaPage = ({ params }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({});
    const { getAllProducts } = useStoreProducts();
    const { isAdmin } = useStoreAdmin();
    const [localUser, setLocalUser] = useState();
    const user = useUser();

    useEffect(() => {
        if (localUser !== undefined || localUser) return;
        setLocalUser(user.user);
    }, [user]);

    useEffect(() => {
        console.log(3);
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

    useEffect(() => {
    }, [isAdmin]);

    const allFoods = allProducts.filter(producto => producto.category === "comida");
    let relacionados = [];
    for (let i = 0; i < 5; i++) {
        if (allFoods[i] || allFoods[i] !== undefined) relacionados.push(allFoods[i]);
    }

    if (allProducts.length < 1 || !product.image || !product) return <Loader />

    return (
        <div className='patherContainer' > 
            <Product product={product} />
            {relacionados.length && <Relacionado relacionados={relacionados} />}
        </div>
    );
};

export default comidaPage;