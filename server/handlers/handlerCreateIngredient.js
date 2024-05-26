const crearIngrediente = require("../controllers/createIngredient");

const handlerCreateIngredient = async (req, res) => {

    try {
        const { name, } = req.body;
        const creado = await crearIngrediente({ name });
        res.status(200).json(creado)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateIngredient;