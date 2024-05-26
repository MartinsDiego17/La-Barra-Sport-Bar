const { product, ingredient } = require("../db");

const updateProduct = async ({ id, image, name, category, price, stock, ingredients }) => {
    let productToUpdate = await product.findByPk(id);

    console.log("INGREDIENTES EN EL BACK: ", ingredients);

    if (!productToUpdate) {
        throw new Error('Producto no encontrado');
    }

    if (name.length > 50) {
        throw new Error("El nombre debe tener 50 carácteres o menos.");
    }

    if (category !== "comida" && category !== "bebida") {
        throw new Error("Debes ingresar una categoría válida.");
    }

    if (price > 150000) {
        throw new Error("Debes ingresar un precio menor o igual a $150.000");
    }

    const ingredientInstances = await Promise.all(
        ingredients.map(async ing => {
            const [ingredientInstance, created] = await ingredient.findOrCreate({
                where: { name: ing }
            });
            return ingredientInstance;
        })
    );

    productToUpdate.image = image;
    productToUpdate.name = name;
    productToUpdate.category = category;
    productToUpdate.price = price;
    productToUpdate.stock = stock;

    await productToUpdate.save();
    await productToUpdate.setIngredients(ingredientInstances);

    return productToUpdate;
};

module.exports = updateProduct;