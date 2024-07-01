require('dotenv').config();

import { create } from 'zustand';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useStoreProducts = create((set) => ({
    allProducts: [],

    getAllProducts: async () => {
        try {
            console.log("Antes de la solicitud");
            const url = process.env.NODE_ENV === "development" ?
                process.env.NEXT_PUBLIC_GET_PRODUCTS_LOCAL :
                process.env.NEXT_PUBLIC_GET_PRODUCTS;

            const { data } = await axios(url);
            console.log("Data: ", data);
            return data;
        } catch (error) {
            console.error("ERROR: ", error.message);
        }
    }
}));

export const useStoreCart = create((set) => ({
    productsInCart: [],

    addProducts: (product) => {
        set((state) => {

            let text;

            let updated = JSON.parse(localStorage.getItem("productsInCart"));
            if (updated === null) updated = [];

            if (product instanceof Array) {
                product.forEach(producto => {
                    producto.comentario = "";
                    updated.push(producto);
                })
                text = "Productos agregados al carrito";
            }

            else {
                product.comentario = "";
                updated.push(product);
                text = "Producto agregado al carrito";
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("productsInCart", JSON.stringify(updated));
            }

            set((state) => ({
                productsInCart: state.productsInCart = updated,
            }));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: text,
                showConfirmButton: false,
                timer: 1500
            });

            return updated;
        });
    },
    addComent: (index, coment) => {
        let products = JSON.parse(localStorage.getItem('productsInCart')) || [];
        let product = products[index];
        product.comentario = coment;
        localStorage.setItem('productsInCart', JSON.stringify(products));
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
        try {
            const data = await user?.user?.getOrganizationMemberships();
            if (!data || data.length === 0) {
                set({ isAdmin: false });
                return false;
            }
            set({ isAdmin: true });
            return true;
        } catch (error) {
            console.log("No se han podido obtener los datos", error);
            set({ isAdmin: false });
            return false;
        }
    },
}));

export const useStoreUsers = create((set) => ({
    users: [],

    getAllUsers: async () => {
        try {
            const url = process.env.NODE_ENV === "development" ?
                process.env.NEXT_PUBLIC_GET_USERS_LOCAL :
                process.env.NEXT_PUBLIC_GET_USERS;
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            throw new Error("Ha ocurrido un error en la solicitud de los usuarios");
        }
    },
}));
