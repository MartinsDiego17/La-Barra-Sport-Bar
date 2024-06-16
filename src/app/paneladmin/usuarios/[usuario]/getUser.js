import axios from "axios"

export const getUser = async (id) => {

    try {
        const { data } = await axios(`http://localhost:3002/getUsers/${id}`);
        return data;
    } catch (error) {
        return { error: error.message }
    }

}