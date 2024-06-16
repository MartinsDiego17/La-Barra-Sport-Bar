const { sale, product } = require('../db');

const crearVenta = async ({ total, date, products }) => {
    try {
        const productInstances = [];
        for (const productName of products) {
            const productInstance = await product.findOne({ where: { name: productName } });
            if (productInstance) {
                productInstances.push(productInstance);
            } else {
                throw new Error(`Product with name ${productName} not found`);
            }
        }

        const newSale = await sale.create({
            total,
            date
        });

        for (const productInstance of productInstances) {
            await newSale.addProduct(productInstance);
        }

        const response = await sale.findOne({
            where: { id: newSale.id },
            include: product
        });

        response.products.forEach(pro => pro.image = "");

        return response;
    } catch (error) {
        throw new Error('An error occurred while creating the sale: ' + error.message);
    }
};

module.exports = crearVenta;
