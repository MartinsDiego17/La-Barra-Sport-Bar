const { ingredient } = require("../db");

const deleteIngredient = async ({ id }) => {

    const ingredientFound = await ingredient.findByPk(id);
    const copyIngredient = ingredientFound;

    if (ingredientFound) {
        await ingredientFound.destroy();
        return copyIngredient;
    }

    return "No hemos encontrado ingredientes con ese ID."

}

module.exports = deleteIngredient;
