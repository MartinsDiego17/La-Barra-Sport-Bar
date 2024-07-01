const getSaleById = require("../controllers/getSaleById");

const handlerSaleById = async (req, res) => {

    try {
        const { id } = req.params;
        const saleFound = await getSaleById({ id });
        res.status(200).json(saleFound)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerSaleById;