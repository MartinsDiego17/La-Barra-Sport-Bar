import axios from "axios"

export const getProduct = async (name) => {

    try {
        const { data } = await axios(`http://localhost:3002/getProducts/${name}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}