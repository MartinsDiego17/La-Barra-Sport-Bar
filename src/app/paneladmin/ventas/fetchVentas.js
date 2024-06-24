require('dotenv').config();
import axios from "axios";

export const fetchVentas = async () => {

    try {
        const url = process.env.NEXT_PUBLIC_GET_SALES;
        const { data }= await axios(url);
        return data;
    } catch (error) {
        console.error("ERROR AL FETCHEAR LAS VENTAS: ", error.message);
    }

}
