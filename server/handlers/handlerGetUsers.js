const getUsers = require("../controllers/getUsers");

const handlerGetUsers = async (req, res) => {
    try {
        const allUsers = await getUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlerGetUsers;
