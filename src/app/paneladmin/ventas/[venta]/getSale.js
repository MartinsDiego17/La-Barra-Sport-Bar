require('dotenv').config();
import axios from "axios"

export const getSale = async (id) => {

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_GET_SALES_LOCAL :
            process.env.NEXT_PUBLIC_GET_SALES;
        const { data } = await axios(`${url}/${id}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}