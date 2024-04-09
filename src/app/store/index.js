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
            let updated = JSON.parse(localStorage.getItem("productsInCart"));
            if (updated === null) updated = [];
            updatedProducts = [...updated, product];

            if (typeof window !== "undefined") {
                localStorage.setItem("productsInCart", JSON.stringify(updatedProducts));
            }
            return { productsInCart: updatedProducts };
        });
    },

    chargeProducts: () => {
        const productsInStorage = localStorage.getItem("productsInCart");
        if (!productsInStorage) return [];
        return JSON.parse(productsInStorage)
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
        let allById = [];
        products.forEach(product => {
            if (product.id === id) allById.push(product);
        })
        let updated = products.filter(product => product !== allById[0]);
        localStorage.setItem('productsInCart', JSON.stringify(updated));
    }

}));
