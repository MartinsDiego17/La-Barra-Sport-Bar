const { sale, product } = require("../db");

const getSales = async () => {

    let sales = await sale.findAll({
        include: {
            model: product,
            through: { attributes: [] },
        }
    });

    sales = sales.sort((a, b) =>  a.id - b.id);

    const allSales = sales.map(venta => {

        const listaProductos = [];
        const listaNombres = venta.dataValues.products.map(pro => pro.name);
        const listaPrecios = venta.dataValues.products.map(pro => pro.price);
        const listaIds = venta.dataValues.products.map(pro => pro.id);

        listaNombres.forEach((name, index) => {
            listaProductos.push({ name: name, price: listaPrecios[index], id: listaIds[index] });
        })

        return {
            id: venta.id,
            total: venta.total,
            date: venta.date,
            products: listaProductos
        };
    });

    return allSales;
};

module.exports = getSales;