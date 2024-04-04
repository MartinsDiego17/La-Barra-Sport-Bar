import { create } from 'zustand';
import axios from 'axios';

export const useStoreProducts = create((set) => ({
    allProducts: [],

    getAllProducts: async () => {
        try {
            const { data } = await axios.get("http://localhost:3002/getProducts");
            set({ allProducts: data });
            return data;
        } catch (error) {
            throw new Error("Ha ocurrido un error en la solicitud de los productos");
        }
    },
}));

export const useStoreCart = create((set) => ({
    productsInCart: [],

    addProducts: (product) => {
        set((state) => {
            let updatedProducts;
            updatedProducts = [...state.productsInCart, product];

            if (typeof window !== "undefined") {
                localStorage.setItem("productsInCart", JSON.stringify(updatedProducts));
            }
            return { productsInCart: updatedProducts };
        });
    },

    chargeProducts: () => {
        const productsInStorage = localStorage.getItem("productsInCart");
        if (!productsInStorage) return [];

        if (productsInStorage) {
            try {
                const arrProducts = JSON.parse(productsInStorage);
                set((state) => ({
                    productsInCart: [...state.productsInCart, ...arrProducts],
                    error: null
                }));
                return arrProducts;
            } catch (error) {
                set({ error: error.message });
                return [];
            }
        } else {
            set({ productsInCart: [], error: null });
        }
    },

    clearProducts: () => {
        set((state) => {
            if (typeof window !== "undefined") {
                localStorage.removeItem("productsInCart");
            }
            return { productsInCart: [] };
        });
    },

    removeProduct: (id) => {
        let products = JSON.parse(localStorage.getItem('productsInCart')) || [];
        let updatedProducts = products.filter(product => product.id !== id);
        console.log(updatedProducts)
        localStorage.setItem('productsInCart', JSON.stringify(updatedProducts));
    }

}));
