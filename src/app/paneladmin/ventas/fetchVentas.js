import axios from "axios";

export const fetchVentas = async () => {

    try {
        const { data }= await axios('http://localhost:3002/getSales');
        return data;
    } catch (error) {
        console.error("ERROR AL FETCHEAR LAS VENTAS: ", error.message);
    }

}
