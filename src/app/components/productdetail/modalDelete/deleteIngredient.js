import axios from "axios";
import Swal from "sweetalert2";

export const deleteIngredient = async (ing) => {

    const { name, id } = ing;

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_DELETE_INGREDIENT_LOCAL :
            process.env.NEXT_PUBLIC_DELETE_INGREDIENT;
        const { data } = await axios.delete(`${url}/${id}`)
        Swal.fire("Ingrediente eliminado con éxito");
        return data;
    } catch (error) {
        Swal.fire("Error al eliminar el ingrediente");
        console.error("ERROR: ", error.message);
    }

};