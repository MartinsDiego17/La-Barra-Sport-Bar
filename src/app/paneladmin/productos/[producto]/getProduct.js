require('dotenv').config();
import axios from "axios"

export const getProduct = async (name) => {

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_GET_PRODUCTS_LOCAL :
            process.env.NEXT_PUBLIC_GET_PRODUCTS;
        const { data } = await axios(`${url}/${name}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}