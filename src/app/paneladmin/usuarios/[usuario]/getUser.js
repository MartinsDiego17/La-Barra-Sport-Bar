require('dotenv').config();
import axios from "axios"

export const getUser = async (id) => {

    try {
        const url = process.env.NODE_ENV === "development" ?
            process.env.NEXT_PUBLIC_GET_USERS_LOCAL :
            process.env.NEXT_PUBLIC_GET_USERS;
        const { data } = await axios(`${url}/${id}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}