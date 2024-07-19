const { ingredient } = require('../db');

const crearIngrediente = async ({ name }) => {

    const response = await ingredient.create({
        name,
    });

    return response

}

module.exports = crearIngrediente;