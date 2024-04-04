const { product } = require('../db');

const getProductByName = async ({ name }) => {

    const formattedName = name.replace(/-/g, ' ');

    const productFound = await product.findOne({ where: { name: formattedName } });


    if (productFound) {
        const producto = {
            id: productFound.id,
            image: productFound.image,
            name: productFound.name,
            category: productFound.category,
            price: productFound.price,
            stock: productFound.stock/* ,
            ingredients: producto.ingredients, */
        }
        return producto;
    }

    return "No hemos encontrado productos con ese nombre."

}

module.exports = getProductByName;