const updateProduct = require("../controllers/updateProduct");

const handlerUpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, category, price, stock, ingredients } = req.body;
        
        const updatedProduct = await updateProduct({ 
            id, 
            image, 
            name, 
            category, 
            price, 
            stock,
            ingredients
        });
        
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handlerUpdateProduct;
