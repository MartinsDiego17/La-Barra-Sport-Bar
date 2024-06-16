const { user } = require("../db");

const getUsers = async () => {

    const users = await user.findAll();
    if (users.length < 1) return [];

    const allUsers = users;

    return allUsers;
};

module.exports = getUsers;
