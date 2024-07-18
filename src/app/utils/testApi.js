require('dotenv').config();

const axios = require("axios");

export const testApi = async () => {
    console.log("Se está ejecutando");
    try {
        const url = process.env.NODE_ENV === "development" ?
            "http://localhost:3001/api/prueba" : 
            "https://la-barra-boulevard.vercel.app/api/prueba"; 
            const response = await axios.get(url);
        console.log("DATA-BACK: ", response.data);
    } catch (error) {
        console.error("ERROR: ", error);
    }
};
