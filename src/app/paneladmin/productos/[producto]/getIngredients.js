require('dotenv').config();
import axios from "axios"

export const getIngredients = async () => {

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_GET_INGREDIENTES_LOCAL :
            process.env.NEXT_PUBLIC_GET_INGREDIENTES;
        const { data } = await axios(url);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}