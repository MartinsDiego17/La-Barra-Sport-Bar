const axios = require("axios");

export const testApi = async () => {
    try {
        const data = await axios("https://la-barra-boulevard.vercel.app/prueba");
        console.log("DATA-BACK: ", data);
    } catch (error) {
        console.error("ERROR: ", error);
    }
};