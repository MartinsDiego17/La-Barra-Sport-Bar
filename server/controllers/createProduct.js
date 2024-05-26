const { product, ingredient } = require('../db');

const crearProducto = async ({ image, name, category, price, stock, ingredients }) => {
    // Validaciones
    if (!image || !name || !category || !price || stock === undefined) {
        throw new Error("Todos los campos son obligatorios.");
    }
    if (typeof image !== "string" || typeof name !== "string" || typeof category !== "string" || typeof price !== "number" || typeof stock !== "boolean") {
        throw new Error("Tipos de datos incorrectos.");
    }

    // Crear producto
    const newProduct = await product.create({
        image,
        name,
        category,
        price,
        stock
    });

    // Buscar y asociar ingredientes
    for (const ingredientName of ingredients) {
        let ingredientInstance = await ingredient.findOne({ where: { name: ingredientName } });
        if (!ingredientInstance) {
            // Crear ingrediente si no existe
            ingredientInstance = await ingredient.create({ name: ingredientName });
        }
        await newProduct.addIngredient(ingredientInstance);
    }

    // Obtener el producto con los ingredientes asociados
    const response = await product.findOne({
        where: { id: newProduct.id },
        include: ingredient
    });

    return response;
};

module.exports = crearProducto;
