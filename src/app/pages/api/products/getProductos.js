const getProducts = require("../controllers/getProducts");

const getProductos = async (req, res) => {
    console.log("this is the back")
    try {
        const allProducts = await getProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = getProductos;
