const { user } = require("../db");

const updateUser = async ({ id, name, image, email, isAdmin }) => {

    let userToUpdate = await user.findByPk(id);
    userToUpdate.isAdmin = isAdmin;
    await userToUpdate.save();
    return userToUpdate.dataValues;

};

module.exports = updateUser;