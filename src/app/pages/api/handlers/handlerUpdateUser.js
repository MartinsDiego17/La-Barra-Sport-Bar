const updateUser = require("../controllers/updateUser");

const handlerUpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image, email, isAdmin } = req.body;

        const updatedUser = await updateUser({ id, name, image, email, isAdmin });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handlerUpdateUser;
