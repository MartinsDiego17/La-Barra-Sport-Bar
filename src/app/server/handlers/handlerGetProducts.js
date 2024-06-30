const getProducts = require("../controllers/getProducts");

const handlerGetProducts = async (req, res) => {
    try {
        const allProducts = await getProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlerGetProducts;
