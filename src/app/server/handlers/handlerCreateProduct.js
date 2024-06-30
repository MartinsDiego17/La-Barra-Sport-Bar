const crearProducto = require("../controllers/createProduct");

const handlerCreateProduct = async (req, res) => {

    try {
        const { image, name, category, price, stock, ingredients } = req.body;
        const creado = await crearProducto({ image, name, category, price, stock, ingredients });
        res.status(200).json(creado)

    } catch (error) {
        console.log("ESTE ES EL ERROR: ", error.message);
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateProduct;