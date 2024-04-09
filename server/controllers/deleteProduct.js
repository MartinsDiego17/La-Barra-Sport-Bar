const { product } = require("../db");

const deleteProduct = async ({ id }) => {

    const productFound = await product.findByPk(id);
    const copyProduct = productFound;

    if (productFound) {
        await productFound.destroy();
        return copyProduct;
    }

    return "No hemos encontrado productos con ese ID."

}

module.exports = deleteProduct;
