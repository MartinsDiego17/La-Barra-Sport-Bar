const { product, ingredient } = require('../db');

const getProductByName = async ({ name }) => {

    const formattedName = name.replace(/-/g, ' ');
    const productFound = await product.findOne({
        where: { name: name },
        include: { model: ingredient, through: { attributes: [] }, },
    });

    let ingres = [];
    productFound.dataValues.ingredients.forEach(ingre => {
        ingres.push(ingre.dataValues.name);
    })

    if (productFound) {
        const producto = {
            id: productFound.id,
            image: productFound.image,
            name: productFound.name,
            category: productFound.category,
            price: productFound.price,
            stock: productFound.stock,
            ingredients: ingres
        }
        return producto;
    }

    return "No hemos encontrado productos con ese nombre."

}

module.exports = getProductByName;