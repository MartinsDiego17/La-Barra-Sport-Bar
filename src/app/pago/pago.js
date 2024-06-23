import axios, { Axios } from "axios";

export const crearPreferencia = async (productos, total, userName, direcciones) => {

    try {
        const response = await axios.post(
            'http://localhost:3002/create_preference'
            , { productos, total, userName, direcciones });

        const { id } = response.data;
        return id;
    } catch (error) {
        console.error("Error: ", error);
    }
}