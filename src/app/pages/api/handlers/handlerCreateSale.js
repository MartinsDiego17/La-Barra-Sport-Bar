const crearVenta = require("../controllers/createSale");

const handlerCreateSale = async (req, res) => {

    try {
        const { total, date, products } = req.body;
        const ventaCreada = await crearVenta({ total, date, products });
        res.status(200).json(ventaCreada)

    } catch (error) {
        console.log("ESTE ES EL ERROR: ", error.message);
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateSale;