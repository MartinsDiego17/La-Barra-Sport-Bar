import axios from "axios"

export const getSale = async (id) => {

    try {
        const { data } = await axios(`http://localhost:3002/getSales/${id}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}