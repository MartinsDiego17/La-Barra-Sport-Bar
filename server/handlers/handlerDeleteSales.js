const deleteSales = require("../controllers/deleteSales");

const handlerDeleteSales = async (req, res) => {

    try {
        const deletedSales = await deleteSales();
        res.status(200).json(deletedSales);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerDeleteSales;