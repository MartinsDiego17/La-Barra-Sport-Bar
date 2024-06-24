require('dotenv').config();
import axios from "axios"

export const getProduct = async (name) => {

    try {
        const url = process.env.NEXT_PUBLIC_GET_PRODUCTS;
        const { data } = await axios(`${url}/${name}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}