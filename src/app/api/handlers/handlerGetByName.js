const getProductByName = require("../controllers/getProductByName");

const handlerGetByName = async (req, res) => {

    try {
        const { name } = req.params;
        const productFound = await getProductByName({ name });
        res.status(200).json(productFound)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerGetByName;