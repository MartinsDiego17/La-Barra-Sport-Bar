const { sale } = require("../db");

const deleteUser = async () => {
    try {
        const listSales = await sale.findAll();
        console.log("Lista de ventas: ", listSales);

        if (listSales.length > 0) {
            await Promise.all(listSales.map(saleItem => saleItem.destroy()));
            return listSales; 
        } else {
            return [];
        }
    } catch (error) {
        throw new Error('An error occurred while deleting sales: ' + error.message);
    }
}

module.exports = deleteUser;
