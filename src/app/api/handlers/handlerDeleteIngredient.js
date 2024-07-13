const deleteIngredient = require("../controllers/deleteIngredient");

const handlerDeleteIngredient = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedIngredient = await deleteIngredient({ id });
        res.status(200).json(deletedIngredient)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerDeleteIngredient;