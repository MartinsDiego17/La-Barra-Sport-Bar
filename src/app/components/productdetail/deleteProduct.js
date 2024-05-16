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
            const { data } = await axios.delete(`http://localhost:3002/product/delete/${id}`)
            setTimeout(() => {
                window.location.href = "/paneladmin/productos"
            }, 2000);
            return data;
        } catch (error) {
            return { error: error.message }
        }
    });
}