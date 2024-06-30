const { user } = require('../db');

const getUserByName = async ({ id }) => {

    const userFound = await user.findOne({ where: { id: id } });

    if (userFound) {
        const user = {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            image: userFound.image,
            isAdmin: userFound.isAdmin,
        }
        return user;
    }

    return "No hemos encontrado usuarios con ese ID."

}

module.exports = getUserByName;