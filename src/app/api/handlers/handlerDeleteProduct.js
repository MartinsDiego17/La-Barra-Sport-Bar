const deleteProduct = require("../controllers/deleteProduct");

const handlerDeleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        console.log("ID: ", id)
        const deletedProduct = await deleteProduct({ id });
        res.status(200).json(deletedProduct)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerDeleteProduct;