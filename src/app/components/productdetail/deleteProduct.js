require('dotenv').config();
import axios from "axios"
import Swal from "sweetalert2"

export const deleteProduct = async (id) => {
    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar el producto?",
        text: "No podrás deshacer esta acción",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
    }).then(async (result) => {
        if (!result.isConfirmed) {
            return;
        }
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado!",
                text: "El producto ha sido eliminado.",
                icon: "success"
            });
        }
        try {
            const url = process.env.NEXT_PUBLIC_DELETE_PRODUCT;
            const { data } = await axios.delete(`url/${id}`)
            setTimeout(() => {
                window.location.href = "/paneladmin/productos"
            }, 2000);
            return data;
        } catch (error) {
            return { error: error.message }
        }
    });
}