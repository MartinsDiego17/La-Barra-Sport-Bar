const deleteUser = require("../controllers/deleteUser");

const handlerDeleteUser = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedUser = await deleteUser({ id });
        res.status(200).json(deletedUser)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerDeleteUser;