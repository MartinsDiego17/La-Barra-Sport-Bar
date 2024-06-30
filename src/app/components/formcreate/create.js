require('dotenv').config();
import axios from "axios";
import Swal from 'sweetalert2';

export const createProduct = async (product) => {
    product.price = Number(product.price);

    product.ingredients = product.ingredientes;

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_GET_PRODUCTS_LOCAL :
            process.env.NEXT_PUBLIC_GET_PRODUCTS;
        const { data } = await axios(url);
        const existingProduct = data.find(producto => producto.name.toUpperCase() === product.name.toUpperCase());

        if (existingProduct) {
            Swal.fire("Ya hay productos con ese nombre.");
            return false;
        }
    } catch (error) {
        console.log({ error: error.message });
        return;
    }


    {
        if (product.name === "Nombre") {
            Swal.fire("Debes ponerle otro nombre al producto.");
            return;
        } else if (product.image.length < 1) {
            Swal.fire("Debes ingresar una imagen válida.");
            return;
        } else if (product.category.length < 1) {
            Swal.fire("Debes ingresar una categoría válida.");
            return;
        } else if (product.price < 1) {
            Swal.fire("Debes ingresar un precio más alto.");
            return;
        }
    }

    try {
        const urlPost = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_POST_PRODUCT_LOCAL :
            process.env.NEXT_PUBLIC_POST_PRODUCT;
        const { data } = await axios.post(urlPost, product);
        Swal.fire({
            title: "Haz creado el producto con éxito.",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ir a lista de productos",
            cancelButtonText: "Crear otro producto"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/paneladmin/productos"
                return data;
            }
            window.location.reload()
        });
        return data;
    } catch (error) {
        console.log("Error: ", error.message);
        return { error: error.message };
    }
}
