const createPreference = require("../controllers/createPreference");

const handlerCreatePreference = async (req, res) => {

    try {
        const { productos, total, userName, direcciones } = req.body;
        const preferencia = await createPreference({ productos, total, userName, direcciones });
        res.status(200).json(preferencia)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreatePreference;