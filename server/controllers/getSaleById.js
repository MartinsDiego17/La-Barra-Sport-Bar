const { sale, product } = require('../db');

const getSaleById = async ({ id }) => {

    const saleFound = await sale.findOne({
        where: { id: id },
        include: { model: product, through: { attributes: [] }, },
    });

    let productos = [];
    saleFound.dataValues.products.forEach(pro => {
        pro.image = "";
        productos.push(pro);
    })

    if (saleFound) {
        const sale = {
            id: saleFound.id,
            total: saleFound.total,
            date: saleFound.date,
            products: productos
        }
        return sale;
    }

    return "No hemos encontrado ventas con ese ID."

}

module.exports = getSaleById;