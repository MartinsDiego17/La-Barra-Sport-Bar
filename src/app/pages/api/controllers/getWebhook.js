require('dotenv').config();
const crearVenta = require("./createSale");

const handleStatus = async (data) => {
    switch (data.status) {
        case 'approved': {
            const total = data.transaction_details.total_paid_amount;
            const date = new Date();
            const productNames = data.additional_info.items.map(pro => pro.title);
            try {
                const data = await crearVenta({ total, date, products: productNames });
                return data;
            } catch (error) {
                console.error("ERROR: ", error.message);
            }
            break;
        }
        case 'rejected': {
            console.log("La venta fue rechazada");
            break;
        }
        case 'pending': {
            console.log("La venta está pendiente");
            break;
        }
        default: {
            break;
        }
    }
}

const getWebhook = async ({ paymentId }) => {

    const token = process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN;
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId && paymentId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.ok) {
        const data = await response.json();
        await handleStatus(data);
        return data;
    }
    return {};

};

module.exports = getWebhook;