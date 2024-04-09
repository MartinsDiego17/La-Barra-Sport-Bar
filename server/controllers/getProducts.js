const { product } = require("../db");

const getProducts = async () => {
    const products = await product.findAll();
    
    const allProducts = products.map(product => {
        return {
            id: product.id,
            image: product.image,
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock
        };
    });
    
    return allProducts;
};

module.exports = getProducts;
