const getIngredients = require("../controllers/getIngredients");

const handlerGetIngredients = async (req, res) => {
    try {
        const allIngredients = await getIngredients();
        res.status(200).json(allIngredients);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlerGetIngredients;
