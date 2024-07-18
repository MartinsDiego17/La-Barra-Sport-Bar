require('dotenv').config();

const axios = require("axios");

export const testApi = async () => {
    try {
        const url = process.env.NODE_ENV === "development" ?
            "http://localhost:3001/prueba" :
            "https://la-barra-boulevard.vercel.app/prueba";
        const data = await axios(url);
        console.log("DATA-BACK: ", data);
    } catch (error) {
        console.error("ERROR: ", error);
    }
};