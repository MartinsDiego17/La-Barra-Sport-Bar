const { MercadoPagoConfig, Preference } = require('mercadopago');
const { generateUrlAccess } = require('../extra/generateUrlAccess');
const token = process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN;
const client = new MercadoPagoConfig({ accessToken: token });

const createPreference = async ({ productos, total, userName, direcciones }) => {

    const items = productos.map(pro => ({
        title: pro.name,
        quantity: 1,
        unit_price: Number(pro.price),
        currency_id: "ARS"
    }));

    let totalSum = 0;
    productos.forEach(pro => totalSum += pro.price);

    if (totalSum !== total) {
        items.push({
            title: "Delivery",
            quantity: 1,
            unit_price: Number(total - totalSum),
            currency_id: "ARS"
        })
    }

    const foreignUrl = "https://0800-2802-8010-d5df-200-a4b5-8ffd-ae86-dff8.ngrok-free.app";
    const urlSuccess = await generateUrlAccess(userName, direcciones, productos, total);
    const urlFailure = "https://www.youtube.com/";
    const urlPending = "https://www.youtube.com/";
    const notification_url = `${foreignUrl}/webhook`;

    const body = {
        items: items,
        back_urls: {
            success: urlSuccess,
            failure: urlSuccess,
            pending: urlPending
        },
        auto_return: "approved",
        notification_url: notification_url
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    return {
        id: result.id
    };
};

module.exports = createPreference; 
