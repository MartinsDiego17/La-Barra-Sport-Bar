const getSales = require("../controllers/getSales");

const handlerGetSales = async (req, res) => {
    try {
        const allSales = await getSales();
        res.status(200).json(allSales);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlerGetSales;
