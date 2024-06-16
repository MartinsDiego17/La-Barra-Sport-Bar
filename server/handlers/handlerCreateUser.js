const createUser = require("../controllers/createUser");

const handlerCreateUser = async (req, res) => {

    try {
        const { name, image, email, isAdmin } = req.body;
        const creado = await createUser({ name, image, email, isAdmin });
        res.status(200).json(creado)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateUser;