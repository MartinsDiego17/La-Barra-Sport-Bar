const { sale, product } = require('../db');

const crearVenta = async ({ total, date, products }) => {

    try {
        const productInstances = [];

        for (const pro of products) {
            if (pro !== "Delivery") {
                const productInstance = await product.findOne({ where: { name: pro } });
                if (productInstance) {
                    productInstance.image = ""; 
                    productInstances.push(productInstance);
                } else {
                    console.log(`Product with name ${pro} not found`);
                }
            }
        }

        const newSale = await sale.create({
            total,
            date
        });

        for (const productInstance of productInstances) {
            productInstance.dataValues.image = "";  
            await newSale.addProduct(productInstance);
        }

        const response = await sale.findOne({
            where: { id: newSale.id },
            include: {
                model: product,
                through: {
                    attributes: []
                }
            }
        });

        response.products.forEach(pro => {
            pro.dataValues.image = "";
        })

        return response;
    } catch (error) {
        throw new Error('An error occurred while creating the sale: ' + error.message);
    }
};

module.exports = crearVenta;
