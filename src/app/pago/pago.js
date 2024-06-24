require('dotenv').config();
import axios, { Axios } from "axios";

export const crearPreferencia = async (productos, total, userName, direcciones) => {

    try {
        const url = process.env.NEXT_PUBLIC_POST_PREFERENCE;
        const response = await axios.post(
            url
            , { productos, total, userName, direcciones });

        const { id } = response.data;
        return id;
    } catch (error) {
        console.error("Error: ", error);
    }
}