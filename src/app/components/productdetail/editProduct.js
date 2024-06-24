require('dotenv').config();
import axios from "axios";
import Swal from 'sweetalert2';

export const editProduct = async (product) => {

    product.price = Number(product.price);

    {
        if (product.name === "Nombre" || product.name.length < 1) {
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
        const url = process.env.NEXT_PUBLIC_UPDATE_PRODUCT;
        const { data } = await axios.put(`${url}/${product.id}`, product);
        Swal.fire({
            title: "Haz editado el producto con éxito.",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ir a lista de productos",
            cancelButtonText: "Seguir editando"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/paneladmin/productos"
                return data;
            }
        });
        return data;
    } catch (error) {
        console.log("Error: ", error.message);
        return { error: error.message };
    }
}
