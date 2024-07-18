const { user } = require("../db");

const deleteUser = async ({ id }) => {

    const userFound = await user.findByPk(id);
    const copyUser = userFound;

    if (userFound) {
        await userFound.destroy();
        return copyUser;
    }

    return "No hemos encontrado usuarios con ese ID."

}

module.exports = deleteUser;
