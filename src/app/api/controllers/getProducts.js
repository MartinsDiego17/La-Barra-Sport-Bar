const { product, ingredient } = require("../db");

const getProducts = async () => {

    const products = await product.findAll({
        include: { model: ingredient, through: { attributes: [] }, },
    });

    const allProducts = products.map(product => {

        const ing = product.dataValues.ingredients.map(ingre => ingre.name);
        return {
            id: product.id,
            image: product.image,
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
            ingredients: ing,
        };
    });

    return allProducts;
};

module.exports = getProducts;
