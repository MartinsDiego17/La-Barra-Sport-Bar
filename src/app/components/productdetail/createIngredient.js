import axios from "axios";
import Swal from "sweetalert2";

export const createIngredient = async () => {
    const { value } = await Swal.fire({
        input: "text",
        inputLabel: "Crea un ingrediente",
        inputPlaceholder: "Cebolla..."
    });
    if (!value) {
        Swal.fire("Error al crear el ingrediente.");
        return;
    }

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_POST_INGREDIENT_LOCAL :
            process.env.NEXT_PUBLIC_POST_INGREDIENT;
        const data = await axios.post(url, { name: value });
        Swal.fire("Haz creado el ingrediente con éxito");
        return data;
    } catch (error) {
        Swal.fire("Error al crear el ingrediente.");
        console.error("ERROR: ", error.message);
    }

};
