const axios = require("axios");

export const testApi = async () => {
    try {
        const data = await axios("http://localhost:3001/prueba");
        console.log("DATA-BACK: ", data);
    } catch (error) {
        console.error("ERROR: ", error);
    }
};