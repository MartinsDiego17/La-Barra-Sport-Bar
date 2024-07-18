require('dotenv').config();

const axios = require("axios");

export const testApi = async () => {
    console.log("Se está ejecutando");
    try {
        const url = process.env.NODE_ENV === "development" ?
            "http://localhost:3001/api/prueba" :  // Usando /api/prueba para entorno local
            "https://la-barra-boulevard.vercel.app/api/prueba";  // Usando /api/prueba para despliegue en Vercel
        const response = await axios.get(url);
        console.log("DATA-BACK: ", response.data);
    } catch (error) {
        console.error("ERROR: ", error);
    }
};
