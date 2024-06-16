const getUserById = require("../controllers/getUserById");

const handlerUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const userFound = await getUserById({ id });
        res.status(200).json(userFound)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerUserById;