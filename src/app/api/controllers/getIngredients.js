const { ingredient } = require("../db");

const getIngredients = async () => {
    const ingredients = await ingredient.findAll();
    
    const allIngredients = ingredients.map(ingrediente => {
        return {
            id: ingrediente.id,
            name: ingrediente.name,
        };
    });
    
    return allIngredients;
};

module.exports = getIngredients;
