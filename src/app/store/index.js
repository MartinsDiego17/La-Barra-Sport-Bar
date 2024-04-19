import { create } from 'zustand';
import axios from 'axios';
import { isAdmin } from '../paneladmin/fetchUsers';

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
        const parsedProducts = JSON.parse(productsInStorage);
        return parsedProducts;
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

export const useStoreAdmin = create((set) => ({
    isAdmin: false,

    checkAdmin: async (user) => {
        const data = await user?.user?.getOrganizationMemberships();
        if (data.length == 0) {
            return false;
        }
        return true;
    },

    checkAdmin: async (user) => {

        const data = await user?.user?.getOrganizationMemberships();
        if(data.length == 0) {
            set((state) => ({
                isAdmin: state.isAdmin = false
            }));
            return false;
        }
        set((state) => ({
            isAdmin: state.isAdmin = true
        }));
        return true;
    },
}));
