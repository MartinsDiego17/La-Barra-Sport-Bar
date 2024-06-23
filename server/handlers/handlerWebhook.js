const getWebhook = require("../controllers/getWebhook");

const handlerWebhook = async (req, res) => {
    try {
        const paymentId = req.query.id;
        const webhook = await getWebhook({ paymentId });
        res.status(200).json(webhook);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerWebhook;