const { product/* , ingredient */ } = require('../db');

const crearProducto = async ({ image, name, category, price, stock/* , ingredients */ }) => {

console.log(image)
    //VALIDACIONES
    {
        if (!image && !name && !category && !price && !stock/*  && !ingredientes */) {
            return "Para crear un producto debes indicar sus propiedades.";
        }
        // IMAGEN
        if (!image) {
            return "Debes indicar una imagen para el producto.";
        }
        if (typeof image !== "string") {
            return "Debes indicar una imagen válida.";
        }

        // NOMBRE
        if (!name) {
            return "Debes indicar un nombre para el producto.";
        }
        if (typeof name !== "string") {
            return "Debes indicar un nombre válido.";
        }

        // CATEGORÍA
        if (!category) {
            return "Debes indicar una categoría para el producto.";
        }
        if (typeof category !== "string") {
            return "Debes indicar una categoría válida.";
        }

        // PRECIO
        if (!price) {
            return "Debes indicar un precio para el producto.";
        }
        if (typeof price !== "number") {
            return "Debes indicar un precio válido.";
        }

        // STOCK
        if (typeof stock !== "boolean") {
            return "Debes indicar un stock válido.";
        }

        // INGREDIENTES
        /*         if (!ingredients) return "Debes indicar una lista de ingredientes para el producto.";
        if (!Array.isArray(ingredients)) return "Debes indicar una lista de ingredientes válida."; */
    }

    /*     const ingredientesExistentes = await ingredient.findAll();
    
        const ingredientes = ingredientesExistentes.filter((ingredienteExistente) => {
            return ingredients.includes(ingredienteExistente.name);
        });
    
        const ingredientValue = ingredientes.length > 0 ? ingredientes.map((ingrediente) => ({ name: ingrediente.name })) : "No hay ingredientes aún"; */

    const response = await product.create({
        image,
        name,
        category,
        price,
        stock
    });


    return response;

}

module.exports = crearProducto;