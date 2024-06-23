const getSales = require("../controllers/getSales");

const generateDate = () => {
    const date = new Date();
    const dia = date.getUTCDate();
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const mes = meses[date.getUTCMonth()];
    const año = date.getUTCFullYear();
    return `${dia} de ${mes} de ${año}`;
}

const generateUrlAccess = async (userName, direcciones, productos, total) => {

    const metodoEntrega = direcciones.direccion.length ? "Delivery" : "Retiro en local";
    const numeroTelefonico = '3417506932';
    const quantityProducts = [];

    productos.forEach(pro => {
        const sameProduct = quantityProducts.find(prod => prod?.name === pro?.name);
        if (sameProduct) {
            if (sameProduct.cantidad) sameProduct.cantidad++;
        } else {
            pro.cantidad = 1;
            quantityProducts.push({
                name: pro.name,
                cantidad: pro.cantidad
            });
        }
    });

    const formattedProducts = quantityProducts.map(pro => {
        return `- ${pro.name} (${pro.cantidad})`;
    });

    let mensaje = "";
    let idPedido = 0;

    try {
        const data = await getSales();
        idPedido = data[data.length - 1].id + 1;
    } catch (error) {
        console.error("ERROR: ", error.message);
    }

    mensaje = `
*La Barra Sport & Bar*, confirmación de pedido *#${idPedido}*
*NO MODIFICAR MENSAJE*
        
*Número de pedido*: ${idPedido}
*A nombre de*: ${userName}
*Fecha del pedido*: ${generateDate()}
*Método de entrega*: ${metodoEntrega}
${metodoEntrega === "Delivery" ? `
*Dirección de entrega*:
${direcciones.direccion}
Entre: ${direcciones.primerEntrecalle} y ${direcciones.segundaEntrecalle}
`: ``}*Productos* 
${formattedProducts}
*Total*: $${total}

Saludos y muchas gracias.
`;

    const urlFinal = `https://wa.me/549${numeroTelefonico}?text=${encodeURIComponent(mensaje)}`;
    return urlFinal;
};

module.exports = {
    generateUrlAccess
};
